import { CrearCuenta } from "../components/login/CrearCuenta";
import { LogInForm } from "../components/login/LogInForm.jsx";

export const LogInView = () => {
  return (
    <>
      <div className="xl:hidden">
        <LogInForm />
        <CrearCuenta />
      </div>
      <div className="hidden xl:flex xl:justify-between xl:items-center xl:-ml-20 xl:pl-20 xl:-mt-32 xl:-mb-20">
        <LogInForm />
        <CrearCuenta />
      </div>
    </>
  );
};
