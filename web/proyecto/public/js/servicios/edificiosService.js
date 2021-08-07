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