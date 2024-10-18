import Image from 'next/image';

export default function HeaderPoke(){
    return (
        <div className="w-full bg-red-500 flex justify-center mb-10">
            <Image
                src="/images/chooseteampn.png"
                alt="Descripción de la imagen"
                width={500}
                height={300}
            />
        </div>
    );
}