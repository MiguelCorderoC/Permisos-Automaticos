import { IoMenuSharp } from "react-icons/io5";
import imgLogo from "../../assets/img/logo_blanco.svg";
import imgLogoNegro from "../../assets/img/mobile/logo_negro.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const MenuMobile = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className={`xl:hidden flex justify-between items-center pt-5 px-5 ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      <Link to={"/"}>
        <img
          src={isHome ? imgLogo : imgLogoNegro}
          alt="Logo permisos automáticos"
          className="w-36"
        />
      </Link>

      <button onClick={() => setVisible(!visible)}>
        <IoMenuSharp className="text-4xl" />
      </button>
    </nav>
  );
};
