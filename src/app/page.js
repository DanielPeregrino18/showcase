
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
    <div >
       <Navbar />
        <div className="text-2xl font-serif font-bold pt-8 pb-4 pl-12">Practica de 3 apis</div>
        <ul className="list-disc text-xl font-bold font-serif pl-24">
            <li>Poke api</li>
            <li>Dog Api</li>
            <li>Joke api</li>
        </ul>
        <div className="py-8 px-12 text-2xl font-bold font-serif">Daniel Peregirno Lechuga TID42M</div>
    </div>
    );
}
