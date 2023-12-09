<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ClienteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/clientes', [App\Http\Controllers\ClienteController::class, 'index']);
Route::get('/cliente/{id}', [App\Http\Controllers\ClienteController::class, 'show']);
Route::post('/save', [App\Http\Controllers\ClienteController::class, 'store']);
Route::put('/update/{id}', [App\Http\Controllers\ClienteController::class, 'update']);
Route::delete('/delete/{id}',[App\Http\Controllers\ClienteController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
