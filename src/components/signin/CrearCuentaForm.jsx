export const CrearCuentaForm = () => {
  return (
    <section className="text-black py-8">
      <article className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-landpage-blue font-bakbak-one text-4xl">
            Creación de cuenta
          </span>{" "}
          <p>
            Unete a nuestra plataforma y solicita permisos de aduanas en minutos
          </p>
        </div>
        <form className="space-y-5">
          <div className="flex flex-col gap-4">
            <label className="">Correo electrónico*</label>
            <input
              type="text"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />{" "}
          </div>
          <div className="flex flex-col gap-4">
            <label>Teléfono celular*</label>
            <input
              type="text"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />{" "}
          </div>
          <div className="flex items-center gap-2 justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label htmlFor="">Soy una agente aduanal</label>
            </div>{" "}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label htmlFor="">Soy un importador</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label>Soy una agente aduanal</label>
            <input
              type="text"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />{" "}
          </div>
          <div className="flex flex-col gap-4">
            <label>¿Cómo nos conociste? (opcional)</label>
            <input
              type="text"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />{" "}
          </div>
          <div className="flex flex-col gap-4">
            <label>Crea una contraseña*</label>
            <input
              type="text"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />{" "}
          </div>{" "}
          <div className="flex flex-col gap-4">
            <label>Confirma tu contraseña*</label>
            <input
              type="text"
              placeholder="Escribe aquí...
"
              className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-center pt-3">
            <button className="text-white font-semibold bg-black rounded-lg py-1.5 px-10">
              Crear cuenta
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
