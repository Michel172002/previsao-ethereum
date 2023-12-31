import { useState } from "react";
import "./FormAposta.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormAposta = () => {
  const [chuteValorEthereum, setChuteValorEthereum] = useState(0);
  const [valorAposta, setValorAposta] = useState(0);

  const [btnDisabled, setbtnDisabled] = useState(true);
  const [mensagem, setMensagem] = useState('');
  const [corMensagem, setCorMensagem] = useState('');

  const handleChuteValorEthereumChange = (event) => {
    setChuteValorEthereum(event.target.value);
  };

  const handleValorApostaChange = (event) => {
    setValorAposta(event.target.value);
  };

  const gerarAposta = (event) => {
    event.preventDefault();

    if (valorAposta > 0 && chuteValorEthereum > 0) {
        setbtnDisabled(false);
        setCorMensagem('#90ee90')
        setMensagem('Aposta aprovada, passe o tempo para poder ver o resultado!')
    }else{
        setCorMensagem('red')
        setMensagem('Aposta Reprovada, corrija os valores informados!')
    }

  };

  const PassarDias = (event) => {
    event.preventDefault();

    setbtnDisabled(true);
    setMensagem('');
    setValorAposta(0);
    setChuteValorEthereum(0);
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
            placeholder="Ex: 2300"
            value={chuteValorEthereum}
            onChange={(e) => handleChuteValorEthereumChange(e)}
          />
        </Form.Group>
        <Form.Group className="container-form-group">
          <Form.Label className="text-white">
            Valor que deseja apostar
          </Form.Label>
          <Form.Control
            type="number"
            className="input"
            placeholder="Ex: 10"
            value={valorAposta}
            onChange={(e) => handleValorApostaChange(e)}
          />
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
      <span style={{color: `${corMensagem}`, fontSize: 'medium'}}>{mensagem}</span>
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
