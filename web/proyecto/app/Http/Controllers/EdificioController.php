<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Edificio;
class EdificioController extends Controller
{
    public function getEdificios(){
        $edificio = Edificio::all();
        return $edificio;
    }
    public function crearEdificio(Request $request){
        $input = $request->all();
        $edificio = new Edificio();
        $edificio->direccion=$input["direccion"];
        $edificio->piso=$input["piso"];
        $edificio->departamentos=$input["departamentos"];
        $edificio->letra=$input["letra"];
        $edificio->save();
        return $edificio;
    }   
    public function eliminarEdificio(Request $request){
        $input = $request->all();
        $id = $input["id"]; //$signo peso es una variable, y el -> es llamar la función de esa variable, metodo de un objeto deuna consola
        //Eloquent: el administrador de BD de laravelse llama Eloquent
        //1. ir a buscar el registro a la bd
        $edificio = Edificio::findOrFail($id);
        //2. para eliminar, llamo al metodo delete
        $edificio->delete(); //DELETE FROM consolas WHERE id=1
        return "ok";
    }       
}
