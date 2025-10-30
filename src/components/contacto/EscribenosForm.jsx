export const EscribenosForm = () => {
  return (
    <section className="bg-black text-white -mx-7 px-7 -my-16 py-16 text-sm xl:py-0 xl:my-0 xl:grow xl:pr-28">
      <article className="xl:flex xl:flex-col xl:gap-5">
        <div>
          <span className="text-landpage-yellow text-5xl font-bakbak-one xl:hidden">
            ¿Prefieres <br /> escribirnos?
          </span>
          <span className="text-landpage-yellow font-bakbak-one text-6xl hidden xl:block">
            Contáctanos
          </span>
          <p className="pt-4 ">
            Completa el siguiente formulario y nos <br className="xl:hidden" />{" "}
            pondremos en contacto contigo a la brevedad.
          </p>
        </div>
        <form className="space-y-5 mt-7">
          <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-10">
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Nombre completo:</label>
              <input
                type="text"
                placeholder="Escribe aquí..."
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500 text-base"
              />
            </div>
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Correo electrónico:</label>
              <input
                type="text"
                placeholder="Escribe aquí..."
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500 text-base"
              />
            </div>{" "}
          </div>
          <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-10">
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Teléfono (opcional):</label>
              <input
                type="text"
                placeholder="Escribe aquí..."
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500 text-base"
              />
            </div>{" "}
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Nombre de la empresa:</label>
              <input
                type="text"
                placeholder="Escribe aquí..."
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500 text-base"
              />
            </div>{" "}
          </div>
          <div className="flex flex-col gap-4">
            <label>Mensaje</label>
            <input
              type="text"
              placeholder="Escribe aquí..."
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500 text-base"
            />
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" /> <span>Aceptar Aviso de Privacidad.</span>
          </div>
          <div className="flex justify-center">
            <button className="text-black font-semibold bg-landpage-yellow rounded-lg py-2 px-8">
              Enviar mensaje
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
