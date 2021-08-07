document.querySelector("#regcond-btn").addEventListener("click", async()=>{
    let nombre = document.querySelector("#nomcondominio-txt").value.trim();
    let direccion = document.querySelector("#direccioncondominio-txt").value.trim();
    let comuna = document.querySelector("#comuna-txt").value.trim();
    let cantidad = document.querySelector("#cantidad-num").value;

    let condo = {};
    condo.nombre = nombre;
    condo.direccion = direccion;
    condo.comuna = comuna;
    condo.cantidad = cantidad;

    let res = await crearCondominio(condo);
    await Swal.fire("Condominio ingresado", "Condominio ingresado con exito", "info")
    window.location.href = "verCondominios";
});