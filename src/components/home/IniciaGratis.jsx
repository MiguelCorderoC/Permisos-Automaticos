import { Link } from "react-router-dom";

export const IniciaGratis = () => {
  return (
    <section className="border border-dashed py-44 px-5 xl:py-10">
      <article className="text-center flex flex-col gap-10 xl:gap-5">
        <span className="text-landpage-blue text-4xl font-bakbak-one">
          {" "}
          ¡Inicia completamente gratis!
        </span>
        <p className="text-landpage-blue text-center text-lg">
          Crea tu cuenta y descubre <br className="xl:hidden" /> lo fácil que es
          gestionar tus <br className="xl:hidden" />
          permisos aduanales.
        </p>
        <div className="flex flex-col gap-3 px-16 font-medium xl:flex-row xl:justify-center">
          <Link className="bg-landpage-yellow rounded-lg py-1.5 xl:w-48">
            {" "}
            Crear una cuenta
          </Link>
          <Link className="bg-landpage-blue text-white rounded-lg py-1.5 xl:w-48">
            {" "}
            Ver planes
          </Link>
        </div>
      </article>
    </section>
  );
};
