import { FaWhatsappSquare } from "react-icons/fa";

export function ButtonWhats() {
    return (
        <a href='https://api.whatsapp.com/send?phone=5547997261914&text=Ol%C3%A1,%20Gostaria%20de%20Saber%20mais' className='fixed text-black dark:text-ouro bottom-1 right-1 animate-bounce' target='blank'>
            <FaWhatsappSquare size={50} />
        </a>
    )
}