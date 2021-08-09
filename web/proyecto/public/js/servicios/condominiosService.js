getCondominios = async()=>{
	let resp = await axios.get("api/condominio/get");
	return resp.data;
}
crearCondominio = async(condominio)=>{
	let resp = await axios.post("api/condominio/post", condominio, {
	    headers:{
		    'Content-Type': 'application/json'
	    }
    });
    return resp.data;
}
const eliminarCondominio = async(id)=>{
    try{
        let resp = await axios.post("api/condominio/delete", {id}, {
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
    let resp = await axios.get(`api/condominio/findById?id=${id}`);
    return resp.data;
}
const actualizarCondominio = async(condominio)=>{
    try{
        let resp = await axios.post("api/condominio/actualizar", condominio, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
}