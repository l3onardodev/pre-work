# Desafio do dia 01

## Setup

Primeiro, instale as dependências do projeto e coloque o servidor para rodar em modo de desenvolvimento.

Lembre-se de, após resolver cada exercício abaixo, fazer um commit para "registrar" o ajuste.

## Exercício 01

Resolver o erro que aparece no console:

```
GET http://localhost:3000/main.js net::ERR_ABORTED 404 (Not Found)
```

Resolução: Era um simples erro no diretório do arquivo JS, no qual é especificado na tag script do HTML.

## Exercício 02

Ao resolver o primeiro erro, resolva o segundo erro que deverá aparecer no console:

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

Resolução: Para que eu consigo utilizar import/export em BROWSERS, eu preciso especificar o type do script como "module".

## Exercício 03

Olhe novamente para o console, e resolva o próximo erro:

```
main.js:3 Uncaught TypeError: Cannot set property 'innerHTML' of null
```
RESOLUÇÂO: O querySelector estava a selecionar o ID "app" enquanto que, no html file, temos apenas a class "app" e o data-js "app". Como ontem aprendi com o daciuk sobre utilizar o data-js nos arquivos javascript (para que nao ocorra conflito com a class que é usada no CSS), selecionei, pelo querySelector, o data-js.

## Exercício 04

Crie um link no HTML (fora da div `.app`), e adicione à ele um evento de clique.
O clique nesse botão deverá alternar a visibilidade do `.app`: se o `.app` estiver visível,
ele deverá ser escondido. Se estiver escondido, o clique deve exibí-lo.

SOLUÇÃO: Esse desafio foi interessante. No arquivo JS, selecionei os elementos com querySelector e os aloquei em variáveis. O exercício pediu que houvesse um botão que representasse um estado (aparecendo ou nao aparecendo a div), por isso criei uma state variable no arquivo js e, por meio dela, segui a logica de mostrar ou esconder o conteúdo. Para alcançar o que queria, adicionei e removi uma classe chamada "hidden", na qual possui como property o display: none. 
Tentei deixar o botão bonitinho, mas nada muito extraordinário pois acho que esse nao era o foco do desafio. 
Criei uma classe chamada "preload" na qual faz com os elementos filhos do body tenham suas respectivas property "transition" setada como none até 1/10 de segundos após carregar a pagina. Após isso, as properties "transition" voltam a funcionar normalmente. Fiz isso pois enfrentei um dilema de que, quando a pagina era recarregada, os estilos eram aplicados com o efeito do transition (coisa essa que ficava muito feia) e, por conta disso, usei uma função setInterval no arquivo JS para resolver esse problema.

No geral, curti os desafios! Lezsgo!
