<div class="panel-cart-content cart-details">
    <table class="cart-table1">
        @php
            $session_id = \Illuminate\Support\Facades\Session::get('session_id');
         if (empty($session_id)) {
             $session_id = Session::getId();
             Session::put('session_id', $session_id);
             Session::regenerate();
         }
             if (Auth::check()) {
                   $user_id = Auth::user()->id;
                   $cartItems = \App\Models\front\Cart::where(['user_id' => $user_id])->get();
               } else {
                   $user_id = 0;
                   $cartItems = \App\Models\front\Cart::where('session_id', $session_id)
                       ->get();
               }

        @endphp
        @foreach($cartItems as $item)
            <tr>
                <td class="title">
                  <span class="name"
                  ><a href="#product-modal" data-toggle="modal"
                      >Beef Burger</a
                      ></span
                  >
                    <span class="caption text-muted">Large (500g)</span>
                </td>
                <td class="price">$9.00</td>
                <td class="actions">
                    <a
                            href="#product-modal"
                            data-toggle="modal"
                            class="action-icon"
                    ><i class="ti ti-pencil"></i
                        ></a>
                    <a href="#" class="action-icon"
                    ><i class="ti ti-close"></i
                        ></a>
                </td>
            </tr>
        @endforeach
    </table>
    <div class="cart-summary">
        <div class="row">
            <div class="col-7 text-right text-muted"> مجموع المنتجات  :</div>
            <div class="col-5">
                <strong
                >$<span class="cart-products-total">0.00</span></strong
                >
            </div>
        </div>
        <div class="row">
            <div class="col-7 text-right text-muted">التوصيل :</div>
            <div class="col-5">
                <strong>$<span class="cart-delivery">0.00</span></strong>
            </div>
        </div>
        <hr class="hr-sm"/>
        <div class="row text-lg">
            <div class="col-7 text-right text-muted">المجموع الكلي  :</div>
            <div class="col-5">
                <strong>$<span class="cart-total">0.00</span></strong>
            </div>
        </div>
    </div>
    <div class="cart-empty">
        <i class="ti ti-shopping-cart"></i>
        <p> سلة الشراء فارغة  </p>
    </div>
</div>
