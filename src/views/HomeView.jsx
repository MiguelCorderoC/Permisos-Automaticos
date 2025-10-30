import { AgilizaPermisos } from "../components/home/AgilizaPermisos";
import { Clientes } from "../components/home/Clientes";
import { Dudas } from "../components/home/Dudas";
import { ElegirPermisos } from "../components/home/ElegirPermisos";
import { FuncionPermisos } from "../components/home/FuncionPermisos";
import { IniciaGratis } from "../components/home/IniciaGratis";
import { NuestrosPlanes } from "../components/home/NuestrosPlanes";
import { Plan } from "../components/home/Plan";

export const HomeView = () => {
  return (
    <>
      <AgilizaPermisos />
      <FuncionPermisos />
      <IniciaGratis />
      <NuestrosPlanes
        bg={"bg-landpage-yellow"}
        title={" Conoce nuestros planes"}
        text={
          "Sin contratos ni sorpresas, adquiere el plan que más se adapte a tu empresa."
        }
      />
      <ElegirPermisos />
      <Clientes />
      <Dudas />
    </>
  );
};
