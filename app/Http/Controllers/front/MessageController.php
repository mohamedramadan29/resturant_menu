<?php

namespace App\Http\Controllers\front;

use Illuminate\Http\Request;
use App\Models\front\Contact;
use App\Http\Traits\Message_Trait;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    use Message_Trait;

    public function index()
    {
        return view("front.contact");
    }
    public function store(Request $request)
    {
        try {

            $data = $request->all();
            $rules = [
                'name' => 'required|string',
                'phone' => 'required',
                'subject' => 'required',
                'message' => 'required|string',
              //  'g-recaptcha-response' => ['required', 'captcha']
            ];
            $messages = [
                'name.required' => ' من فضلك ادخل الاسم   ',
                'name.string' => ' من فضلك ادخل الاسم بشكل صحيح ',
                'subject.required' => ' من فضلك ادخل عنوان الرسالة  ',
                'message.required' => ' من فضلك ادخل الرسالة  ',
                'message.string' => ' من فضلك ادخل نص الرسالة بشكل صحيح  ',
              //  'g-recaptcha-response.required' => 'من فضلك قم بتأكيد أنك لست روبوتًا',
              //  'g-recaptcha-response.captcha' => 'فشل التحقق من reCAPTCHA، يرجى المحاولة مرة أخرى'
            ];
            $validator = Validator::make($data, $rules, $messages);
            if ($validator->fails()) {
                return Redirect()->back()->withInput()->withErrors($validator);
            }
            DB::beginTransaction();
            $message = new Contact();
            $message->create([
                'name' => $data['name'],
                'phone' => $data['phone'],
                'subject' => $data['subject'],
                'message' => $data['message'],
            ]);
            $email = env('MAIL_FROM_ADDRESS');

            $MessageDate = [
                'name' => $data['name'],
                'phone' => $data['phone'],
                'subject' => $data['subject'],
                'contact_message' => $data['message']
            ];
            Mail::send('front.mails.new-contact-message', $MessageDate, function ($message) use ($email) {
                $message->to($email)->subject(' لديك رسالة تواصل جديدة من صفحة تواصل معنا  ');
            });

            DB::commit();
            return $this->success_message('  تم ارسال رسالتك بنجاح سوف نتواصل معك في اقرب وقت ممكن  ');


        } catch (\Exception $e) {
            return $this->exception_message($e);
        }

    }
}
