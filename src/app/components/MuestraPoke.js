import TarjetaPoke from './tarjetaPoke';


export default function MuestraPoke({ pokemones }){
    return(
        <div className="grid grid-cols-4 gap-4">
            {pokemones.map((poke)=>{
                return <TarjetaPoke pokemon={poke}/>
            })}
        </div>
    );
}