import { Link } from "react-router-dom";
import imgFondo from "../../assets/img/mobile/imagen_crear_cuenta.jpg";
export const CrearCuenta = () => {
  return (
    <section
      className="flex justify-center items-center bg-cover bg-center min-h-screen -mx-7 -mb-20"
      style={{ backgroundImage: `url(${imgFondo})` }}
    >
      <article className="flex flex-col items-center gap-5 font-dm-sans">
        <span className="text-white font-semibold text-4xl">
          ¿No tienes cuenta?
        </span>
        <Link
          to={"/signin"}
          className="text-black font-semibold bg-landpage-yellow rounded-lg py-1.5 px-8"
        >
          Crea una aquí
        </Link>
      </article>
    </section>
  );
};
