import { useState } from "react";
import "./FormAposta.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormAposta = ({ onApostaSubmit, valorDisponivel, onPassarTempo }) => {
  const [chuteValorEthereum, setChuteValorEthereum] = useState(0);
  const [valorAposta, setValorAposta] = useState(0);

  const [btnDisabled, setbtnDisabled] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [corMensagem, setCorMensagem] = useState("");

  const handleChuteValorEthereumChange = (event) => {
    setChuteValorEthereum(event.target.value);
  };

  const handleValorApostaChange = (event) => {
    setValorAposta(event.target.value);
  };

  const gerarAposta = (event) => {
    event.preventDefault();

    if (
      valorAposta > 0 &&
      chuteValorEthereum > 0 &&
      valorAposta <= valorDisponivel
    ) {
      setValorAposta(0);
      setChuteValorEthereum(0);
      setbtnDisabled(false);
      setCorMensagem("#90ee90");
      setMensagem("Aposta aprovada, passe o tempo para poder ver o resultado!");

      onApostaSubmit(valorAposta, chuteValorEthereum);
    } else {
      setCorMensagem("red");
      setMensagem("Aposta Reprovada, corrija os valores informados!");
    }
  };

  const PassarDias = (event) => {
    event.preventDefault();

    setbtnDisabled(true);
    setMensagem("");

    onPassarTempo();
  };

  return (
    <div className="container-form">
      <Form onSubmit={(e) => gerarAposta(e)}>
        <Form.Group size="sm" className="container-form-group">
          <Form.Label className="text-white">
            Preço Ethereum daqui 2 dias
          </Form.Label>
          <Form.Control
            type="number"
            className="input"
            placeholder="Ex: 2300.00"
            value={chuteValorEthereum}
            onChange={(e) => handleChuteValorEthereumChange(e)}
          />
          <Form.Text className="text-white">Ex: 1234.56 ou 1234</Form.Text>
        </Form.Group>
        <Form.Group className="container-form-group">
          <Form.Label className="text-white">
            Valor que deseja apostar
          </Form.Label>
          <Form.Control
            type="number"
            className="input"
            placeholder="Ex: 10.00"
            value={valorAposta}
            onChange={(e) => handleValorApostaChange(e)}
          />

          <Form.Text className="text-white">Ex: 1234.56 ou 1234</Form.Text>
        </Form.Group>
        <Button
          className="btn-submit"
          variant="success"
          type="submit"
          disabled={!btnDisabled}
        >
          Gerar Aposta
        </Button>
      </Form>
      <span style={{ color: `${corMensagem}`, fontSize: "medium" }}>
        {mensagem}
      </span>
      <Button
        variant="success"
        type="button"
        disabled={btnDisabled}
        onClick={(e) => PassarDias(e)}
      >
        Simular passar 2 dias
      </Button>
    </div>
  );
};

export default FormAposta;
