import { Link, useLocation } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import imgLogoBlanco from "../../assets/img/logo_blanco.svg";
import imgLogoNegro from "../../assets/img/Logo_color_menu.svg";

export const FooterDesktop = () => {
  return (
    <footer
      className={`hidden xl:block space-y-5 xl:px-20 py-14 border-t mt-40`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <img
            src={imgLogoNegro}
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
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/planes"}>Planes</Link>
            </li>
            <li>
              <Link to={"/nosotros"}>Quienes somos</Link>
            </li>
            <li>
              <Link to={"/contacto"}>Contacto</Link>
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
            <IoLogoLinkedin className={`text-2xl`} />
            <FaFacebook className={`text-2xl`} />
            <GrInstagram className={`text-2xl`} />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold pb-3">Legal</span>
          <span className="">Aviso de privacidad</span>
          <span className="">Términos y condiciones</span>
          <span className="">Política de cookies</span>
        </div>
      </div>

      <span className="flex justify-center text-sm">
        2025 Permisos Automáticos. Todos los derechos reservados.
      </span>
    </footer>
  );
};
