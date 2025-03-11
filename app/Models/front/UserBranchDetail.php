<?php

namespace App\Models\front;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserBranchDetail extends Model
{
    protected $table = 'user_branch_details';
    protected $fillable = ['user_id', 'branch_id', 'pickup_method', 'car_color', 'car_model', 'car_plate'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
