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
        let tdAcciones = document.createElement("td");
        /*let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idConsola = consolas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);*/
        //5. agregar los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdDireccion);
        tr.appendChild(tdComuna);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdAcciones);
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
};
document.addEventListener("DOMContentLoaded", async ()=>{
    let condominio = await getCondominios();
    cargarTabla(condominio);
});