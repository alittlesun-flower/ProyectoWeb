<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdministradorController;
use App\Http\Controllers\CondominioController;
use App\Http\Controllers\EdificioController;
use App\Http\Controllers\ResidenteController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//ADMINISTRADOR
Route::get("administrador/get",[AdministradorController::class, "getAdministradores"]);
Route::post("administrador/post",[AdministradorController::class, "crearAdministrador"]);
Route::post("administrador/delete", [AdministradorController::class,"eliminarAdministrador"]);

//CONDOMINIO
Route::get("condominio/get",[CondominioController::class, "getCondominios"]);
Route::post("condominio/post",[CondominioController::class, "crearCondominio"]);
Route::post("condominio/delete", [CondominioController::class,"eliminarCondominio"]);
//EDIFICIO
Route::get("edificio/get",[EdificioController::class, "getEdificios"]);
Route::post("edificio/post",[EdificioController::class, "crearEdificio"]);
Route::post("edificio/delete", [EdificioController::class,"eliminarEdificio"]);
//RESIDENTE
Route::get("residente/get",[ResidenteController::class, "getResidentes"]);
Route::post("residente/post",[ResidenteController::class, "crearResidente"]);
Route::post("residente/delete", [ResidenteController::class,"eliminarResidente"]);