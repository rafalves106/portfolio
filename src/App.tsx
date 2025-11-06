import React from "react";
import Background from "./components/Background";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import CertificatesPage from "./pages/CertficatesPage";
import TechsPage from "./pages/TechsPage";
import SkillsPage from "./pages/SkillsPage/SkillPage";
import { Frontend } from "./pages/SkillsPage/Sections/Frontend";
import { Backend } from "./pages/SkillsPage/Sections/Backend";
import { DataBases } from "./pages/SkillsPage/Sections/DataBases";
import { Deploy } from "./pages/SkillsPage/Sections/Deploy";
import { GraphicDesign } from "./pages/SkillsPage/Sections/GraphicDesign";
import { WebDesign } from "./pages/SkillsPage/Sections/WebDesign";
import FrontEndPage from "./pages/FrontEndPage";
import BackEndPage from "./pages/BackEndPage";

function App() {
  const [abaAtiva, setAbaAtiva] = React.useState<string>("menu");
  const [secaoAtiva, setSecaoAtiva] = React.useState<string>("menu");

  const handleMudarAba = (aba: string) => {
    setAbaAtiva(aba);
    if (aba !== "skills") {
      setSecaoAtiva("menu");
    }
  };

  const handleMudarSecao = (secao: string) => {
    setSecaoAtiva(secao);
  };

  return (
    <>
      <Background className={abaAtiva}>
        <MenuPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <AboutPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <CertificatesPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <TechsPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <FrontEndPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <BackEndPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
        <SkillsPage
          abaAtiva={abaAtiva}
          handleMudarAba={handleMudarAba}
          secaoAtiva={secaoAtiva}
          handleMudarSecao={handleMudarSecao}
        />
        <Frontend secaoAtiva={secaoAtiva} handleMudarSecao={handleMudarSecao} />
        <Backend secaoAtiva={secaoAtiva} handleMudarSecao={handleMudarSecao} />
        <DataBases
          secaoAtiva={secaoAtiva}
          handleMudarSecao={handleMudarSecao}
        />
        <Deploy secaoAtiva={secaoAtiva} handleMudarSecao={handleMudarSecao} />
        <GraphicDesign
          secaoAtiva={secaoAtiva}
          handleMudarSecao={handleMudarSecao}
        />
        <WebDesign
          secaoAtiva={secaoAtiva}
          handleMudarSecao={handleMudarSecao}
        />
      </Background>
    </>
  );
}

export default App;
