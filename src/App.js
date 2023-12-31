import './App.css';

import ApostasTable from './components/ApostasTable';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormAposta from './components/FormAposta';
import CardInformacoes from './components/CardInformacoes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Previsão Ethereum</h1>
      </header>
      <Container >
        <Row className="justify-content-md-center">
        <Col xs={3}>
          <ApostasTable />
        </Col>
        <Col>
          <FormAposta />
        </Col>
        <Col xs={3}>
          <CardInformacoes />
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
