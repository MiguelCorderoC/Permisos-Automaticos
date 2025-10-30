import { Link, useLocation } from "react-router-dom";
import imgLogoBlanco from "../../assets/img/logo_blanco.svg";
import imgLogoNegro from "../../assets/img/logo_footer_color.svg";
import { IoLogoLinkedin } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

export const FooterMobile = () => {
  const location = useLocation();
  const isContacto = location.pathname === "/contacto";

  return (
    <footer
      className={`${
        isContacto ? "pt-0 bg-white text-black" : "pt-20 bg-black text-white"
      } xl:hidden`}
    >
      <section className="space-y-16 px-7 py-20 text-sm">
        <article className="flex justify-between">
          <span className="text-xl font-medium">
            Simplificando <br /> tus permisos <br /> aduanales en <br /> México.
          </span>
          <div className="flex flex-col justify-between">
            <img
              src={isContacto ? imgLogoNegro : imgLogoBlanco}
              alt="Logo permisos automáticos"
              className="w-44"
            />
            <div>
              <span className="font-semibold">Síguenos</span>
              <div className="flex gap-2 mt-1">
                <IoLogoLinkedin className="text-2xl" />
                <FaFacebook className="text-2xl" />
                <GrInstagram className="text-2xl" />
              </div>
            </div>
          </div>
        </article>

        <article className="flex justify-between">
          <div>
            <span className="font-semibold">Menú</span>
            <ul className="flex flex-col gap-2 mt-2">
              <Link className="underline" to={"/"}>
                Inicio
              </Link>
              <Link className="underline" to={"/planes"}>
                Planes
              </Link>
              <Link className="underline" to={"/nosotros"}>
                Nosotros
              </Link>
              <Link className="underline" to={"/contacto"}>
                Contacto
              </Link>
            </ul>
          </div>

          <div className="text-sm space-y-2">
            <span className="font-semibold text-base">Datos de contacto</span>
            <div>
              <span>Correo:</span> <br />
              <span>info@permisosautomaticos.com</span>
            </div>
            <div>
              <span>Teléfono:</span>
              <br />
              <span>6671 56 47 89</span>
            </div>
            <div>
              <span>Horario de atención:</span>
              <br />
              <span>L-V, 9:00 a.m. - 6:00 p.m. CST</span>
            </div>
          </div>
        </article>

        <article className="space-y-2 text-center">
          <div className="flex justify-between">
            <span className="xl:underline">Aviso de Privacidad</span>
            <span className="xl:underline">Términos y Condiciones</span>
          </div>
          <span>2025 Permisos Automáticos.</span>
          <br />
          <span>Todos los derechos reservados.</span>
        </article>
      </section>
    </footer>
  );
};
