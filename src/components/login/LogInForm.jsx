import { Link } from "react-router-dom";

export const LogInForm = () => {
  return (
    <section className="py-32 text-sm xl:w-[40%]">
      <article>
        <span className="text-landpage-blue font-bakbak-one text-5xl">
          INICIAR SESIÓN
        </span>
        <p className="pt-3 text-sm xl:hidden">
          Si ya tienes una cuenta con nosotros, completa el siguiente formulario
          para acceder.
        </p>
        <form className="space-y-5 mt-10">
          <div className="flex flex-col gap-4">
            <label>Correo electrónico:</label>
            <input
              type="email"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />
          </div>{" "}
          <div className="flex flex-col gap-4">
            <label>Contraseña:</label>
            <input
              type="password"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between text-sm">
            <Link to={"/signin"} className="underline">
              Crear una cuenta
            </Link>
            <Link>¿Olvidaste tu contraseña?</Link>
          </div>
          <div className="flex justify-center pt-5">
            <button className="text-white font-semibold bg-black rounded-lg py-2 px-8 text-base">
              Iniciar sesión
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
