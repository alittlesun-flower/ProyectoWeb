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
const actualizar = async function(){
    let idEdificio = this.idEdificio;
    let edificio = await obtenerPorId(idEdificio);
    let molde = this.parentNode.parentNode;
    edificio.direccion = molde.querySelector(".direccion-txt").value;
    edificio.piso = molde.querySelector(".cantidadPisos-txt").value;
    edificio.departamentos = molde.querySelector(".cantidadDepartamentos-txt").value;
    edificio.letra = molde.querySelector(".letra-txt").value;
    await actualizarEdificio(edificio);
    await Swal.close();
    let edificios = await getEdificios();
    cargarTabla(edificios);
};
const iniciarActualizacion = async function(){
    let idEdificio = this.idEdificio;
    let edificio = await obtenerPorId(idEdificio);
  
    let molde = document.querySelector(".molde-actualizarEd").cloneNode(true);
    molde.querySelector(".direccion-txt").value = edificio.direccion;
    molde.querySelector(".cantidadPisos-txt").value = edificio.piso;
    molde.querySelector(".cantidadDepartamentos-txt").value = edificio.departamentos;
    molde.querySelector(".letra-txt").value = edificio.letra;
    molde.querySelector(".actualizarEd-btn").idEdificio = idEdificio;
    molde.querySelector(".actualizarEd-btn").addEventListener("click", actualizar);
    await Swal.fire({
        title:"Actualizar",
        html: molde,
        confirmButtonText: "Cerrar"
    });
  
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
        botonActualizar.idEdificio = edificio[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
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