import { Route, Routes, useLocation } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { MenuMobile } from "./components/ui/MenuMobile";
import { MenuDesktop } from "./components/ui/MenuDesktop";
import { FooterMobile } from "./components/ui/FooterMobile";
import { FooterDesktop } from "./components/ui/FooterDesktop";
import { PlanesView } from "./views/PlanesView";
import { NosotrosView } from "./views/NosotrosView";
import { ContactoView } from "./views/ContactoView";
import { LogInView } from "./views/LogInView";
import { SignInView } from "./views/SignInView";

function App() {
  const location = useLocation();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/planes" ||
    location.pathname === "/contacto";

  const isContacto = location.pathname === "/contacto";

  return (
    <>
      {!isHome && (
        <header>
          <MenuMobile />
          <MenuDesktop />
        </header>
      )}

      <main
        className={`px-7 xl:px-20 ${
          isContacto ? "space-y-0" : "space-y-20 xl:space-y-32"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/planes" element={<PlanesView />} />
          <Route path="/nosotros" element={<NosotrosView />} />
          <Route path="/contacto" element={<ContactoView />} />
          <Route path="/login" element={<LogInView />} />
          <Route path="/signin" element={<SignInView />} />
        </Routes>
      </main>
      <FooterMobile />
      <FooterDesktop />
    </>
  );
}

export default App;
