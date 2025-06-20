<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\NeoleapHelper;
use Illuminate\Support\Facades\Http;
use App\Interfaces\PaymentGatewayInterface;

class testpaymentcontroller extends Controller
{
    protected PaymentGatewayInterface $paymentGateway;
    public function __construct(PaymentGatewayInterface $paymentGateway)
    {
        $this->paymentGateway = $paymentGateway;
    }
    public function paymentProcess(Request $request)
    {

        return $this->paymentGateway->sendPayment($request);
    }

    public function callBack(Request $request): \Illuminate\Http\RedirectResponse
    {
        $response = $this->paymentGateway->callBack($request);
        if ($response) {
            if (isset($response[0]['result']) && $response[0]['result'] === 'CAPTURED') {
                dd('Goooood2');
            }
            return redirect()->route('payment.failed');
        }
        return redirect()->route('payment.failed');
    }

    public function success()
    {
        return view('payment-success');
    }
    public function failed()
    {

        return view('payment-failed');
    }
}
