<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Condominio;
class CondominioController extends Controller
{
    public function getCondominios(){
        $condominio = Condominio::all();
        return $condominio;
    } 
    public function crearCondominio(Request $request){
        $input = $request->all();
        $condominio = new Condominio();
        $condominio->nombre=$input["nombre"];
        $condominio->direccion=$input["direccion"];
        $condominio->comuna=$input["comuna"];
        $condominio->cantidad=$input["cantidad"];
        $condominio->save();
        return $condominio;
    }
    public function eliminarCondominio(Request $request){
        $input = $request->all();
        $id = $input["id"]; 
        $condominio = Condominio::findOrFail($id);
        $condominio->delete();
        return "ok";
    }
    public function obtenerPorId(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $condominio = Condominio::findOrFail($id); 
        return $condominio;
    }
    public function actualizarCondominio(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $condominio = Condominio::findOrFail($id);
        $condominio->nombre=$input["nombre"];
        $condominio->direccion=$input["direccion"];
        $condominio->comuna=$input["comuna"];
        $condominio->cantidad=$input["cantidad"];
        $condominio->save();
        return $condominio;
    }          
}
