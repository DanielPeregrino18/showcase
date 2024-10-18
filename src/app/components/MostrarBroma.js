
export default function MostrarBroma({ broma }){
    return (
        <div className="flex justify-center">
            <div className="bg-cover bg-center h-screen w-2/3 h-80"
            style={{
                backgroundImage: "url('/images/elbromas.jpg')",
            }}>
                
                <div className="text-white text-2xl font-serif pl-5 pt-7 w-2/3">{broma}</div>
                <div className="text-white text-xl font-serif pl-5 pt-7 w-40">-El bromas</div>
            </div>
        </div>
    );
}