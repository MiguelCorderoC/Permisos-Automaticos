import { Contactanos } from "../components/contacto/Contactanos";
import { EscribenosForm } from "../components/contacto/EscribenosForm";
import { MenuDesktop } from "../components/ui/MenuDesktop";
import { useLocation } from "react-router-dom";
import { MenuMobile } from "../components/ui/MenuMobile";

export const ContactoView = () => {
  const location = useLocation();
  const isHome = location.pathname === "/contacto";

  return (
    <>
      <div className="xl:hidden">
        <Contactanos />
        <EscribenosForm />
      </div>
      <div className=" -mx-7 px-7 pt-4 xl:pt-0 pb-32 xl:-mx-20 xl:px-20 xl:pb-40 2xl:pb-80 text-white">
        {isHome && (
          <>
            <header className="absolute top-0 left-0 w-full xl:px-20 xl:pt-4">
              <MenuDesktop />
              <MenuMobile />
            </header>
          </>
        )}
        <div className="hidden xl:flex xl:flex-row-reverse items-center -mx-20 bg-black xl:pl-20">
          <Contactanos />
          <EscribenosForm />
        </div>
      </div>
    </>
  );
};
