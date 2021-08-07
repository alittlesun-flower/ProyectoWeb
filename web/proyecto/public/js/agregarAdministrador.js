document.querySelector("#regadm-btn").addEventListener("click", async()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let email = document.querySelector("#adm-email").value;
    let telefono = document.querySelector("#adm-num").value;
    
    let admin = {};
    admin.rut = rut;
    admin.nombre = nombre;
    admin.email = email;
    admin.telefono = telefono;

    let res = await crearAdministrador(admin);
    await Swal.fire("Administrador ingresado", "Administrador ingresado con exito", "info")
    window.location.href = "verAdministrador";
});