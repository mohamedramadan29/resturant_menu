<?php

namespace App\Services;

use App\Interfaces\PaymentGatewayInterface;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        // dd($request->all());
        $amount = $request->amount;
        $plainData = [
            [
                "id" => $this->id,
                "password" => $this->password,
                "action" => "1",
                "currencyCode" => "682",
                "errorURL" => route('payment.failed'),
                // "responseURL" => $request->getSchemeAndHttpHost() . "/api/payment/callback",
                "responseURL" => route('payment.callback'),
                "trackId" => uniqid(),
                "amt" => $amount
            ]
        ];
        // Step 2: Encrypt Plain Data
        $encryptedData = $this->encryptionService->encrypt(json_encode($plainData));

        $encryptedRequest = [
            [
                "id" => $this->id,
                "trandata" => $encryptedData,
                "errorURL" => route('payment.failed'),
                // "responseURL" => $request->getSchemeAndHttpHost() . "/api/payment/callback",
                "responseURL" => route('payment.callback'),
            ]
        ];


        $response = $this->buildRequest('POST', '/pg/payment/hosted.htm', $encryptedRequest);

        Storage::put('response.json', json_encode($response));

        $response_data = $response->getData(true);
        //dd($response_data);

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
        try {
            \Illuminate\Support\Facades\Log::info('AlRajhi Callback Raw Data:', $request->all());

            if (!$request->has('trandata')) {
                \Illuminate\Support\Facades\Log::error('AlRajhi Callback - No trandata');
                return false;
            }

            $tran_data = $this->encryptionService->decrypt($request->get('trandata'));
            $response = urldecode($tran_data);
            $data = json_decode($response, true);

            \Illuminate\Support\Facades\Log::info('AlRajhi Decoded Response:', ['data' => $data]);

            // تخزين بيانات الاستجابة للتدقيق
            Storage::put('alrajhi_callback.json', json_encode([
                'callback_response' => $request->all(),
                'callback_after_decode' => $data
            ]));

            // التحقق من نجاح العملية
            if (isset($data[0]['result']) && ($data[0]['result'] === 'CAPTURED' || $data[0]['result'] === 'APPROVED')) {
                \Illuminate\Support\Facades\Log::info('AlRajhi Payment Success');
                return true;
            }

            \Illuminate\Support\Facades\Log::error('AlRajhi Payment Failed - Invalid Result');
            return false;

        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('AlRajhi Payment Error:', ['error' => $e->getMessage()]);
            return false;
        }
    }
}
