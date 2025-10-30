import { Link } from "react-router-dom";
import imgCorona from "../../assets/img/mobile/Corona.svg";
import imgPalomita from "../../assets/img/icono_circulo_palomita.svg";
import imgButton from "../../assets/img/mobile/botones_mensual_anual2.png";

export const Plan = () => {
  return (
    <div className="bg-white rounded-xl pb-16 pt-5 px-5 text-landpage-blue flex flex-col gap-5 xl:w-[28%] xl:gap-7 xl:text-sm">
      <div className="flex justify-end">
        <img src={imgCorona} alt="" />
      </div>
      <span className="flex justify-center font-bold">
        $1,404.00 MXN <span className="font-normal">/anual</span>
      </span>
      <p>
        <span className="font-extrabold text-lg">BASE</span>
        <br />
        Ideal para iniciar y gestionar tus <br />
        permisos
      </p>
      <ul className="flex flex-col gap-5">
        <li className="flex items-center gap-2">
          <img src={imgPalomita} alt="" />
          <span>
            100 créditos (permisos) <br /> mensuales
          </span>
        </li>
        <li className="flex items-center gap-2">
          <img src={imgPalomita} alt="" />
          <span>
            Opción a agregar más créditos al <br /> plan
          </span>
        </li>
        <li className="flex items-center gap-2">
          <img src={imgPalomita} alt="" />
          <span>Soporte especializado</span>
        </li>
      </ul>
      <div className="flex justify-center">
        <Link className="bg-landpage-blue text-white py-2 px-8 rounded-full font-semibold">
          Elegir este plan
        </Link>
      </div>
    </div>
  );
};
