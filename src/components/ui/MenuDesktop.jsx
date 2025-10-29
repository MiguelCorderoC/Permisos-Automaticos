import { Link, useLocation } from "react-router-dom";
import imgLogo from "../../assets/img/logo_blanco.svg";
import imgLogoNegro from "../../assets/img/mobile/logo_negro.svg";

export const MenuDesktop = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`hidden xl:flex items-center justify-between pt-5 ${
        isHome ? "text-white" : "text-black xl:px-20 xl:pb-40 pt-4 xl:pt-9"
      }`}
    >
      <Link to={"/"}>
        <img
          src={isHome ? imgLogo : imgLogoNegro}
          alt="Logo permisos automáticos"
        />
      </Link>

      <ul className="flex gap-20 font-semibold text-sm">
        <li>
          <Link to={"/"}>INICIO</Link>
        </li>
        <li>
          <Link to={"/planes"}>PLANES</Link>
        </li>
        <li>
          <Link to={"/nosotros"}>NOSOTROS</Link>
        </li>
        <li>
          <Link to={"/contacto"}>CONTACTO</Link>
        </li>
        <li>
          <Link
            to={"/login"}
            className="text-black bg-landpage-yellow rounded-xl px-10 py-1"
          >
            ACCEDER
          </Link>
        </li>
      </ul>
    </nav>
  );
};
