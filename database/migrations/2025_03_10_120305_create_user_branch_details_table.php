<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_branch_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->foreignId('branch_id')->references('id')->on('branches');
            $table->string('branch_name');
            $table->string('session_id');
            $table->string('pickup_method');
            $table->string('car_color')->nullable();
            $table->string('car_model')->nullable();
            $table->string('car_plate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_branch_details');
    }
};
