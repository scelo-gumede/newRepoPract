import WhatsappPic from "@/app/assets/whatsapp.svg";

export default function Whatsapp() {
    const number: string = "0676403372";
    const whatsappURL = `https://wa.me/${number}`

    return (
        <div className="z-50 hover:scale-110 flex justify-center items-center transition duration-300 lg:hidden bottom-5 right-5 fixed" >
            <a href={whatsappURL} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                <WhatsappPic width="70" height="70" style={{ marginRight: '10px' }} alt="WhatsApp Icon" />
            </a>
        </div>
    );
}
