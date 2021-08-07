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
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idConsola = consolas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
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
