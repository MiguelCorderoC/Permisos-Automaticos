import { useRef, useState } from "react";
import { TestimoniosExperienciaData } from "../../data/TestimoniosExperienciasData";

export const TestimoniosExperiencias = () => {
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
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="flex flex-col gap-20">
      <span className="text-landpage-blue font-bakbak-one text-5xl">
        Testimonios: Experiencias <br className="xl:hidden" /> de Éxito
      </span>

      <article
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          overflow-x-auto flex snap-x snap-mandatory scroll-smooth
          xl:overflow-x-visible xl:space-x-5
        "
      >
        {TestimoniosExperienciaData.map((item, index) => (
          <div
            key={index}
            className="text-center shrink-0 flex flex-col justify-center items-center w-full gap-5 xl:flex-row xl:w-[49%] xl:text-[11px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto xl:size-24"
            />
            <div className="flex flex-col gap-3 text-left">
              <span className="font-semibold">{item.title}</span>
              <p>{item.text}</p>
              <span className="font-semibold">{item.name}</span>
            </div>
          </div>
        ))}
      </article>

      <div className="flex justify-center gap-3 xl:hidden">
        {TestimoniosExperienciaData.map((_, index) => (
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
