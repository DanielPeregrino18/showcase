import { useEffect, useState } from "react";


export default function AddPoke({ addPoke }){

    const [namePoke,setNamePoke] = useState("");

    function addp(){
        addPoke(namePoke);
        setNamePoke("");
    }

    return (
        <div className="flex justify-center my-5">
            <input className=" outline-none border border-x-white border-b-cyan-700 w-64" 
            value={namePoke}
            onChange={(e)=>{setNamePoke(e.target.value)}}
            placeholder="ingresa nombre del pokemon"/>
            <button onClick={addp} className="border-4 border-red-500 bg-red-400"> Agregar</button>
        </div>
    );
}