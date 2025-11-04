import { IniciaGratis } from "../components/home/IniciaGratis";
import { NuestroEquipo } from "../components/nosotros/NuestroEquipo";
import { NuestrosValores } from "../components/nosotros/NuestrosValores";
import { SobreNosotros } from "../components/nosotros/SobreNosotros";

export const NosotrosView = () => {
  return (
    <>
      <SobreNosotros />
      <NuestroEquipo />
      <NuestrosValores />
      <IniciaGratis />
    </>
  );
};
