<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EnquiryController;
use App\Http\Controllers\Api\AdminAuthController;
use App\Http\Controllers\Api\AdminEnquiryController;

Route::post('/enquiries', [EnquiryController::class, 'store']);

Route::post('/admin/login', [AdminAuthController::class, 'login']);

Route::middleware(['auth:sanctum','admin'])
    ->prefix('admin')
    ->group(function(){
        Route::post('/logout',[AdminAuthController::class, 'logout']);

        Route::get('/enquiries',[AdminEnquiryController::class, 'index',]);

        Route::patch('/enquiries/{enquiry}',[
            AdminEnquiryController::class, 'update',
        ]);

         Route::delete('/enquiries/{enquiry}', [
            AdminEnquiryController::class,
            'destroy',
        ]);
    });