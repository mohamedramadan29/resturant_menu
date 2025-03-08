<?php

namespace App\Models\front;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = 'contacts';
    protected $fillable = ['name', 'phone', 'subject', 'message'];
}
