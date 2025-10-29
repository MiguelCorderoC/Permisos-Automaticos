import imgSobreNosotros from "../../assets/img/image_sobre_nosotros_seccion.jpg";

export const SobreNosotros = () => {
  return (
    <section className="flex flex-col gap-5 xl:gap-28">
      <article className="flex flex-col gap-3">
        <span className="text-landpage-blue text-6xl font-bakbak-one xl:flex xl:justify-center">
          {" "}
          SOBRE NOSOTROS
        </span>
        <p className="font-medium text-[17px] xl:text-center xl:text-sm">
          Conoce la historia detrás de Permisos Automáticos: quiénes somos, qué
          nos <br className="xl:hidden" /> motiva y los valores que{" "}
          <br className="hidden xl:block" /> nos impulsan a{" "}
          <br className="xl:hidden" /> revolucionar la gestión aduanal en
          <br className="xl:hidden" /> México. Descubre al equipo de{" "}
          <br className="xl:hidden" /> expertos{" "}
          <br className="hidden xl:block" /> comprometidos con tu
          <br className="xl:hidden" /> eficiencia y crecimiento.
        </p>
      </article>
      <article className="flex flex-col gap-20 xl:flex-row xl:text-[11px] xl:gap-5 xl:items-center">
        <img src={imgSobreNosotros} alt="" />
        <div className="flex-col flex gap-8 xl:gap-3">
          <span className="text-6xl xl:text-lg  font-dm-sans">
            ¿Cómo inició <br className="xl:hidden" /> Permisos{" "}
            <br className="xl:hidden" />
            Automáticos?
          </span>
          <div className="flex flex-col gap-10 xl:gap-3">
            <p>
              La historia de Permisos Automáticos es el relato de una necesidad
              personal que se transformó en una solución. Uno de nuestros
              fundadores experimentó en primera persona la frustración por la
              complejidad y lentitud de los trámites aduanales en México. Vio
              cómo estos obstáculos frenaban el crecimiento de su propio
              negocio, lo que lo impulsó a buscar una manera más inteligente y
              eficiente de gestionar permisos.
            </p>
            <p>
              Motivado por la convicción de que la tecnología podía transformar
              la burocracia aduanal, decidió unirse a expertos líderes en
              desarrollo tecnológico y seguridad. Juntos, nos propusimos crear
              una plataforma que no solo simplificara la obtención de permisos,
              sino que también devolviera a las empresas mexicanas la agilidad y
              el tiempo valioso para enfocarse en lo que de verdad importa.
            </p>
            <p>
              Nos impulsa la visión de un comercio exterior más fluido, donde la
              tecnología sea un aliado estratégico, no un obstáculo.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
