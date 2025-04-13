<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>جاري التحويل</title>
</head>
<body onload="document.forms[0].submit()">
    <p>يرجى الانتظار... جاري تحويلك إلى بوابة الدفع.</p>

    <form method="POST" action="https://securepayments.alrajhibank.com.sa/pg/payment/hosted.htm">
        <input type="hidden" name="id" value="{{ $id }}">
        <input type="hidden" name="trandata" value="{{ $trandata }}">
        <input type="hidden" name="responseURL" value="{{ $responseURL }}">
        <input type="hidden" name="errorURL" value="{{ $errorURL }}">
        <noscript><button type="submit">انقر هنا إذا لم يتم التحويل تلقائيًا</button></noscript>
    </form>
</body>
</html>
