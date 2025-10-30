import { NuestrosValoresData } from "../../data/NuestrosValoresData";

export const NuestrosValores = () => {
  return (
    <section className="space-y-8">
      <article className="text-center flex flex-col gap-3">
        <span className="text-landpage-blue text-6xl font-bakbak-one xl:text-5xl">
          NUESTROS VALORES
        </span>
        <p>
          En Permisos Automáticos, cada acción que tomamos se rige por
          principios claros:
        </p>
      </article>
      <article className="space-y-10 text-sm xl:flex xl:justify-around xl:text-sm">
        {NuestrosValoresData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 xl:flex-col xl:w-[20%]"
          >
            <img src={item.img} alt="" />
            <div className="xl:hidden">
              <span className="font-semibold">{item.title}</span>
              <p>{item.text}</p>
            </div>
            <div className="hidden xl:block xl:text-sm">
              <p>
                <span className="font-semibold">{item.title}</span> {item.text}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
