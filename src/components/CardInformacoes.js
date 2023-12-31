import './CardInformacoes.css';

import { Button, Container, Row } from "react-bootstrap";

const CardInformacoes = () => {
  return (
    <Container className='container-info'>
      <Row className='row-info'>
        <h5>Preço atual Ethereum</h5>
        <h3>R$ 2312,23</h3>
      </Row>
      <Row className='row-info'>
        <h6>Valor disponivel na carteira</h6>
        <h3>R$ 2312,23</h3>
      </Row>
      <Row className='row-info'>
        <Button variant="success" type="button" hidden={true}>RESET</Button>
      </Row>
      <Row>
        <span>Você não acertou!</span>
        {/* <span>Parabens você ganhou o premio total de R$80,00!</span> */}
      </Row>
    </Container>
  );
};

export default CardInformacoes;
