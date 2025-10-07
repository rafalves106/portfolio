import React from "react";
import Background from "./components/Background";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import CertificatesPage from "./pages/CertficatesPage";
import TechsPage from "./pages/Techs";

function App() {
  const [abaAtiva, setAbaAtiva] = React.useState<string>("menu");

  const handleMudarAba = (aba: string) => {
    setAbaAtiva(aba);
  };

  return (
    <>
      <Background className={abaAtiva}>
        <MenuPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <AboutPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <CertificatesPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <TechsPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
      </Background>
    </>
  );
}

export default App;
