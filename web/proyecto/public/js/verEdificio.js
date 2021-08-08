const iniciarEliminacion = async function(){
    let id = this.idEdificio;
    let resp = await Swal.fire({title:"¿Esta seguro?", text:"Esta operacion es irreversible",
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarEdificio(id)){
            let edificio = await getEdificios();
            cargarTabla(edificio);
            Swal.fire("Edificio eliminado", "Edificio eliminado exitosamente", "info");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
    }
};

const cargarTabla = (edificio)=>{
    //1. obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-edificio");
    tbody.innerHTML = "";
    //2. recorrer todas las tablas
    for(let i=0; i < edificio.length; ++i){
        //3. por cada consola generar una fila
        let tr = document.createElement("tr");
        //4. generar por cada atributo de la consola, un td
        let tdDireccion = document.createElement("td");
        tdDireccion.innerText = edificio[i].direccion;
        let tdPiso = document.createElement("td");
        tdPiso.innerText = edificio[i].piso;
        let tdDepartamentos = document.createElement("td");
        tdDepartamentos.innerText = edificio[i].departamentos;
        let tdLetra = document.createElement("td");
        tdLetra.innerText = edificio[i].letra;
        let tdAccion1 = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idEdificio = edificio[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAccion1.appendChild(botonEliminar);

        let tdAccion2 = document.createElement("td");
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-warning");
        tdAccion2.appendChild(botonActualizar);
        //5. agregar los td al tr
        tr.appendChild(tdDireccion);
        tr.appendChild(tdPiso);
        tr.appendChild(tdDepartamentos);
        tr.appendChild(tdLetra);
        tr.appendChild(tdAccion1);
        tr.appendChild(tdAccion2)
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let edificios = await getEdificios();
    cargarTabla(edificios);
});