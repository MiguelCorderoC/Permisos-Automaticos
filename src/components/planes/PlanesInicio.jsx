import { IniciaGratis } from "../home/IniciaGratis";
import { NuestrosPlanes } from "../home/NuestrosPlanes";
import { MenuDesktop } from "../ui/MenuDesktop";
import { MenuMobile } from "../ui/MenuMobile";

export const PlanesInicio = () => {
  return (
    <div className="bg-[#c4c9d7] -mx-7 px-7 pt-4 pb-32 xl:-mx-20 xl:px-20 xl:pb-40 2xl:pb-80">
      <MenuMobile />
      <MenuDesktop />
      <div className="flex flex-col gap-5 xl:items-center xl:text-center pt-10 xl:pt-20">
        <span className="text-landpage-blue font-bakbak-one text-6xl">
          Elige la eficiencia que tu <br className="hidden xl:block" /> negocio
          necesita.
        </span>
        <p>
          Nuestros planes flexibles se adaptan a tu volumen de operaciones,
          ofreciéndote la
          <br className="hidden xl:block" /> herramienta precisa para
          simplificar tus permisos aduanales y potenciar tu crecimiento.{" "}
          <span className="hidden xl:inline-block">
            {" "}
            Sin contratos forzosos ni complicaciones, solo la agilidad que tu
            empresa merece.
          </span>
        </p>
        <p className="xl:hidden">
          Sin contratos forzosos ni complicaciones, solo la agilidad que tu
          empresa merece.
        </p>
      </div>
      <div className="mt-20">
        <NuestrosPlanes bg={"bg-transparent"} />
      </div>
      <IniciaGratis />
    </div>
  );
};
