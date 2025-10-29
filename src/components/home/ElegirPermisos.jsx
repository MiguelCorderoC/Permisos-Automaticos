import { ElegirPermisosData } from "../../data/ElegirPermisosData";
import img1 from "../../assets/img/imagen_por_que_elegirnos.jpg";

export const ElegirPermisos = () => {
  return (
    <section className="flex flex-col gap-10 xl:gap-20">
      <span className="font-bakbak-one text-5xl xl:text-center">
        {" "}
        ¿Por qué elegir Permisos Automáticos?
      </span>
      <article className="flex flex-col gap-10 xl:flex-row xl:gap-20">
        <img src={img1} alt="" className="xl:max-w-5/12" />
        <div className="flex flex-col gap-10 xl:flex-row xl:flex-wrap xl:text-[12px]">
          {ElegirPermisosData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-12 xl:flex-col xl:items-start xl:gap-5 ${
                index === 0 ? "xl:w-full" : "xl:max-w-[45%]"
              }`}
            >
              <img src={item.img} alt="" className="xl:size-8" />
              <p className="flex flex-col xl:block">
                <span className="font-semibold"> {item.title}</span> {item.text}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
