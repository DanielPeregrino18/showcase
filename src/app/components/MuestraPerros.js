import TarjetaPerros from "./TarjetaPerros";

export default function muestraPerros({ perros }){
    return (
        <div className="grid grid-cols-5 gap-5">
            {perros.map((a) => {return <TarjetaPerros perro={a}/>})}
        </div>
    );
}