import { useRef, useState } from "react";
import { NuestroEquipoData } from "../../data/NuestroEquipoData";

export const NuestroEquipo = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollTo = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="bg-landpage-skyyellow -mx-7 px-7 py-16 space-y-10 xl:-mx-20">
      <article className="flex flex-col gap-5">
        <span className="text-landpage-blue text-5xl font-bakbak-one">
          Nuestro equipo
        </span>
        <p className="text-sm">
          Detrás de Permisos Automáticos hay un equipo de profesionales
          apasionados por la eficiencia y la innovación. Liderados por nuestro{" "}
          <br className="hidden xl:block" />
          fundador, quien vivió y comprendió la necesidad desde su propia
          experiencia, contamos con expertos en desarrollo de software,{" "}
          <br className="hidden xl:block" />
          ciberseguridad y comercio exterior. Esta combinación única de
          conocimiento técnico y experiencia práctica nos permite crear una{" "}
          <br className="hidden xl:block" />
          plataforma robusta, segura y diseñada específicamente para las
          realidades del entorno aduanal mexicano.
        </p>
      </article>
      <article
        ref={scrollRef}
        onScroll={handleScroll}
        className="xl:place-content-end overflow-x-auto flex snap-x snap-mandatory scroll-smooth xl:overflow-x-visible xl:gap-10 xl:justify-end"
      >
        {NuestroEquipoData.map((item, index) => (
          <div
            key={index}
            className="text-center shrink-0 flex flex-col justify-center items-center w-full gap-5 snap-center xl:w-[19%]"
          >
            <img src={item.img} alt={item.title} className="mx-auto" />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold xl:text-[11px]">
                {item.title}
              </span>
              <p className="text-sm xl:text-[11px]">{item.text}</p>
            </div>
          </div>
        ))}
      </article>

      <div className="flex justify-center gap-3 xl:hidden">
        {NuestroEquipoData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleScrollTo(index)}
            className={`size-4 rounded-full ${
              activeIndex === index ? "bg-landpage-blue" : "bg-white border"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
