'use client'
import { useEffect, useState } from "react";
import HeaderBromas from "../components/HeaderBromas";
import MostrarBroma from "../components/MostrarBroma";
import CambiarBroma from "../components/CambiarBroma";
import Navbar from "../components/Navbar";

export default function Bromas(){
    const [broma, setBroma] = useState("La locura es un placer que solo los locos conocemos");

    async function getBroma() {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            const result = await response.json();
            if(result.error==false){
                console.log(result.joke)
                setBroma(result.joke);
            }
        } catch (error) {
            console.log("Error");
        }
    }
    
    
    return(
        <div className="">
            <Navbar />
            <HeaderBromas />
            <CambiarBroma getBroma={getBroma}/>
            <MostrarBroma broma={broma}/>
        </div>
    );
}