import { Link } from "react-router-dom";
import { MenuDesktop } from "../ui/MenuDesktop";
import { MenuMobile } from "../ui/MenuMobile";
import { useLocation } from "react-router-dom";

export const AgilizaPermisos = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <div className="bg-[url('/src/assets/img/mobile/imagen_home_principal.jpg')] xl:bg-[url('/src/assets/img/imagen_home.jpg')] bg-cover bg-center bg-no-repeat -mx-7 px-7 pt-4 pb-32 xl:-mx-20 xl:px-20 xl:pb-40 2xl:pb-80 text-white">
        {isHome && (
          <>
            <header>
              <MenuDesktop />
              <MenuMobile />
            </header>
          </>
        )}
        <section className="pt-16 xl:pt-20">
          <article className="flex flex-col gap-10">
            <span className="font-bakbak-one text-6xl xl:flex xl:justify-center xl:text-center xl:text-7xl">
              ¡Agiliza tus permisos <br className="hidden xl:block" />{" "}
              aduanales!
            </span>
            <p className="xl:text-center">
              <span className="font-semibold xl:font-normal">
                Olvídate de los procesos lentos y complejos de los portales
                gubernamentales.
                <br className="hidden xl:block" />
              </span>{" "}
              Nuestra solución automatizada te ofrece una forma sencilla, rápida
              y confiable de <br className="hidden xl:block" /> obtener los
              permisos para tus operaciones de comercio exterior.
            </p>

            <div className="flex flex-col items-center text-black px-14 space-y-5 font-medium xl:flex-row xl:items-center xl:justify-center xl:gap-10 xl:space-y-0">
              <Link className="text-nowrap bg-landpage-yellow w-full text-center px-14 py-1.5 rounded-lg xl:px-0 xl:w-40">
                Crear cuenta
              </Link>
              <Link className="bg-white w-full text-center px-14 py-1.5 rounded-lg xl:px-0 xl:w-40">
                Ver planes
              </Link>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};
