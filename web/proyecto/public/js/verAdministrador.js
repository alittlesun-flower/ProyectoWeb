/*
const iniciarEliminacion = async function(){
    //1.obtener id a eliminar
    let id = this.idAdministrador;
    let resp = await Swal.fire({title:"¿Esta seguro?", text:"Esta operacion es irreversible",
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        //1. eliminar
        if(await eliminarAdministrador(id)){
            //2. si la eliminacion fue exitosa, recargar tabla
            let administrador = await getAdministradores();
            cargarTabla(administrador);
            Swal.fire("Consola eliminada", "Consola eliminada exitosamente", "info");
        }
    }else{
        //3. si la eliminacion no se hace mostrar mensaje
        Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
    }
};
*/

const cargarTabla = (administrador)=>{
    //1. obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-administrador");
    tbody.innerHTML = "";
    //2. recorrer todas las tablas
    for(let i=0; i < administrador.length; ++i){
        //3. por cada consola generar una fila
        let tr = document.createElement("tr");
        //4. generar por cada atributo de la consola, un td
        let tdRut = document.createElement("td");
        tdRut.innerText = administrador[i].rut;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = administrador[i].nombre;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = administrador[i].email;
        let tdTelefono = document.createElement("td");
        tdTelefono.innerText = administrador[i].email;
        let tdAcciones = document.createElement("td");
        /*let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idAdministrador = administrador[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);*/
        //5. agregar los td al tr
        tr.appendChild(tdRut);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdAcciones);
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let administrador = await getAdministradores();
    cargarTabla(administrador);
});