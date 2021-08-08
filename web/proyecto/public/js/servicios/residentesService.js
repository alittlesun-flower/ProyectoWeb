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
const eliminarResidente = async(id)=>{
    try{
        let resp = await axios.post("api/residente/delete", {id}, {
            headers:{
                "Content-Type": "aplication/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }

}