import { TiempoRecordData } from "../../data/TiempoRecordData";
import img1 from "../../assets/img/mobile/imagen_permisos_aduanales_masivos.png";
import { Link } from "react-router-dom";

export const PermisosAduanales = () => {
  return (
    <section className="xl:flex xl:justify-between xl:items-center">
      <article className="xl:min-w-[48%]">
        <img
          src={img1}
          alt=""
          className="hidden xl:block xl:w-full xl:h-full object-cover"
        />
      </article>
      <article className="flex flex-col gap-10 xl:max-w-[48%] xl:text-sm">
        <span className="font-bakbak-one text-landpage-blue text-5xl xl:text-4xl">
          Permisos Aduanales <br className="hidden xl:block" /> Masivos: 100%
          Digital y en <br className="hidden xl:block" />
          Tiempo Récord.
        </span>
        <img src={img1} alt="" className="xl:hidden" />
        <p>
          Con conexión directa al sistema gubernamental VUCEM, facilitamos que
          solicites <br className="hidden xl:block" /> y obtengas tus permisos
          aduanales de manera masiva, 100% digital y en un{" "}
          <br className="hidden xl:block" /> tiempo récord. Olvídate de la
          burocracia y agiliza tus operaciones de comercio{" "}
          <br className="hidden xl:block" /> exterior como nunca antes.
        </p>
        <div className="text-sm flex flex-col gap-10 xl:flex-row xl:flex-wrap">
          {TiempoRecordData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 xl:max-w-[45%] xl:text-[10px]"
            >
              <img src={item.img} alt="" className="xl:size-6" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center xl:justify-start">
          <Link className="bg-landpage-yellow py-1.5 px-5 rounded-lg font-semibold">
            Crear una cuenta
          </Link>
        </div>
      </article>
    </section>
  );
};
