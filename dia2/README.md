# Desafio do dia 02

## Exercício 01 - Imutabilidade

Importe o arquivo `src/immutable.js` no `src/main.js`. Abra o arquivo e olhe o console do navegador.
O resultado dos dois objetos deveria ser diferente. Faça a criação do segundo objeto
de forma imutável.

## SOLUÇÂO: 
Exercício simples que lida com fundamentos de mutabilidade em objetos. Para resolver o problema proposto, bastava fazer com que as variáveis nao referenciasse o mesmo objeto na memory heap. Para realizar tal, tive de fazer uma "copia" das properties dos objetos, feito com o uso do spread operator. Tenho noção, todavia, de que há outros modos além do uso do spread operator, como, por exemplo: o JSON.parse() e o Object.assign(). (ambos que já utilizei eventualmente em projetos pessoais).

## Exercício 02 - HOF (Higher Order Function)
Abra o arquivo `src/calculator.js` e importe ele `src/main.js`.

Veja que, nesse arquivo, temos uma função `calculadora` sem implementação, e temos
algumas variáveis que fazem a execução da calculadora. O desafio é fazer a implementação da
calculadora, para que todos os valores no console resultem em `true`.

A implementação deve ser da seguinte forma:
- A função `calculadora` deve receber via argumento uma função, que dirá como o cálculo vai ser feito (olhe para a linha onde foi criada a variável `sum`, por exemplo, para ver a função que está sendo passada para a `calculadora`);
- O retorno da função `calculadora` deve ser uma nova função que espera dois argumentos `a` e `b`: dois números que serão calculados usando a função que foi passada como argumento para `calculadora`; 
- Essa função de retorno deve retornar **a chamada** da primeira função que foi passada via argumento; 
- Os valores `a` e `b` devem ser passados como parâmetro para essa função que está sendo executada.

## OBS: 
Confesso que HOF ainda nao são 100% claras em minha mente, e sinto que tenho de praticar um bocado ainda. Mas, achei esse exercício mto maneiro. Meu proximo projeto será criar uma calculadora e, com certeza, usarei os conceitos que absorvi desse exercício e das aulas do Daciuk.

## SOLUÇÂO: 
Resolvi o desafio por meio de arrow functions em que uma funcao é passada como parametro em certa funcao, e essa "certa" funcao retorna uma outra funcao que recebe *a, b* como argumentos e que retorna a chamada da primeira funcao. (dessa forma a ultima funcao recebe o famigerado "closure" em que pode chamar uma funcao que já fora retornada e, em tese, nem existe mais no codigo).
