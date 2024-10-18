'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderPoke from "../components/HeaderPoke";
import AddPoke from "../components/AddPoke";
import MuestraPoke from "../components/MuestraPoke";
import Navbar from "../components/Navbar";


export default function Home() {

  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(true);

  async function buscarPoke(name){
    setLoading(true); 
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+name);
        const result = await response.json(); 
        if(result.name!==undefined){
          setPoke((a) => (a.some(p => p.name === result.name) ? a : [...a, result]));
        }
    }catch (error){
      console.error("error");
    } finally {
      setLoading(false); 
    }
  }
  
  return (
    <div>
      <Navbar />
      <HeaderPoke/>
      <AddPoke addPoke={buscarPoke}/>
      <MuestraPoke pokemones={poke}/>
    </div>
  );
}


/*
<h1>Datos de la API</h1>
      <ul>
        {poke.id}
      </ul>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(poke.id)+".png"}></img>
*/