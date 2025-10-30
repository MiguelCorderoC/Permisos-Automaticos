import { Link, useLocation } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import imgLogoBlanco from "../../assets/img/logo_blanco.svg";
import imgLogoNegro from "../../assets/img/Logo_color_menu.svg";

export const FooterDesktop = () => {
  const location = useLocation();
  const isContacto = location.pathname === "/contacto";

  return (
    <footer
      className={`hidden xl:block space-y-5 xl:px-20 py-14  ${
        isContacto
          ? "bg-black -mt-40 2xl:-mt-80 text-white border-t-gray-700"
          : "bg-white text-black mt-40 border-t"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <img
            src={isContacto ? imgLogoBlanco : imgLogoNegro}
            alt="Logo permisos automáticos"
            className="w-52"
          />
          <span>
            Simplificando tus <br /> permisos aduanales <br /> en México.
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold">Navegación</span>
          <ul className="space-y-1">
            <li>
              <Link to={"/"} className={isContacto ? "hover:underline" : ""}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to={"/planes"}
                className={isContacto ? "hover:underline" : ""}
              >
                Planes
              </Link>
            </li>
            <li>
              <Link
                to={"/nosotros"}
                className={isContacto ? "hover:underline" : ""}
              >
                Quienes somos
              </Link>
            </li>
            <li>
              <Link
                to={"/contacto"}
                className={isContacto ? "hover:underline" : ""}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold pb-3">Contacto</span>
          <span>
            Correo: <br />
            info@permisosautomaticos.com
          </span>
          <span>
            Teléfono: <br />
            6671 56 47 89
          </span>
          <span>
            Horario de atención: <br />
            L-V, 9:00 a.m. - 6:00 p.m. CST
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold">Síguenos</span>
          <div className="flex gap-3">
            <IoLogoLinkedin className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <GrInstagram className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold pb-3">Legal</span>
          <span className="cursor-pointer hover:underline">
            Aviso de privacidad
          </span>
          <span className="cursor-pointer hover:underline">
            Términos y condiciones
          </span>
          <span className="cursor-pointer hover:underline">
            Política de cookies
          </span>
        </div>
      </div>

      <span className="flex justify-center text-sm">
        2025 Permisos Automáticos. Todos los derechos reservados.
      </span>
    </footer>
  );
};
