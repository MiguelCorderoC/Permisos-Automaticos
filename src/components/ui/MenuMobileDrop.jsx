import imgLogo from "../../assets/img/Logo_color_menu.svg";
import imgSalir from "../../assets/img/mobile/icono_cerrar_menu.svg";
import { Link, useLocation } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { useEffect } from "react";

export const MenuMobileDrop = ({ visible, setVisible }) => {
  const location = useLocation();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const getLinkClass = (path) =>
    location.pathname === path
      ? "underline underline-offset-8 decoration-4 decoration-landpage-yellow"
      : "hover:underline";

  return (
    <div className="fixed bg-white top-0 left-0 px-5 py-5 w-full h-screen z-50 space-y-7 animate-fade-in">
      <div className="flex justify-between items-center pr-3">
        <img src={imgLogo} alt="Logo" className="w-36" />
        <button onClick={() => setVisible(false)}>
          <img src={imgSalir} alt="Cerrar menú" className="size-5" />
        </button>
      </div>

      <ul className="flex flex-col justify-center items-center gap-10 font-bakbak-one text-landpage-blue pt-14 text-4xl">
        <li>
          <Link
            to={"/"}
            onClick={() => setVisible(false)}
            className={getLinkClass("/")}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            to={"/planes"}
            onClick={() => setVisible(false)}
            className={getLinkClass("/planes")}
          >
            PLANES
          </Link>
        </li>
        <li className="space-y-3">
          <Link
            to={"/nosotros"}
            onClick={() => setVisible(false)}
            className={getLinkClass("/nosotros")}
          >
            NOSOTROS
          </Link>
        </li>
        <li>
          <Link
            to={"/contacto"}
            onClick={() => setVisible(false)}
            className={getLinkClass("/contacto")}
          >
            CONTACTO
          </Link>
        </li>
      </ul>

      <div className="flex flex-col items-center text-landpage-blue gap-4">
        <Link
          to={"/login"}
          onClick={() => setVisible(false)}
          className={getLinkClass("/login")}
        >
          Iniciar sesión
        </Link>
        <Link
          to={"/signin"}
          onClick={() => setVisible(false)}
          className={getLinkClass("/signin")}
        >
          Crear cuenta
        </Link>
      </div>

      <div className="flex justify-center text-4xl text-black gap-3 items-center">
        <IoLogoLinkedin />
        <FaFacebook />
        <GrInstagram />
      </div>
    </div>
  );
};
