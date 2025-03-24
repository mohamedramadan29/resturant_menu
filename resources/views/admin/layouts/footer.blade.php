<!-- ========== Footer Start ========== -->
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <script>
                    document.write(new Date().getFullYear())
                </script> &copy; اسم الموقع . <iconify-icon icon="iconamoon:heart-duotone"
                    class="fs-18 align-middle text-danger"></iconify-icon> <a href="#" class="fw-bold footer-text"
                    target="_blank"> Mr </a>
            </div>
        </div>
    </div>
</footer>
<!-- ========== Footer End ========== -->

</div>


</div>
<!-- END Wrapper -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<!-- Vendor Javascript (Require in all Page) -->
<script src="{{ asset('assets/admin/js/vendor.js') }}"></script>

<!-- App Javascript (Require in all Page) -->
<script src="{{ asset('assets/admin/js/app.js') }}"></script>

<!-- Vector Map Js -->
{{-- <script src="{{asset('assets/admin/vendor/jsvectormap/js/jsvectormap.min.js')}}"></script> --}}
{{-- <script src="{{asset('assets/admin/vendor/jsvectormap/maps/world-merc.js')}}"></script> --}}
{{-- <script src="{{asset('assets/admin/vendor/jsvectormap/maps/world.js')}}"></script> --}}

<!-- Dashboard Js -->

<script src="{{ asset('assets/admin/js/pages/dashboard.js') }}"></script>

@yield('js')
@toastifyJs
</body>

</html>
