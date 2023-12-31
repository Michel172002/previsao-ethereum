import Table from 'react-bootstrap/Table';

const ApostasTable = ({ valorApostaAtual }) => {
    var valorPremio = ((10 * valorApostaAtual) * 0.8).toFixed(2)

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th colSpan={2}>APOSTAS</th>
                </tr>
                <tr>
                <th>Nome</th>
                <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Você</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 1</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 2</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 3</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 4</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 5</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 6</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 7</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 8</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                <td>Oponente 9</td>
                <td>R$ { valorApostaAtual }</td>
                </tr>
                <tr>
                    <td colSpan={2}>Valor do premio atual: R$ {valorPremio}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ApostasTable;