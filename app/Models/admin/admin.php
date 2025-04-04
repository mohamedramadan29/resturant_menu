<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class admin extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $guarded =[];

    // public function receivesBroadcastNotificationsOn(): string
    // {
    //     return 'admin.'.$this->id;
    // }

    public function branch()
    {
        return $this->belongsTo(Branch::class,'branch_id');
    }
}
