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
    public function eliminarAdministrador(Request $request){
        $input = $request->all();
        $id = $input["id"]; //$signo peso es una variable, y el -> es llamar la función de esa variable, metodo de un objeto deuna consola
        //Eloquent: el administrador de BD de laravelse llama Eloquent
        //1. ir a buscar el registro a la bd
        $administrador = Administrador::findOrFail($id);
        //2. para eliminar, llamo al metodo delete
        $administrador->delete(); //DELETE FROM consolas WHERE id=1
        return "ok";
    }    
}
