---
title: 'Principais arquiteturas e por que elas existem?'
description: '/imagens/2 - index.jpeg'
pubDate: '2/22/2026'
id: 2
---

## Sumário

1. Introdução
    1. O que é um software?
    2. Problemas comuns no desenvolvimento de software
    3. Por que existe arquitetura de software?
2. Principais arquiteturas para cada tipo de software
    1. Por que temos vários tipos de software?
    2. Linguagem de programação
    3. Sistemas operacionais
    4. Sistemas
    5. Jogos
    6. Desktop
    7. Web
    8. Mobile
    9. Embarcados
3. Finalização

## 1. Introdução

Esse post não é para debater qual arquitetura é melhor ou pior. O objetivo aqui é introduzir os primeiros princípios que fundamentam a arquitetura de software, ajudando a compreender sua importância e aplicação. E com base nisso, você irá decidir.

<br />

### 1. O que é um software?

Software são instruções que fornecemos às máquinas para executar uma determinada tarefa. Por exemplo, um software de edição de documentos tem o objetivo de editar um documento, logo, todas as instruções escritas para esse programa têm esse objetivo. "Ah, mas tem uma funcionalidade para salvar em nuvem." Sim, mas o foco principal ainda é a edição de documentos.

O computador não se importa se você escreveu seguindo Clean Code, usou a arquitetura X ou a linguagem Y; para ele tudo se resume a bits. Quem se importa com essas escolhas é você, especialmente quando for adicionar funcionalidades ou fazer manutenção, ou quando outra pessoa precisar trabalhar no código.

Para quem não sabe o que são bits, recomendo o vídeo onde explico como funciona uma engine de xadrez. O binário foi a base para o desenvolvimento dela, então eu explico o que é.

<a href="https://youtu.be/V-h1vkHaH8s" target="_blank" rel="noopener"><img src="https://img.youtube.com/vi/V-h1vkHaH8s/maxresdefault.jpg" alt="Título do vídeo"/></a>

<br />

### 2. Problemas comuns no desenvolvimento de software

O desenvolvimento de software em si mudou em ferramentas e escala, mas a essência continua a mesma: receber informações, processá-las e retornar resultados. Antigamente, passávamos dados por cartões perfurados; hoje usamos IDEs, automações e, cada vez mais, agentes de IA. No passado, havia até máquinas com válvulas, muito mais lentas que o que temos hoje.

<img src="/imagens/2.1 - colossus.jpg" alt="Colossus"/>

Imagine programar em uma dessas hoje em dia, cry!

Programar mudou em aparência, mas continua EXATAMENTE a mesma coisa: inserir informações, processar dados e retornar dados. Como programadores, somos responsáveis por tratar os dados recebidos, processá-los e devolver os resultados. Nada mudou na essência, o que mudou foi a forma como fazemos isso, e muitos problemas antigos persistem em novas formas.

Por isso, livros como The Mythical Man Month continuam existindo e sendo referência, mesmo sendo lançados em 1975.

<br />

### 3. Por que existe arquitetura de software?

Não dá para falar de arquitetura de software sem falar de Engenharia de Software. Foi ela que sistematizou práticas para resolver problemas recorrentes no desenvolvimento. A arquitetura existe para mitigar esses problemas: organização, separação de responsabilidades, modularidade, comunicação entre componentes e integração com outros sistemas.

Construir software não é tão diferente de construir uma casa, prédio, etc. Ao olhar uma construção, você consegue identificar se é uma casa, uma biblioteca ou outro tipo de edifício. O mesmo vale para software: ele deve transmitir o que faz pela forma como é escrito, organizado e estruturado, e pelas tecnologias que utiliza.

Obviamente, não faz sentido projetar uma mega cozinha para uma casa comum; já em um restaurante, ela é necessária. O mesmo vale para arquiteturas: uma arquitetura adequada para um servidor web pode ser inadequada para uma aplicação desktop.

A primeira etapa é levantar requisitos. Com eles, escolhe-se a arquitetura que melhor balanceie separação de responsabilidades, organização do projeto, modularidade, comunicação entre componentes e integrações externas.

<br />

## 2. Principais arquiteturas para cada tipo de software

<br />

### 2.1. Por que temos vários tipos de software?

Simplesmente porque temos vários tipos de problemas, alguns mais genéricos, outros mais específicos. E, com base nisso, precisamos elaborar formas de resolver esses problemas. Depois, precisamos organizar e estruturar a resolução desses problemas; é aí que entra a arquitetura de software.

Desenvolver uma aplicação web é totalmente diferente de desenvolver uma aplicação desktop ou mobile, ou pelo menos deveria ser.

<br />

### 2.2. Linguagem de programação

Linguagens de programação são a camada que permite que humanos deem instruções úteis às máquinas. A escolha da linguagem influencia diretamente desempenho, segurança, produtividade, manutenção e o ecossistema disponível para o projeto.

Algumas decisões são arquiteturais (por exemplo: compilada vs interpretada, existência de runtime/VM, coleta de lixo), enquanto outras são mais de design (tipagem estática vs dinâmica, paradigma imperativo, OO, funcional e gerenciamento de memória). Entender essas diferenças ajuda a escolher a linguagem adequada ao problema.

Existe também o ecossistema da linguagem, que não está relacionado à arquitetura da linguagem, mas é uma decisão que você precisa tomar em seu projeto. Se já existe uma biblioteca que tem as funcionalidades que você precisa, bem escrita e segura, então é altamente recomendado que seja utilizada.

Também é uma decisão arquitetural escolher o compilador/interpretador utilizado. Em C, você pode escolher entre compilar com GCC, Clang e outros. Em JS para back-end, você pode utilizar o Node.js, Bun e outros. Isso vale para várias linguagens.

<br />

## Referências
- https://pt.wikipedia.org/wiki/Software
- https://pt.wikipedia.org/wiki/Engenharia_de_software
- https://pt.wikipedia.org/wiki/Arquitetura_de_software
- https://www.amazon.com.br/Arquitetura-Limpa-Artes%C3%AÃ‚-Estrutura-Software/dp/8550804606
- https://www.amazon.com.br/M%C3%ADtico-Homem-m%C3%AAs-Ensaios-Engenharia-Software/dp/8550802530