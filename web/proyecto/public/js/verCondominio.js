const iniciarEliminacion = async function(){
    let id = this.idCondominio;
    let resp = await Swal.fire({title:"¿Esta seguro?", text:"Esta operacion es irreversible",
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarCondominio(id)){
            let condominio = await getCondominios();
            cargarTabla(condominio);
            Swal.fire("Condominio eliminado", "Condominio eliminado exitosamente", "info");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
    }
};
const actualizar = async function(){
    let idCondominio = this.idCondominio;
    let condominio = await obtenerPorId(idCondominio);
    let molde = this.parentNode.parentNode;
    condominio.nombre = molde.querySelector(".nomcondominio-txt").value;
    condominio.direccion = molde.querySelector(".direccioncondominio-txt").value;
    condominio.comuna = molde.querySelector(".comuna-txt").value;
    condominio.cantidad = molde.querySelector(".cantidad-num").value;
    await actualizarCondominio(condominio);
    await Swal.close();
    let condominios = await getCondominios();
    cargarTabla(condominios);
};

const iniciarActualizacion = async function(){
    let idCondominio = this.idCondominio;
    let condominio = await obtenerPorId(idCondominio);
  
    let molde = document.querySelector(".molde-actualizarCon").cloneNode(true);
    molde.querySelector(".nomcondominio-txt").value = condominio.nombre;
    molde.querySelector(".direccioncondominio-txt").value = condominio.direccion;
    molde.querySelector(".comuna-txt").value = condominio.comuna;
    molde.querySelector(".cantidad-num").value = condominio.cantidad;
    molde.querySelector(".actualizarCon-btn").idCondominio = idCondominio;
    molde.querySelector(".actualizarCon-btn").addEventListener("click", actualizar);
    await Swal.fire({
        title:"Actualizar",
        html: molde,
        confirmButtonText: "Cerrar"
    });
  
};
const cargarTabla = (condominio)=>{
    //1. obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-condominio");
    tbody.innerHTML = "";
    //2. recorrer todas las tablas
    for(let i=0; i < condominio.length; ++i){
        //3. por cada consola generar una fila
        let tr = document.createElement("tr");
        //4. generar por cada atributo de la consola, un td
        let tdNombre = document.createElement("td");
        tdNombre.innerText = condominio[i].nombre;
        let tdDireccion = document.createElement("td");
        tdDireccion.innerText = condominio[i].direccion;
        let tdComuna = document.createElement("td");
        tdComuna.innerText = condominio[i].comuna;
        let tdCantidad = document.createElement("td");
        tdCantidad.innerText = condominio[i].comuna;
        let tdAccion1 = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idCondominio = condominio[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAccion1.appendChild(botonEliminar);

        let tdAccion2 = document.createElement("td");
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-warning");
        botonActualizar.idCondominio = condominio[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAccion2.appendChild(botonActualizar);
        //5. agregar los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdDireccion);
        tr.appendChild(tdComuna);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdAccion1);
        tr.appendChild(tdAccion2);
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
};
document.addEventListener("DOMContentLoaded", async ()=>{
    let condominio = await getCondominios();
    cargarTabla(condominio);
});