
export default function TarjetaPerros({ perro }){
    return (
        <div className="border border-black bg-sky-200 w-48 flex justify-center">
            <img src={perro.message} className=" w-36 h-36 object-cover m-2"></img>
            
        </div>
    );
}