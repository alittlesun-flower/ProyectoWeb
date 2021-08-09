getEdificios = async()=>{
	let resp = await axios.get("api/edificio/get");
	return resp.data;
}
crearEdificio = async(edificio)=>{
	let resp = await axios.post("api/edificio/post", edificio, {
	    headers:{
		    'Content-Type': 'application/json'
	    }
    });
    return resp.data;
}
const eliminarEdificio = async(id)=>{
    try{
        let resp = await axios.post("api/edificio/delete", {id}, {
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
    let resp = await axios.get(`api/edificio/findById?id=${id}`);
    return resp.data;
}
const actualizarEdificio = async(edificio)=>{
    try{
        let resp = await axios.post("api/edificio/actualizar", edificio, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
}