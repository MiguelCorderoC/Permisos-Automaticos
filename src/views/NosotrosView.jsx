import { IniciaGratis } from "../components/home/IniciaGratis";
import { NuestrosValores } from "../components/nosotros/NuestrosValores";
import { SobreNosotros } from "../components/nosotros/SobreNosotros";

export const NosotrosView = () => {
  return (
    <>
      <SobreNosotros />
      <NuestrosValores />
      <IniciaGratis />
    </>
  );
};
