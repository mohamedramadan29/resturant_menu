<div class="modal fade" id="verifyPhoneModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-between">
                <h5 class="modal-title"> ادخل رقم الهاتف لتسجيل الدخول </h5>
                <button style="left: 10px;right: auto !important;font-size: 20px;" type="button" class="close"
                    data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" action="{{ route('send.verification.code') }}">
                    @csrf
                    <div class="form-group">
                        <label for="phone">رقم الهاتف</label>
                        <input required type="text" id="phone" class="form-control"
                            placeholder="مثال: 0500000000" name="phone" value="{{ old('phone') }}" maxlength="10"
                            oninput="validatePhoneNumber(this)">
                        <small id="phone-error" class="text-danger" style="display: none;"> يجب أن يكون الرقم مكونًا من
                            10 أرقام ويبدأ بـ 05 </small>
                    </div>
                    <button type="submit" class="btn btn-primary"> تسجيل الدخول </button>
                </form>
                <script>
                    function validatePhoneNumber(input) {
                        let phone = input.value;
                        let errorMsg = document.getElementById("phone-error");

                        // السماح فقط بالأرقام
                        input.value = input.value.replace(/\D/g, '');

                        // التأكد من أن الرقم يبدأ بـ 0
                        if (input.value.length > 0 && input.value.charAt(0) !== '0') {
                            input.value = '05';
                        }

                        // منع تجاوز 10 أرقام
                        if (input.value.length > 10) {
                            input.value = input.value.slice(0, 10);
                        }

                        // إظهار رسالة الخطأ إن لم يكن الرقم صحيحًا
                        if (!/^0\d{9}$/.test(input.value)) {
                            errorMsg.style.display = "block";
                        } else {
                            errorMsg.style.display = "none";
                        }
                    }
                </script>
                <form id="verifyCodeForm" style="display: none;">
                    @csrf
                    <div class="form-group">
                        <input type="hidden" id="hiddenPhone" name="phone">
                        <label for="verificationCode">رمز التحقق</label>
                        <input type="text" id="verificationCode" class="form-control" placeholder="أدخل رمز التحقق">
                    </div>
                    <button type="submit" class="btn btn-success">تأكيد</button>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- Body Overlay -->
<div id="body-overlay"></div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        $('.checkout_button').on('click', function(e) {
            e.preventDefault();
            console.log('clicked');
            // تحقق من تسجيل الدخول عبر AJAX
            $.ajax({
                url: '{{ route('check.login.status') }}', // راوت للتحقق من حالة تسجيل الدخول
                method: 'GET',
                success: function(response) {
                    if (response.logged_in) {
                        // إذا كان المستخدم مسجل الدخول، انتقل إلى صفحة إتمام الطلب
                        window.location.href = '{{ url('checkout') }}';
                    } else {
                        //   window.location.href = '{{ url('checkout') }}';
                        // إذا لم يكن مسجل الدخول، عرض المودال
                        $('#offcanvascart').removeClass('show');
                        $('#offcanvascart').hide();
                        $('#verifyPhoneModal').modal('show');
                    }
                },
                error: function(xhr) {
                    console.error('خطأ أثناء التحقق من تسجيل الدخول');
                }
            });
        });
    });
</script>
<script>
    $('#verifyPhoneForm').on('submit', function(e) {
        e.preventDefault();

        const phone = $('#phone').val();

        $.ajax({
            url: '{{ route('send.verification.code') }}', // راوت لإرسال رمز التحقق
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                phone
            },
            success: function(response) {
                //alert('تم إرسال رمز التحقق');
                Toastify({
                    text: response.message,
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#4CAF50",
                }).showToast();
                $('#verifyPhoneForm').hide();
                $('#verifyCodeForm').show();
                // تخزين رقم الهاتف في الحقل المخفي
                $('#hiddenPhone').val(phone);
            },
            error: function(xhr) {
                console.error('خطأ أثناء إرسال رمز التحقق');
            }
        });
    });
    //////////////////////////////////////////////////////////////////////////////
    $('#verifyCodeForm').on('submit', function(e) {
        e.preventDefault();


        const code = $('#verificationCode').val();
        const phone = $('#hiddenPhone').val();

        $.ajax({
            url: '{{ route('verify.code') }}', // راوت للتحقق من الرمز
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                code,
                phone
            },
            success: function(response) {
                if (response.verified) {
                    alert('تم التحقق بنجاح');
                    window.location.href = '{{ url('checkout') }}';
                } else {
                    alert('رمز التحقق غير صحيح');
                }
            },
            error: function(xhr) {
                console.error('خطأ أثناء التحقق من الرمز');
            }
        });
    });
</script>
<!-- Footer -->
<footer id="footer" class="bg-dark dark">
    @php
        $public_setting = \App\Models\admin\PublicSetting::first();
    @endphp
    <div class="container">
        <!-- Footer 1st Row -->
        <div class="footer-first-row row">
            <div class="col-lg-3 text-center">
                <a href="{{ url('/') }}"><img
                        src="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}"
                        alt="" width="88" class="mt-5 mb-5" /></a>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-muted" style="margin-top: 15px"> تابعنا </h5>
                <a href="https://www.snapchat.com/add/tragaif"
                    class="icon icon-social icon-circle icon-sm icon-facebook"><i class="bi bi-snapchat"></i></a>
                <a href="https://www.tiktok.com/@tragaif?lang=en"
                    class="icon icon-social icon-circle icon-sm icon-twitter"> <i class="bi bi-tiktok"></i> </a>
                <a href="https://www.instagram.com/tragaif/"
                    class="icon icon-social icon-circle icon-sm icon-instagram"><i class="bi bi-instagram"></i></a>
                <br>
                <a target="_blank" href="{{ asset('assets/uploads/اشعار قبول التسجيل لضريبة القيمة المضافة-غير خاضع.pdf') }}" class="d-block" style="margin-top: 10px">
                    <img width="50px" src="{{ asset('assets/uploads/vat.svg') }}" alt="">
                </a>
            </div>
            <div class="col-lg-5 col-md-6">
                <h5 class="text-muted" style="margin-top: 15px"> روابط </h5>
                <ul class="list-posts">
                    <li>
                        <a href="{{ url('contact') }}" class="title contact"> اتصل بنا </a>
                    </li>
                    <li>
                        <a href="{{ url('terms') }}" class="title terms"> الشروط والاحكام </a>
                    </li>
                    <li>
                        <a href="{{ url('privacy-policy') }}" class="title privacy"> سياسة الخصوصية </a>
                    </li>
                </ul>
                <div class="payments">
                    <img src="{{ asset('assets/front/uploads/visa.png') }}">
                    <img src="{{ asset('assets/front/uploads/master.png') }}">
                    <img src="{{ asset('assets/front/uploads/mada.svg') }}">
                    <img src="{{ asset('assets/front/uploads/urp.png') }}">
                </div>
            </div>
        </div>
        <!-- Footer 2nd Row -->
        <div class="footer-second-row">
            <span class="text-muted"> جميع الحقوق محفوظة لدي تراغيف بواسطة ... </span>
        </div>
    </div>

    <!-- Back To Top -->
    <button id="back-to-top" class="back-to-top">
        <i class="bi bi-arrow-up"></i>
    </button>
</footer>
<!-- Footer / End -->
<!-- JS Core -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>



@toastifyJs
@yield('js')
</body>

</html>
