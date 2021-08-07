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
}
