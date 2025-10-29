import { FuncionPermisosData } from "../../data/FuncionPermisosData";

export const FuncionPermisos = () => {
  return (
    <section>
      <article className="flex flex-col gap-16 xl:gap-28">
        <span className="text-landpage-blue font-bakbak-one text-5xl xl:flex xl:justify-center">
          {" "}
          ASÍ DE FÁCIL FUNCIONA PERMISOS AUTOMÁTICOS
        </span>
        <div className="flex flex-col gap-16 xl:flex-row xl:flex-wrap xl:justify-between xl:gap-10">
          {FuncionPermisosData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 xl:flex-row xl:max-w-[31%] xl:items-center xl:bg-landpage-gray xl:relative"
            >
              <img
                src={item.logo}
                alt=""
                className="absolute size-4 top-1 right-1 hidden xl:block"
              />
              <img
                src={item.img}
                alt=""
                className="object-cover w-full xl:w-auto xl:h-40"
              />
              <div className="flex items-center gap-5 xl:flex-row-reverse">
                <img src={item.logo} alt="" className="size-10 xl:hidden" />
                <p className="xl:text-[10px]">
                  <span className="font-semibold text-lg xl:text-sm">
                    {item.title}
                  </span>
                  <br />
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
