document.querySelector("#regresid-btn").addEventListener("click", async()=>{
    let rut = document.querySelector("#rutRe-txt").value.trim();
    let propietario = document.querySelector("#propietario-select").value.trim();
    let nombre = document.querySelector("#nombreRe-txt").value;
    let email = document.querySelector("#re-email").value.trim();
    let telefono = document.querySelector("#re-num").value;
    let estacionamiento = document.querySelector("#estacionamiento-select").value;

    let resi = {};
    resi.rut = rut;
    resi.propietario = propietario;
    resi.nombre = nombre;
    resi.email = email;
    resi.telefono = telefono;
    resi.estacionamiento = estacionamiento;

    let res = await crearResidente(resi);
    await Swal.fire("Residente ingresado", "Residente ingresado con exito", "info")
    window.location.href = "verResidentes";
});