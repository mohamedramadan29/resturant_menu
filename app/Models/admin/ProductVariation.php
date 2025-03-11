<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class ProductVariation extends Model
{
    protected $fillable = ['product_id', 'size', 'price'];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
