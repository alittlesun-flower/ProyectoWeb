<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Administrador;
class AdministradorController extends Controller
{
    public function getAdministradores(){
        $administrador = Administrador::all();
        return $administrador;
    }
    public function crearAdministrador(Request $request){
        $input = $request->all();
        $administrador = new Administrador();
        $administrador->rut=$input["rut"];
        $administrador->nombre=$input["nombre"];
        $administrador->email=$input["email"];
        $administrador->telefono=$input["telefono"];
        $administrador->save();
        return $administrador;
    }    
}
