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
        $id = $input["id"]; //$signo peso es una variable, y el -> es llamar la función de esa variable, metodo de un objeto deuna consola
        //Eloquent: el administrador de BD de laravelse llama Eloquent
        //1. ir a buscar el registro a la bd
        $condominio = Condominio::findOrFail($id);
        //2. para eliminar, llamo al metodo delete
        $condominio->delete(); //DELETE FROM consolas WHERE id=1
        return "ok";
    }         
}
