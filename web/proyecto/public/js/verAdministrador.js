
const iniciarEliminacion = async function(){
    let id = this.idAdministrador;
    let resp = await Swal.fire({title:"¿Esta seguro?", text:"Esta operacion es irreversible",
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarAdministrador(id)){
            let administrador = await getAdministradores();
            cargarTabla(administrador);
            Swal.fire("Administrador eliminado", "Administrador eliminado exitosamente", "info");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
    }
};

const actualizar = async function(){
    let idAdministrador = this.idAdministrador;
    let administrador = await obtenerPorId(idAdministrador);
    let molde = this.parentNode.parentNode;
    administrador.rut = molde.querySelector(".rut-txt").value;
    administrador.nombre = molde.querySelector(".nombre-txt").value;
    administrador.email = molde.querySelector(".adm-email").value;
    administrador.telefono = molde.querySelector(".adm-num").value;
    await actualizarAdministrador(administrador);
    await Swal.close();
    let administradores = await getAdministradores();
    cargarTabla(administradores);
};

const iniciarActualizacion = async function(){
    let idAdministrador = this.idAdministrador;
    let administrador = await obtenerPorId(idAdministrador);
  
    let molde = document.querySelector(".molde-actualizar").cloneNode(true);
    molde.querySelector(".rut-txt").value = administrador.rut;
    molde.querySelector(".nombre-txt").value = administrador.nombre;
    molde.querySelector(".adm-email").value = administrador.email;
    molde.querySelector(".adm-num").value = administrador.telefono;
    molde.querySelector(".actualizar-btn").idAdministrador = idAdministrador;
    molde.querySelector(".actualizar-btn").addEventListener("click", actualizar);
    await Swal.fire({
        title:"Actualizar",
        html: molde,
        confirmButtonText: "Cerrar"
    });
  
};
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
        let tdAccion1 = document.createElement("td");
        //ELIMINAR
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idAdministrador = administrador[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAccion1.appendChild(botonEliminar);
        //ACTUALIZAR
        let tdAccion2 = document.createElement("td");
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-warning");
        botonActualizar.idAdministrador = administrador[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAccion2.appendChild(botonActualizar);

        //5. agregar los td al tr
        tr.appendChild(tdRut);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdAccion1);
        tr.appendChild(tdAccion2);
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let administrador = await getAdministradores();
    cargarTabla(administrador);
});