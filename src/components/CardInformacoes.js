import "./CardInformacoes.css";

import { Button, Container, Row } from "react-bootstrap";

const CardInformacoes = ({
  valorDisponivel,
  precoEthereum,
  hiddenResultado,
  acertouChute,
  valorPremio,
  onResetCarteira,
}) => {

  const resetCarteira = (event) => {
    event.preventDefault();

    onResetCarteira()
  }

  return (
    <Container className="container-info">
      <Row className="row-info">
        <h5>Preço atual Ethereum</h5>
        <h3>R$ {precoEthereum}</h3>
      </Row>
      <Row className="row-info">
        <h6>Valor disponivel na carteira</h6>
        <h3>R$ {valorDisponivel}</h3>
      </Row>
      <Row className="row-info">
        <Button
          variant="success"
          type="button"
          hidden={valorDisponivel !== 0}
          onClick={(e) => resetCarteira(e) }
        >
          RESET
        </Button>
      </Row>
      <Row hidden={hiddenResultado}>
        <span hidden={acertouChute} style={{color: 'red'}}>Você não acertou!</span>
        <span hidden={!acertouChute} style={{color: '#90ee90'}}>Parabens você ganhou o premio total de R${valorPremio}!</span>
      </Row>
    </Container>
  );
};

export default CardInformacoes;
