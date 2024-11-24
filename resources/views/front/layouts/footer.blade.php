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
    <a href="#" class="panel-cart-action checkout_button btn btn-secondary btn-block btn-lg"><span> اتمام الطلب  </span></a>
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
                code, phone
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
    <div class="container">
        <!-- Footer 1st Row -->
        <div class="footer-first-row row">
            <div class="col-lg-3 text-center">
                <a href="index.html"><img src="assets/img/logo-light.svg" alt="" width="88"
                        class="mt-5 mb-5" /></a>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-muted">Latest news</h5>
                <ul class="list-posts">
                    <li>
                        <a href="blog-post.html" class="title">How to create effective webdeisign?</a>
                        <span class="date">February 14, 2015</span>
                    </li>
                    <li>
                        <a href="blog-post.html" class="title">Awesome weekend in Polish mountains!</a>
                        <span class="date">February 14, 2015</span>
                    </li>
                    <li>
                        <a href="blog-post.html" class="title">How to create effective webdeisign?</a>
                        <span class="date">February 14, 2015</span>
                    </li>
                </ul>
            </div>
            <div class="col-lg-5 col-md-6">
                <h5 class="text-muted">Subscribe Us!</h5>
                <!-- MailChimp Form -->
                <form
                    action="http://suelo.us12.list-manage.com/subscribe/post-json?u=ed47dbfe167d906f2bc46a01b&amp;id=24ac8a22ad"
                    id="sign-up-form" class="sign-up-form validate-form mb-5" method="POST">
                    <div class="input-group">
                        <input name="EMAIL" id="mce-EMAIL" type="email" class="form-control"
                            placeholder="Tap your e-mail..." required />
                        <span class="input-group-btn">
                            <button class="btn btn-primary btn-submit" type="submit">
                                <span class="description">Subscribe</span>
                                <span class="success">
                                    <svg x="0px" y="0px" viewBox="0 0 32 32">
                                        <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none"
                                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"
                                            stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                    </svg>
                                </span>
                                <span class="error">Try again...</span>
                            </button>
                        </span>
                    </div>
                </form>
                <h5 class="text-muted mb-3">Social Media</h5>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i
                        class="fa fa-facebook"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-google"><i
                        class="fa fa-google"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"><i
                        class="fa fa-twitter"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-youtube"><i
                        class="fa fa-youtube"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i
                        class="fa fa-instagram"></i></a>
            </div>
        </div>
        <!-- Footer 2nd Row -->
        <div class="footer-second-row">
            <span class="text-muted">Copyright Soup 2017©. Made with love by Suelo.</span>
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
@toastifyJs
@yield('js')
</body>

</html>
