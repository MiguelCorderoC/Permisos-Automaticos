import { Dudas } from "../components/home/Dudas";
import { PermisosAduanales } from "../components/planes/PermisosAduanales";
import { PlanesInicio } from "../components/planes/PlanesInicio";

export const PlanesView = () => {
  return (
    <>
      <PlanesInicio />
      <PermisosAduanales />
      <Dudas />
    </>
  );
};
