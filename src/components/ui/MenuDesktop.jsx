import { Link, useLocation } from "react-router-dom";
import imgLogo from "../../assets/img/logo_blanco.svg";
import imgLogoNegro from "../../assets/img/mobile/logo_negro.svg";

export const MenuDesktop = () => {
  const location = useLocation();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/planes" ||
    location.pathname === "/contacto";

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
          <Link
            to={"/"}
            className={`${
              location.pathname === "/"
                ? "underline decoration-landpage-yellow underline-offset-8 decoration-2"
                : ""
            }`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            to={"/planes"}
            className={`${
              location.pathname === "/planes"
                ? "underline decoration-landpage-yellow underline-offset-8 decoration-2"
                : ""
            }`}
          >
            PLANES
          </Link>
        </li>
        <li>
          <Link
            to={"/nosotros"}
            className={`${
              location.pathname === "/nosotros"
                ? "underline decoration-landpage-yellow underline-offset-8 decoration-2"
                : ""
            }`}
          >
            NOSOTROS
          </Link>
        </li>
        <li>
          <Link
            to={"/contacto"}
            className={`${
              location.pathname === "/contacto"
                ? "underline decoration-landpage-yellow underline-offset-8 decoration-2"
                : ""
            }`}
          >
            CONTACTO
          </Link>
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
