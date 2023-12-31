import { useState } from "react";
import "./App.css";

import ApostasTable from "./components/ApostasTable";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormAposta from "./components/FormAposta";
import CardInformacoes from "./components/CardInformacoes";

function App() {
  const [valorAposta, setValorAposta] = useState(0.0);
  const [chuteValorEthereum, setChuteValorEthereum] = useState(0.0);

  const [precoEthereum, setPrecoEthereum] = useState(2500.0);
  const [valorDisponivel, setValorDisponivel] = useState(2000.0);

  const [acertouChute, setAcertouChute] = useState(false);
  const [hiddenMensagemResultado, setHiddenMensagemResultado] = useState(true);

  const [valorPremio, setValorPremio] = useState(0.0);

  const handleApostaSubmit = (valorAposta, chuteValorEthereum) => {
    setChuteValorEthereum(chuteValorEthereum);
    setValorAposta(valorAposta);
    setValorDisponivel(valorDisponivel - valorAposta);
    setHiddenMensagemResultado(true);
  };

  const handlePassarDias = () => {
    atualizarPrecoEthereum();
    setHiddenMensagemResultado(false);
    checkChute();

    setValorAposta(0);
  };

  const atualizarPrecoEthereum = () => {
    setPrecoEthereum((Math.random() * (3000 - 2000 + 1) + 2000).toFixed(2));
  };

  const resetCarteira = () => {
    setValorDisponivel(2000);
  };

  const checkChute = () => {
    var resultado = chuteValorEthereum == precoEthereum;
    //var resultado = (chuteValorEthereum == 12)
    setAcertouChute(resultado);

    if (resultado) {
      gerarPremio();
    }
  };

  const gerarPremio = () => {
    var premio = (10 * valorAposta * 0.8).toFixed(2);
    setValorPremio(() => premio);
    setValorDisponivel((anterior) => anterior + parseFloat(premio));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Previsão Ethereum</h1>
      </header>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <ApostasTable valorApostaAtual={valorAposta} />
          </Col>
          <Col>
            <FormAposta
              onApostaSubmit={handleApostaSubmit}
              valorDisponivel={valorDisponivel}
              onPassarTempo={handlePassarDias}
            />
          </Col>
          <Col xs={3}>
            <CardInformacoes
              valorDisponivel={valorDisponivel}
              precoEthereum={precoEthereum}
              hiddenResultado={hiddenMensagemResultado}
              acertouChute={acertouChute}
              valorPremio={valorPremio}
              onResetCarteira={resetCarteira}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
