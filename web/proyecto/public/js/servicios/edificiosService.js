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