@extends('admin.layouts.master')
@section('title')
    اضافة منتج جديد
@endsection
@section('css')
@endsection
@section('content')
    <div class="page-content">
        <!-- Start Container Fluid -->
        <div class="container-xxl">
            @if (Session::has('Success_message'))
                @php
                    toastify()->success(\Illuminate\Support\Facades\Session::get('Success_message'));
                @endphp
            @endif
            @if ($errors->any())
                @foreach ($errors->all() as $error)
                    @php
                        toastify()->error($error);
                    @endphp
                @endforeach
            @endif
            <form method="post" action="{{ url('admin/product/add') }}" enctype="multipart/form-data">
                @csrf
                <div class="row">

                    <div class="col-xl-12 col-lg-8 ">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> معلومات المنتج </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> اسم المنتج </label>
                                            <input required type="text" id="name" name="name"
                                                class="form-control" placeholder="" value="{{ old('name') }}">
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="category_id" class="form-label"> حدد القسم الرئيسي </label>
                                            <select required class="form-control" id="category_id" data-choices
                                                data-choices-groups data-placeholder="Select Categories" name="category_id">
                                                <option value=""> -- حدد القسم --</option>
                                                @foreach ($MainCategories as $maincat)
                                                    <option value="{{ $maincat['id'] }}">{{ $maincat['name'] }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="status" class="form-label"> حالة المنتج </label>
                                            <select class="form-control" id="status" data-choices data-choices-groups
                                                data-placeholder="Select Categories" name="status">
                                                <option value=""> -- حدد حالة المنتج --</option>
                                                <option value="1" selected> مفعل</option>
                                                <option value="0"> ارشيف</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label for="short_description" class="form-label"> وصف مختصر عن
                                                المنتج </label>
                                            <textarea class="form-control bg-light-subtle" id="short_description" rows="5" placeholder=""
                                                name="short_description">{{ old('short_description') }}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label for="description" class="form-label"> وصف المنتج </label>
                                            <textarea required class="form-control bg-light-subtle" id="description" rows="7" placeholder=""
                                                name="description">{{ old('description') }}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="carb" class="form-label"> السعرات الحرارية </label>
                                            <input type="text" id="carb" name="carb" class="form-control"
                                                placeholder="" value="{{ old('carb') }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="is_featured" class="form-label"> منتج مميز </label>
                                            <select name="is_featured" id="is_featured" class="form-select">
                                                <option value="0" selected> لا </option>
                                                <option value="1"> نعم </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> مرفقات المنتج </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="image" class="form-label"> صورة المنتج </label>
                                            <input required type="file" id="image" name="image"
                                                class="form-control" accept="image/*">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> تفاصيل السعر </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6 mb-3">
                                        <label for="product-type" class="form-label"> حدد نوع المنتج </label>
                                        <!-- check if the product is simple or variable -->
                                        <select name="product_type" id="product-type" class="form-select">
                                            <option value="simple">بسيط</option>
                                            <option value="variable">متغير</option>
                                        </select>
                                    </div>
                                    <br>
                                    <div id="simple-product-fields">
                                        <div class="col-lg-6">
                                            <label for="product-price" class="form-label"> السعر </label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text fs-20"><i class='bx bx-dollar'></i></span>
                                                <input step="0.01" type="number" id="price" name="price"
                                                    class="form-control" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="product-price" class="form-label"> اضافة خصم </label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text fs-20"><i class='bx bx-dollar'></i></span>
                                                <input step="0.01" type="number" id="discount" name="discount"
                                                    class="form-control" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div id="variable-product-fields" style="display: none">
                                        <div class="col-lg-6">
                                            <div id="size-price-container">
                                                <!-- سيتم إضافة الحقول هنا -->
                                            </div>

                                            <button type="button" class="btn btn-primary mt-3" id="add-size">إضافة
                                                حجم</button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>


                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> معلومات السيو ومحركات البحث </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="meta_title" class="form-label"> العنوان </label>
                                            <input type="text" id="meta_title" name="meta_title" class="form-control"
                                                placeholder="" value="{{ old('meta_title') }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="meta_keywords" class="form-label"> الكلمات المفتاحية </label>
                                            <input type="text" id="meta_keywords" name="meta_keywords"
                                                class="form-control" placeholder="" value="{{ old('meta_keywords') }}">
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label for="meta_description" class="form-label"> الوصف </label>
                                            <textarea class="form-control bg-light-subtle" id="meta_description" rows="7" placeholder=""
                                                name="meta_description">{{ old('meta_description') }}</textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="p-3 bg-light mb-3 rounded">
                            <div class="row justify-content-end g-2">
                                <div class="col-lg-2">
                                    <a href="{{ url('admin/products') }}" class="btn btn-primary w-100"> رجوع </a>
                                </div>
                                <div class="col-lg-2">
                                    <button type="submit" class="btn btn-outline-secondary w-100"> حفظ <i
                                            class='bx bxs-save'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- End Container Fluid -->

    </div>

@endsection

@section('js')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        document.getElementById('product-type').addEventListener('change', function() {
            if (this.value === 'simple') {
                document.getElementById('simple-product-fields').style.display = 'block';
                document.getElementById('variable-product-fields').style.display = 'none';
            } else {
                document.getElementById('simple-product-fields').style.display = 'none';
                document.getElementById('variable-product-fields').style.display = 'block';
            }
        });
    </script>

    <script>
        document.getElementById('add-size').addEventListener('click', function() {
            let container = document.getElementById('size-price-container');
            let index = document.querySelectorAll('.size-price-group').length; // لحساب عدد الأحجام

            let html = `
            <div class="row size-price-group mb-3" id="size-price-${index}">
                <div class="col-lg-5">
                    <label class="form-label">الحجم</label>
                    <input type="text" name="sizes[]" class="form-control" placeholder="مثال: صغير، متوسط، كبير" required>
                </div>
                <div class="col-lg-5">
                    <label class="form-label">السعر</label>
                    <div class="input-group">
                        <span class="input-group-text fs-20"><i class='bx bx-dollar'></i></span>
                        <input type="number" step="0.01" name="prices[]" class="form-control" placeholder="" required>
                    </div>
                </div>
                <div class="col-lg-2 d-flex align-items-end">
                    <button type="button" class="btn btn-danger remove-size" data-id="${index}">حذف</button>
                </div>
            </div>
        `;

            container.insertAdjacentHTML('beforeend', html);
        });

        // حذف الحقل عند النقر على زر "حذف"
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-size')) {
                let id = event.target.getAttribute('data-id');
                document.getElementById(`size-price-${id}`).remove();
            }
        });
    </script>
@endsection
