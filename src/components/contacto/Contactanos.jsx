import imgContactanos from "../../assets/img/mobile/IMAGEN_CONTACTANOS.png";

export const Contactanos = () => {
  return (
    <section className="-mx-7 xl:bg-landpage-blue text-white xl:mx-0 xl:w-[50%]">
      <article className="pt-12 xl:pt-0 bg-black xl:bg-landpage-blue">
        <div className="py-10 xl:hidden">
          <span className="text-landpage-yellow font-bakbak-one text-center text-6xl">
            Contáctanos
          </span>
        </div>
        <img src={imgContactanos} alt="" className="w-full object-cover" />
        <div className="xl:flex xl:items-center xl:text-sm">
          <div className="bg-landpage-blue flex flex-col px-7 py-5">
            <span className="text-lg xl:text-sm">Dirección</span>
            <span>Bulevard Lola Beltrán, Culiacán Sinaloa.</span>
          </div>
          <div className="bg-white text-black px-7 flex flex-col gap-3 py-10 font-dm-sans mb-14 xl:mb-0">
            <span>Datos de contacto</span>
            <div>
              <span>
                <span>
                  <span className="font-semibold">Email: </span>
                  info@permisosautomaticos.mx
                </span>
              </span>
            </div>
            <div>
              <span>
                <span className="font-semibold">Teléfono: </span> +52 55 1234
                5678 (Disponible de lunes a viernes, 9:00 a.m. - 6:00 p.m. PST)
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
