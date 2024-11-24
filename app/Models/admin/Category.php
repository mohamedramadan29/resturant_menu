<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    Protected $guarded = [];

    public function products()
    {
        return $this->hasMany(Product::class,'category_id');
    }
}
