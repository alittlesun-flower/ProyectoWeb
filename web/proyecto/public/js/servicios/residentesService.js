getResidentes = async()=>{
	let resp = await axios.get("api/residente/get");
	return resp.data;
}
crearResidente = async(residente)=>{
	let resp = await axios.post("api/residente/post", residente, {
	    headers:{
		    'Content-Type': 'application/json'
	    }
    });
    return resp.data;
}