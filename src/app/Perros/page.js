'use client'
import { useState, useEffect } from "react";
import AddPerro from "../components/AddPerro";
import HeaderPerro from "../components/HeaderPerro";
import MuestraPerros from "../components/MuestraPerros";
import Navbar from "../components/Navbar";

export default function Perros(){
    const [perros, setPerros] = useState([]);

    async function addPerro(nombre) {
        try {
            const response = await fetch("https://dog.ceo/api/breed/"+nombre+"/images/random");
            const result = await response.json();
            if (result.status === "success") {
                setPerros((a)=>[...a,result]);
            }
        } catch (error) {
            console.log("Error al obtener el perro:", error);
        }
    }
    return(
        <div>
            <Navbar />
            <HeaderPerro />
            <AddPerro addPerro={addPerro}/>
            <MuestraPerros perros={perros}/>
        </div>
    );
}