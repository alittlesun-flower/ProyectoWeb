<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view("/","home")->name("home");
Route::view("/agregarAdministrador","agregarAdministrador")->name("agregarAdministrador");
Route::view("/agregarResidente","agregarResidente")->name("agregarResidente");
Route::view("/agregarCondominio","agregarCondominio")->name("agregarCondominio");
Route::view("/agregarEdificio","agregarEdificio")->name("agregarEdificio");
Route::view("/verAdministrador","verAdministrador")->name("verAdministrador");
Route::view("/verResidentes","verResidentes")->name("verResidentes");
Route::view("/verCondominios","verCondominios")->name("verCondominios");
Route::view("/verEdificios","verEdificios")->name("verEdificios");