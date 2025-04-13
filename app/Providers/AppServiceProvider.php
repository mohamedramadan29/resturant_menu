<?php

namespace App\Providers;

use App\Services\AlRajhiService;
use Illuminate\Support\ServiceProvider;
use App\Interfaces\PaymentGatewayInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(PaymentGatewayInterface::class,AlRajhiService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
