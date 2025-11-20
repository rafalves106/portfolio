import React from "react";
import Background from "./components/Background";
import LandingPage from "./pages/LandingPage";

function App() {
  const [abaAtiva, setAbaAtiva] = React.useState<string>("menu");
  const [secaoAtiva, setSecaoAtiva] = React.useState<string>("menu");

  const handleMudarAba = (aba: string) => {
    setAbaAtiva(aba);
    if (aba !== "skills") {
      setSecaoAtiva("menu");
    }
  };

  return (
    <>
      <Background className={abaAtiva}>
        <LandingPage abaAtiva={abaAtiva} handleMudarAba={handleMudarAba} />
      </Background>
    </>
  );
}

export default App;
