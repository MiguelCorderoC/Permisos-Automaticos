import imgDudas from "../../assets/img/icono_signo_interrogacion.svg";
import { DudasData } from "../../data/DudasData";
import { Ayuda } from "./Ayuda";

export const Dudas = () => {
  return (
    <section className="flex flex-col gap-10">
      <article className="flex flex-col gap-10 xl:flex-row">
        <div className="flex flex-col gap-5 xl:min-w-[45%] xl:font-dm-sans xl:justify-around">
          <div className="text-5xl flex flex-col gap-3 xl:gap-0">
            <span className="text-5xl font-bakbak-one xl:font-dm-sans">
              ¿Tienes dudas?
            </span>
            <p className="text-lg xl:text-5xl">
              Consulta aquí nuestra sección de preguntas frecuentes:
            </p>
          </div>
          <div className="hidden xl:block">
            <Ayuda />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {DudasData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-landpage-gray rounded-lg p-5 xl:min-w-[45%] xl:text-sm xl:gap-2"
            >
              <div className="flex items-start justify-between">
                <span className="font-semibold text-lg xl:text-sm">
                  {item.title}
                </span>
                <img src={imgDudas} alt="" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </article>
      <div className="xl:hidden">
        <Ayuda />
      </div>
    </section>
  );
};
