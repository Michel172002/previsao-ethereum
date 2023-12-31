# Previsão Ethereum - Simulador de Apostas com React

Este projeto simples permite que o usuário faça previsões sobre o valor futuro da moeda Ethereum, com valores simulados.

## Como Testar

- Clone o repositório: `git clone git@github.com:Michel172002/previsao-ethereum.git`
- Entre no diretório do projeto: `cd previsao-ethereum`
- Instale as dependências: `npm install`
- Inicie o projeto: `npm start`

## Descrição das Funcionalidades

### Tabela

- À esquerda, uma tabela simula as apostas do usuário e de outros usuários (oponentes recebem o mesmo valor da sua aposta).
- Abaixo da tabela, o valor total do prêmio é exibido, calculado como 80% da soma das apostas.

### Formulário da Aposta

- Dois inputs permitem que o usuário insira o valor que acredita que a moeda Ethereum terá em 2 dias (simulado) e o valor da aposta desejada.
- Dois botões: o primeiro verifica e gera a aposta se válida, habilitando o segundo botão para simular os 2 dias. O segundo botão mostra se a aposta foi acertada.
- O valor da moeda varia aleatoriamente entre R$ 2.000,00 e R$ 3.000,00 cada vez que o botão de passar o tempo é clicado.

### Informações

- À direita, informações sobre o valor atual da moeda e o saldo disponível para apostas.
- Se o saldo ficar em R$ 0,00, um botão "RESET" aparecerá para reiniciar o saldo para R$ 2.000,00.

#### Dica

Para facilitar os testes em caso de acerto da aposta, no arquivo `App.js`, na linha 49, a verificação do chute igual a 12 está comentada. Descomente essa linha e comente a linha 48 para facilitar os testes corretos.

```javascript
const checkChute = () => {
    // var resultado = chuteValorEthereum == precoEthereum;
    var resultado = (chuteValorEthereum == 12)
    setAcertouChute(resultado);

    if (resultado) {
      gerarPremio();
    }
};
