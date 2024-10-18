
export default function TarjetaPoke({ pokemon }){
    return(
        <div className="w-64 bg-sky-300 border-4 border-black p-5 mx-10">
            <div className="bg-white flex justify-center">
                <img src={pokemon.sprites.front_default}
                className="w-full bg-white border border-black" />
            </div>
            <h1 className="font-bold">No. Pokedex: {pokemon.id}<br/>
                Nombre: {pokemon.name} <br/>
                Tipo:<br />
                {pokemon.types.map((tipo)=>{return <h1 className="pl-5">-{tipo.type.name}</h1>})}
            </h1>
            
        </div>
    );
    // 
}