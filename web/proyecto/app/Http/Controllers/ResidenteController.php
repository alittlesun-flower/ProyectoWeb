<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Residente;
class ResidenteController extends Controller
{
    public function getResidentes(){
        $residente = Residente::all();
        return $residente;
    } 
    public function crearResidente(Request $request){
        $input = $request->all();
        $residente = new Residente();
        $residente->rut=$input["rut"];
        $residente->propietario=$input["propietario"];
        $residente->nombre=$input["nombre"];
        $residente->email=$input["email"];
        $residente->telefono=$input["telefono"];
        $residente->estacionamiento=$input["estacionamiento"];
        $residente->save();
        return $residente;
    }
    public function eliminarResidente(Request $request){
        $input = $request->all();
        $id = $input["id"]; 
        $residente = Residente::findOrFail($id);
        $residente->delete(); 
        return "ok";
    }          
}
