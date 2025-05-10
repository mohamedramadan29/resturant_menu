 <!-- Modal / Product -->
 <div class="modal fade product-modal" id="product-modal_{{ $product['id'] }}" tabindex="-1" role="dialog"
     aria-hidden="true" aria-labelledby="exampleModalLabel" tabindex="-1">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header d-flex justify-content-between">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">
                     {{ $product['name'] }}
                 </h1>
                 <button style="margin:0;" type="button" class="btn-close" data-bs-dismiss="modal"
                     aria-label="Close"></button>
             </div>
             <div class="modal-product-details">
                 <div class="product-image" loading="lazy"
                     style="background-image: url('{{ asset('assets/uploads/product_images/' . $product['image']) }}')">
                 </div>
                 <div class="row align-items-center" style="padding:15px;">
                     <div class="col-12">
                         <h6 class="mb-1 product-modal-name">
                             {{ $product['name'] }}</h6>
                         <span class="product-modal-ingredients">{{ $product['description'] }}</span>
                         @if ($product['carb'] != null)
                             <span class="d-block" style="color:#000000">
                                 <strong> السعرات الحرارية :
                                     {{ $product['carb'] }} سعر حراري</strong>
                             </span>
                         @endif
                     </div>
                 </div>
             </div>
             <form id="addToCart_{{ $product['id'] }}" class="add-to-cart-form" method="post"
                 action="{{ route('cart.add') }}">
                 <div class="quantity_section">
                     <div>
                         <div class="quantity">
                             <div class="quantity-control d-flex align-items-center">
                                 <!-- زر تقليل العدد -->
                                 <button class="decrease-quantity btn" data-product-id="{{ $product['id'] }}"
                                     data-product-price="{{ $product['price'] }}">
                                     -
                                 </button>
                                 <!-- إدخال العدد -->
                                 <input id="quantity-{{ $product['id'] }}" type="number" value="1"
                                     name="quantity" class="mx-2 text-center" style="width: 60px;" min="1"
                                     data-product-id="{{ $product['id'] }}"
                                     data-product-price="{{ $product['price'] }}">
                                 <!-- زر زيادة العدد -->
                                 <button class="increase-quantity btn" data-product-id="{{ $product['id'] }}"
                                     data-product-price="{{ $product['price'] }}">
                                     +
                                 </button>
                             </div>
                         </div>
                     </div>
                     <!-- تحديد الحجم إذا كان المنتج متغير -->
                     @if ($product['product_type'] == 'variable')
                         <div class="price_section">
                             <label for="product-size-{{ $product['id'] }}" class="form-label mt-2"> اختر الحجم
                             </label>
                             <select required class="form-select mb-3 size-select"
                                 id="product-size-{{ $product['id'] }}" name="size"
                                 data-product-id="{{ $product['id'] }}">
                                 <option value="" selected disabled>اختر
                                     الحجم
                                 </option> <!-- خيار افتراضي -->
                                 @foreach ($product['variations'] as $variation)
                                     <option value="{{ $variation['id'] }}" data-price="{{ $variation['price'] }}">
                                         {{ $variation['size'] }} -
                                         {{ number_format($variation['price'], 2) }}
                                         ريال
                                     </option>
                                 @endforeach
                             </select>
                         </div>
                     @else
                         <div class="price_section">
                             @if ($product['discount'] > 0)
                                 <span class="text-muted">
                                     <s>
                                         <strong>{{ number_format($product['price'], 2) }} </strong>
                                     </s>
                                 </span>
                                 <strong>{{ number_format($product['price'] - $product['discount'], 2) }}
                                 </strong>
                                 <img loading="lazy" src="{{ asset('assets/uploads/riyal.svg') }}" width="15">
                             @else
                                 <strong>{{ number_format($product['price'], 2) }} </strong>
                                 <img loading="lazy" src="{{ asset('assets/uploads/riyal.svg') }}" width="15">
                             @endif
                             {{-- <span id="total-price-{{ $product['id'] }}"
                                 class="product-modal-price">{{ number_format($product['price'], 2) }}
                             </span>
                             <img loading="lazy" src="{{ asset('assets/uploads/riyal.svg') }}" style="width: 20px;"
                                 alt="riyal"> --}}
                         </div>
                     @endif


                 </div>

                 @csrf
                 <input type="hidden" name="product_id" value="{{ $product['id'] }}">
                 <input type="hidden" id="hidden-quantity-{{ $product['id'] }}" name="number" value="1">
                 <input type="hidden" id="hidden-price-{{ $product['id'] }}" name="price"
                     value="{{ $product['price'] }}">

                 @if ($product['product_type'] == 'variable')
                     <input type="hidden" id="hidden-size-{{ $product['id'] }}" name="size">
                 @endif

                 <div class="row align-items-center">
                     <button type="submit" id="addtocartbutton_{{ $product['id'] }}"
                         class="btn btn-secondary btn-block btn-lg">
                         اضف الى السلة
                     </button>
                 </div>
             </form>
             <script>
                 $(document).ready(function() {
                     $(".size-select").on('change', function() {
                         var selectedOption = $(this).find(":selected");
                         var newPrice = selectedOption.data("price");
                         var productId = $(this).data("product-id");

                         if (selectedOption.val() !== "") { // تأكد من أن الحجم ليس الخيار الافتراضي
                             $("#hidden-price-" + productId).val(newPrice);
                             $("#hidden-size-" + productId).val(selectedOption.val());
                         }
                     });
                     // منع الإرسال فقط إذا كان المنتج من النوع variable
                     $("#addToCart_{{ $product['id'] }}").on("submit", function(e) {
                         var productType = @json($product['product_type']); // استرجاع نوع المنتج
                         if (productType === 'variable') {
                             var productId = $(this).find(".size-select").data("product-id");
                             var selectedSize = $("#hidden-size-" + productId).val();
                             if (!selectedSize) {
                                 alert("يرجى اختيار الحجم قبل إضافة المنتج إلى السلة.");
                                 e.preventDefault(); // منع الإرسال
                             }
                         }
                     });
                 });
             </script>



         </div>
     </div>
 </div>


 <script>
     document.addEventListener("DOMContentLoaded", function() {
         // حفظ التاب الحالي عند الضغط على زر إضافة للسلة
         document.querySelectorAll("form.add-to-cart-form").forEach(form => {
             form.addEventListener("submit", function() {
                 const activeTab = document.querySelector(".categories-tabs .nav-link.active");
                 if (activeTab) {
                     const currentTabId = activeTab.getAttribute(
                         "id"); // مثلاً: tab-category-slug
                     localStorage.setItem("activeTabId", currentTabId);
                 }
             });
         });

         // عند تحميل الصفحة، تأكد من إعادة فتح نفس التاب
         const savedTabId = localStorage.getItem("activeTabId");
         if (savedTabId) {
             const savedTab = document.getElementById(savedTabId);
             if (savedTab) {
                 // إزالة active من الكل
                 document.querySelectorAll(".categories-tabs .nav-link").forEach(tab => tab.classList.remove(
                     "active"));
                 document.querySelectorAll(".tab-pane").forEach(pane => {
                     pane.classList.remove("show", "active");
                 });

                 // إضافة active على التاب المطلوب
                 savedTab.classList.add("active");

                 const targetContentId = savedTab.getAttribute("data-bs-target");
                 const targetContent = document.querySelector(targetContentId);
                 if (targetContent) {
                     targetContent.classList.add("show", "active");
                 }
             }

             // بعد فتحه مرة، نحذف القيمة عشان ما تثبت لو رجع يدوي للصفحة
             localStorage.removeItem("activeTabId");
         }
     });
 </script>
