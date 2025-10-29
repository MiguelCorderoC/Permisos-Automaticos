import imgVenados from "../../assets/img/mobile/logos_clientes_ejemplo.svg";

export const Clientes = () => {
  return (
    <section>
      <article className="flex flex-col gap-20">
        <span className="text-landpage-blue text-6xl font-bakbak-one">
          {" "}
          Clientes <br className="xl:hidden" /> que confían en nosotros
        </span>
        <div className="bg-landpage-blue -mx-7 px-7 flex flex-wrap justify-between gap-5 py-20 xl:-mx-20 xl:px-20">
          <img src={imgVenados} alt="" className="w-[40%] xl:w-auto" />
          <img src={imgVenados} alt="" className="w-[40%] xl:w-auto" />
          <img src={imgVenados} alt="" className="w-[40%] xl:w-auto" />
          <img src={imgVenados} alt="" className="w-[40%] xl:w-auto" />
          <img src={imgVenados} alt="" className="w-[40%] xl:w-auto" />
          <img src={imgVenados} alt="" className="w-[40%] xl:w-auto" />
        </div>
      </article>
    </section>
  );
};
