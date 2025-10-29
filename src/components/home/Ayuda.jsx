import { Link } from "react-router-dom";

export const Ayuda = () => {
  return (
    <article className="bg-landpage-skyblue py-14 px-5">
      <div className="flex flex-col gap-5 items-start">
        <span className="text-4xl">¿Necesitas ayuda adicional?</span>
        <p>
          Si no encontraste lo que buscabas, envianos un correo y nos pondremos
          en contacto contigo a la brevedad.
        </p>
        <Link className="rounded-full bg-landpage-blue text-white py-2 px-16 font-medium">
          Enviar correo
        </Link>
      </div>
    </article>
  );
};
