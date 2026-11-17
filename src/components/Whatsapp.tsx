import { Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Whatsapp() {
    return (
            <Link position={'fixed'} bottom={{ base: 4, md: 10 }} right={{ base: 4, md: 10 }} padding={2}
                aria-label="Chat with Mithas Poha on WhatsApp"
                href="https://wa.me/917697799979?text=Welcome%20to%20Mithas%20Poha"
                target="_blank"
                className="fixed-btn" rounded={'full'} color="white" bg={"green.500"}>
                <FaWhatsapp size={48} color="green.500"></FaWhatsapp>
            </Link>

    )
}