'use client'
import { useState } from "react";

export default function AddPerro({ addPerro }){

    const [raza,setRaza] = useState("");

    return (
        <div className="flex justify-center my-5">
            <input className="outline-none border border-x-white border-b-cyan-700 w-64" 
            value={raza}
            onChange={(e)=>{setRaza(e.target.value)}}
            placeholder="Ingrese la raza"/>
            <button onClick={()=>{addPerro(raza)}} className="border border-red-500 bg-red-500 px-2">Agregar</button>
        </div>
    );
}