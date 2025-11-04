export const CrearCuentaForm = () => {
  return (
    <section className="text-black py-8 xl:py-0 xl:-mt-28">
      <article className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-landpage-blue font-bakbak-one text-4xl">
            Creación de cuenta
          </span>{" "}
          <p>
            Unete a nuestra plataforma y solicita permisos de aduanas en minutos
          </p>
        </div>
        <form className="space-y-5 xl:space-y-12">
          <div className="flex flex-col justify-between xl:gap-32 xl:flex-row gap-4">
            <div className="flex flex-col gap-4 xl:w-full">
              <label className="">Nombre*</label>
              <input
                type="text"
                placeholder="Escribe aquí...
"
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
              />{" "}
            </div>
            <div className="flex flex-col gap-4 xl:w-full">
              <label className="">Apellidos*</label>
              <input
                type="text"
                placeholder="Escribe aquí...
"
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
              />{" "}
            </div>
          </div>
          <div className="flex flex-col justify-between xl:gap-32 xl:flex-row gap-4">
            <div className="flex flex-col gap-4 xl:w-full">
              <label className="">Correo electrónico*</label>
              <input
                type="text"
                placeholder="Escribe aquí...
"
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
              />{" "}
            </div>
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Teléfono celular*</label>
              <input
                type="text"
                placeholder="Escribe aquí...
"
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
              />{" "}
            </div>
          </div>
          <div className="flex flex-col justify-between xl:gap-32 xl:flex-row gap-4">
            <div className="flex items-center gap-2 xl:w-full">
              <input type="checkbox" />
              <label htmlFor="">Soy una agente aduanal</label>
            </div>{" "}
            <div className="flex items-center gap-2 xl:w-full">
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
          <div className="flex flex-col justify-between xl:gap-32 xl:flex-row gap-4">
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Crea una contraseña*</label>
              <input
                type="text"
                placeholder="Escribe aquí...
"
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
              />{" "}
            </div>{" "}
            <div className="flex flex-col gap-4 xl:w-full">
              <label>Confirma tu contraseña*</label>
              <input
                type="text"
                placeholder="Escribe aquí...
"
                className="outline-none border-b-gray-400 border-b placeholder:text-gray-500"
              />
            </div>
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
