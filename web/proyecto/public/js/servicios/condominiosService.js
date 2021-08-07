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