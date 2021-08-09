getAdministradores = async()=>{
	let resp = await axios.get("api/administrador/get");
	return resp.data;
}
crearAdministrador = async(administrador)=>{
	let resp = await axios.post("api/administrador/post", administrador, {
	    headers:{
		    'Content-Type': 'application/json'
	    }
    });
    return resp.data;
}
const eliminarAdministrador = async(id)=>{
    try{
        let resp = await axios.post("api/administrador/delete", {id}, {
            headers:{
                "Content-Type": "aplication/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }

}
const obtenerPorId = async (id)=>{
    let resp = await axios.get(`api/administrador/findById?id=${id}`);
    return resp.data;
}
const actualizarAdministrador = async(administrador)=>{
    try{
        let resp = await axios.post("api/administrador/actualizar", administrador, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
}
