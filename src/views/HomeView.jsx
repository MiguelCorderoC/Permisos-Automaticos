import { AgilizaPermisos } from "../components/home/AgilizaPermisos";
import { Clientes } from "../components/home/Clientes";
import { Dudas } from "../components/home/Dudas";
import { ElegirPermisos } from "../components/home/ElegirPermisos";
import { FuncionPermisos } from "../components/home/FuncionPermisos";
import { IniciaGratis } from "../components/home/IniciaGratis";

export const HomeView = () => {
  return (
    <>
      <AgilizaPermisos />
      <FuncionPermisos />
      <IniciaGratis />
      <ElegirPermisos />
      <Clientes />
      <Dudas />
    </>
  );
};
