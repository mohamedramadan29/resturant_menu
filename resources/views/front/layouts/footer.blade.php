<!-- Panel Cart -->
<div id="panel-cart">
    <div class="panel-cart-container">
        <div class="panel-cart-title">
            <h5 class="title"> سلة الشراء </h5>
            <button class="close" data-toggle="panel-cart">
                <i class="bi bi-x-square"></i>
            </button>
        </div>
        @include('front.partials.cart_items')
    </div>
    <a href="#" class="panel-cart-action checkout_button btn btn-secondary btn-block btn-lg"><span> اتمام الطلب
        </span></a>
</div>
<div class="modal fade" id="verifyPhoneModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">التحقق من رقم الهاتف</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="verifyPhoneForm">
                    <div class="form-group">
                        <label for="phone">رقم الهاتف</label>
                        <input type="text" id="phone" class="form-control" placeholder="أدخل رقم الهاتف">
                    </div>
                    <button type="submit" class="btn btn-primary">إرسال رمز التحقق</button>
                </form>
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
                        // إذا لم يكن مسجل الدخول، عرض المودال
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
                <h5 class="text-muted" style="margin-top: 15px" > تابعنا </h5>
                <a href="https://www.snapchat.com/add/tragaif"
                    class="icon icon-social icon-circle icon-sm icon-facebook"><i class="bi bi-snapchat"></i></a>
                <a href="https://www.tiktok.com/@tragaif?lang=en"
                    class="icon icon-social icon-circle icon-sm icon-twitter"> <i class="bi bi-tiktok"></i> </a>
                <a href="https://www.instagram.com/tragaif/"
                    class="icon icon-social icon-circle icon-sm icon-instagram"><i class="bi bi-instagram"></i></a>
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
<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="{{ asset('assets/front/js/core.js') }}"></script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        $('.contact').on('click', function(e) {
            window.location.href = '{{ url('contact') }}';
        });
        $('.privacy').on('click', function(e) {
            window.location.href = '{{ url('privacy-policy') }}';
        });
        $('.terms').on('click', function(e) {
            window.location.href = '{{ url('terms') }}';
        });
    });
</script>
@toastifyJs
@yield('js')
</body>

</html>
