<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $guarded = [];

    public function Orders(){
        return $this->hasMany(Order::class,'branch_id');
    }
}
