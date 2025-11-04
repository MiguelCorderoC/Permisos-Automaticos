import { Dudas } from "../components/home/Dudas";
import { PermisosAduanales } from "../components/planes/PermisosAduanales";
import { PlanesInicio } from "../components/planes/PlanesInicio";
import { TestimoniosExperiencias } from "../components/planes/TestimoniosExperiencias";

export const PlanesView = () => {
  return (
    <>
      <PlanesInicio />
      <PermisosAduanales />
      <TestimoniosExperiencias />
      <Dudas />
    </>
  );
};
