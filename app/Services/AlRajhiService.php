<?php

namespace App\Services;

use Exception;
use App\Models\front\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use App\Interfaces\PaymentGatewayInterface;

class AlRajhiService extends BasePaymentService implements PaymentGatewayInterface
{

    protected AlRajhiEncryptionService $encryptionService;

    protected $id;
    protected $password;
    public function __construct()
    {
        $this->encryptionService = new AlRajhiEncryptionService();
        $this->base_url = env('ARAJHI_BASE_URL');
        $this->id = env('ARAJHI_TRANSPORTAL_ID');
        $this->password = env('ARAJHI_PASSWORD');
        $this->header = [
            'Content-Type' => 'application/json',
            'accept' => 'application/json',
        ];
    }

    //✅✅
    public function sendPayment(Request $request)
    {
        $order_id = $request->get('order_id');
        $order = Order::findOrFail($order_id);
          // توليد trackId جديد وتحديثه في الطلب
        $trackId = uniqid();
        $order->update(['track_id' => $trackId]);
       // dd($trackId);
        $plainData = [
            [
                "id" => $this->id,
                "password" => $this->password,
                "action" => "1",
                "currencyCode" => "682",
                "errorURL" => route('payment.failed'),
                "responseURL" => $request->getSchemeAndHttpHost() . "/api/payment/callback",
                "trackId" =>$trackId,
                "amt" => $request->get('amount'),
                "order_id" => $order->id,
            ]
        ];
        // Step 2: Encrypt Plain Data
        $encryptedData = $this->encryptionService->encrypt(json_encode($plainData));

        $encryptedRequest = [
            [
                "id" => $this->id,
                "trandata" => $encryptedData,
                "errorURL" => route('payment.failed'),
                "responseURL" => $request->getSchemeAndHttpHost()."/api/payment/callback",
            ]
        ];


        $response = $this->buildRequest('POST', '/pg/payment/hosted.htm', $encryptedRequest);

        Storage::put('response.json', json_encode($response));

        $response_data = $response->getData(true);

        $result = $response_data['data'][0]['result'];

        [$paymentID, $url] = explode(':', $result, 2);

        $newUrl = $url . '?PaymentID=' . $paymentID;
        if ($response_data['success']) {
            // Direct the user to the payment page
            return redirect()->away($newUrl);
        }

        // if ($response_data['success']) {
        //     return [
        //         'success' => true,
        //         'url' => $newUrl,
        //     ];
        // }
        return [
            'success' => false,
            'url' => route('payment.failed')
        ];

    }
    //✅✅
    public function callBack(Request $request)
    {
        $tran_data = $this->encryptionService->decrypt($request->get('trandata'));

        $response = urldecode($tran_data);
        $data = json_decode($response, true);
        if (isset($data[0]['result']) && $data[0]['result'] === 'CAPTURED') {
            Storage::put('alrajhi_callback.json', json_encode([
                    'callback_response' => $request->all(),
                    'callback_after_encode' => $data,
                ]
            ));
          //  return true;
          return $data;
        }

        return false;

    }
}
