# Desafio Impar

<h1 align="center">
  Desafio-Impar
</h1>
<p align="center">
  Replicação do Site
</p>

<p align="center">
 <a href="#status">Status</a> •
 <a href="#geral">Visão Geral</a> •
 <a href="#requisitos">Pré-Requisitos</a> •
 <a href="#executar">Como executar</a> • 
 <a href="#func">Funcionalidades</a> • 
 <a href="#tecnologias">Tecnologias</a>
</p>


<h4 id=status align="center"> 
	✔️ Finalizado ✔️
</h4>

<h2 id="geral" >
  📕 Visão Geral
</h2>
<p>
  Essa replicação foi desenvolvida ultizando como base HTML5, CSS3 e ES6. A príncipio foi realizado de maneira mais fiel ao site na resolução disponibilizada (1440x768), porém algumas coisas não estavam centralizadas e foi replicado isso no código, mudando apenas na responsividade.
</p>

<h2 id="requisitos"> 
  ⚠ Pré-requisitos
</h2>
<p>
  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
  <a href="https://git-scm.com">[Git]</a>, <a href="https://nodejs.org/en/">[Node.js]</a>.
</p>


<h2 id="executar"> 
  🎲 Rodando o projeto
</h2>

```bash
# Clone este repositório
$ git clone https://github.com/JoaoDessup/Desafio-Impar.git

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-impar

# Instale o http-server
$ npm install http-server -g

# Execute o servidor
$ http-server
```
<h2 id="func"> 
  💬 Funcionalidades
</h2>
<p>
  A princípio temos presentes no site 6 funcionalidades principais, sendo elas: Barra de busca, Criação de Cards feita com API, Tela modal de criação, Tela modal de exclusão, Tela modal de "nOp" e Responsividade.
	
• Barra de busca : Foi utilizado um form input do tipo "search", onde por meio de um script se lista todos os elementos de ".card". Com isso, se faz uma comparação entre o que foi digitado e as informações do card. Para evitar problemas de capitalização de palavras, foi utilizado o método "toLoweCase()" que converte o valor recebido para minúsculo, e para desabilitar o "refresh" ocasionado pela tecla enter foi criado uma função que utiliza o método "preventDefault()".
	
• Criação de Cards : Os cards foram implementados por meio de uma chamada "data-js" em uma div no HTML, onde nessa chamada se realiza um "fetch" das informações disponibilizadas pela API "PokéAPI". Para implementar todos os cards foi feito um "accumulator" onde nele se tem a estrutura da div que vai ser inserida no HTML por meio de um "innerHTML", que é localizado pelo "data-js" definido anteriormente. 
</p>

• Telas modais : Todas as telas seguem o mesmo princípio de funcionamento, onde por meio do método "onclick" presente em algumas aplicações se faz uma manipulação da posição dessa tela modal (-100% para desaparecer e 0 para aparecer), sendo identificado por meio do método "getElementById".
- Modal de Criação : Criação de novo card, onde você possui a opção de dar um nome e inserir uma imagem ao card e o botão de criar o card que nos leva para outra modal (Modal "nOp").
- Modal de Exclusão : Exclusão de card, onde caso cancele nos leva para tela inicial novamente e caso confirme nos leva para tela modal "nOp".
- Modal "nOp" : Feita para aquelas funções que não foram implementadas.

• Responsividade : Para fazer a responsividade foi utilizado o "@media", sendo utilizado 3 vezes ao longo do código.
- 0 px à 1023 px
- 1024 px para cima
- 0 px à 519 px (Reajustes Mobile)

<h2 id="tecnologias"> 
 🛠 Tecnologias 
</h2>
<p>
  As seguintes ferramentas foram usadas na construção do projeto:

- <a href="https://html5.org/">[HTML5]</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">[CSS3]</a>
- <a href="http://es6-features.org/">[ECMASScript 6]</a>
- <a href="https://nodejs.org/en/">[Node.js]</a>
- <a href="https://pokeapi.co/">[PokéAPI]</a>
</p>
