const iniciarEliminacion = async function(){
    let id = this.idResidente;
    let resp = await Swal.fire({title:"¿Esta seguro?", text:"Esta operacion es irreversible",
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarResidente(id)){
            let residente = await getResidentes();
            cargarTabla(residente);
            Swal.fire("Residente eliminado", "Residente eliminado exitosamente", "info");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
    }
};

const cargarTabla = (residente)=>{
    //1. obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-residente");
    tbody.innerHTML = "";
    //2. recorrer todas las tablas

    for(let i=0; i < residente.length; ++i){
        //3. por cada consola generar una fila
        let tr = document.createElement("tr");
        //4. generar por cada atributo de la consola, un td
        let tdRut = document.createElement("td");
        tdRut.innerText = residente[i].rut;
        let tdPropietario = document.createElement("td");
        tdPropietario.innerText = residente[i].propietario;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = residente[i].nombre;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = residente[i].email;
        let tdTelefono = document.createElement("td");
        tdTelefono.innerText = residente[i].telefono;
        let tdEstacionamiento = document.createElement("td");
        tdEstacionamiento.innerText = residente[i].estacionamiento;
        let tdAccion1 = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idResidente = residente[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAccion1.appendChild(botonEliminar);

        let tdAccion2 = document.createElement("td");
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-warning");
        tdAccion2.appendChild(botonActualizar);
        //5. agregar los td al tr
        tr.appendChild(tdRut);
        tr.appendChild(tdPropietario);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdEstacionamiento);
        tr.appendChild(tdAccion1);
        tr.appendChild(tdAccion2);
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let residentes = await getResidentes();
    cargarTabla(residentes);
});