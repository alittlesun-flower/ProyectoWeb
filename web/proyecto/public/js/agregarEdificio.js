document.querySelector("#regedif-btn").addEventListener("click", async()=>{
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let piso = document.querySelector("#cantidadPisos-txt").value.trim();
    let departamentos = document.querySelector("#cantidadDepartamentos-txt").value;
    let letra = document.querySelector("#letra-txt").value.trim();

    let edi = {};
    edi.direccion = direccion;
    edi.piso = piso;
    edi.departamentos = departamentos;
    edi.letra = letra;

    let res = await crearEdificio(edi);
    await Swal.fire("Edificio ingresado", "Edificio ingresado con exito", "info")
    window.location.href = "verEdificios";
});