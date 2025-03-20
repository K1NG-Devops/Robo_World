import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Whatsapp() {
  const whatsappLink = "https://wa.me/27696893613?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20programs";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-2 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" className="sm:p-1" />
    </a>
  );
}

export default Whatsapp;
