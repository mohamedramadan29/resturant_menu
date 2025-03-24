<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function Main_Category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function variations()
    {
        return $this->hasMany(ProductVariation::class, 'product_id');
    }

    // public function getIsFeaturedAttribute()
    // {
    //     return $this->is_featured == 1 ? 'نعم' : 'لا';
    // }

}
