<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class BranchHour extends Model
{
    protected $guarded = [];

    public function branch(){
        return $this->belongsTo(Branch::class,'branch_id');
    }
}
