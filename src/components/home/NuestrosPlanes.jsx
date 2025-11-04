import { Link, useLocation } from "react-router-dom";
import imgButton from "../../assets/img/mobile/botones_mensual_anual2.png";
import { Plan } from "./Plan";

export const NuestrosPlanes = ({ bg }) => {
  const location = useLocation();
  const isHome = location.pathname === "/planes";

  return (
    <>
      <section className={`${bg} -mx-7 xl:-mx-20 px-7 xl:px-20 py-28 xl:py-48`}>
        <article className="flex flex-col gap-8">
          <div
            className={`flex flex-col gap-2 text-center xl:text-start ${
              isHome ? "xl:hidden" : "xl:items-center"
            }`}
          >
            <span className="text-3xl font-bakbak-one xl:text-5xl">
              Conoce nuestros planes
            </span>
            <p className="text-lg">
              Sin contratos ni sorpresas, adquiere el plan que más se adapte a
              tu empresa.
            </p>
          </div>

          <div className="flex justify-center py-10">
            <img src={imgButton} alt="" className="object-cover" />
          </div>

          <div className="xl:hidden">
            <Plan />
          </div>
          <div className="hidden xl:flex xl:justify-between">
            <Plan
              bgColor={"bg-white"}
              textColor={"text-landpage-blue"}
              btnColor={"bg-landpage-blue"}
            />
            <Plan
              bgColor={"bg-landpage-blue"}
              textColor={"text-white"}
              btnColor={"bg-white"}
            />
            <Plan
              bgColor={"bg-white"}
              textColor={"text-landpage-blue"}
              btnColor={"bg-landpage-blue"}
            />
          </div>
        </article>
      </section>
    </>
  );
};
