
export default function CambiarBroma({ getBroma }){
    return (
        <div className="py-5 flex justify-center">
            <button onClick={getBroma}
            className="pt-2 px-5 border-4 border-red-600 bg-red-500 font-serif font-bold text-xl focus:bg-red-700">Cambiar broma</button>
        </div>
    );
}