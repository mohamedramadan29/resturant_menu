<?php

namespace Database\Seeders;

use App\Models\admin\admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = new admin();
        $admin->create([
            'name'=>'Mohamed',
            'account_type'=>'admin',
            'email'=>'mr319242@gmail.com',
            'phone'=>'0000000',
            'password'=>Hash::make('11111111'),
            'status'=>1,
        ]);
    }
}
