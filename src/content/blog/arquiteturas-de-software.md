---
title: 'Principais arquiteturas e porque elas existem?'
description: '/imagens/2 - index.jpeg'
pubDate: '2/22/2026'
id: 2
---

## Sumário

1. Introdução
    1. O que é um software?
    2. Problemas comuns em desenvolvimento de software
    3. Por que existe arquitetura de software?
    4. Quais são os tipos de software?
2. Principais arquiteturas para cada tipo de software
    1. Porque temos vários tipos de software?
    2. Linguagem de programação
    3. Sistema
    4. Jogos
    5. Desktop
    6. Web
    7. Mobile
    8. Embarcados
3. Finalização

## 1. Introdução


### 1. O que é um software?

Software são instruções que fornecemos às máquinas para executar uma determinada tarefa. Por exemplo: um software de edição de documentos tem o objetivo de editar um documento, logo, todas as instruções escritas para esse programa têm esse objetivo.

O computador não se importa se você escreveu seguindo Clean Code, usou a arquitetura X ou a linguagem Y; para ele tudo se resume a bits. Quem se importa com essas escolhas é você, especialmente quando for adicionar funcionalidades ou fazer manutenção, ou quando outra pessoa precisar trabalhar no código.

Para quem não sabe o que são bits, recomendo o vídeo onde explico como funciona uma engine de xadrez. O binário foi a base para o desenvolvimento dela, então eu explico o que é.

<a href="https://youtu.be/V-h1vkHaH8s" target="_blank" rel="noopener"><img src="https://img.youtube.com/vi/V-h1vkHaH8s/maxresdefault.jpg" alt="Título do vídeo"/></a>


### 2. Problemas comuns em desenvolvimento de software

O desenvolvimento de software em si mudou em ferramentas e escala, mas a essência continua a mesma: receber informações, processá-las e retornar resultados. Antigamente passávamos dados por cartões perfurados; hoje usamos IDEs, automações e, cada vez mais, agentes de IA. No passado havia até máquinas com válvulas, muito mais lentas que o que temos hoje.

<img src="/imagens/2.1 - colossus.jpg" alt="Colossus"/>

Imagina programar em uns desse hoje em dia, cry!

Programar mudou em aparência, mas continua EXATAMENTE a mesma coisa: inserir informações, processar dados e retornar dados. Como programadores, somos responsáveis por tratar os dados recebidos, processá-los e devolver os resultados. Nada mudou na essência, o que mudou foi a forma como fazemos isso e muitos problemas antigos persistem em novas formas.

Por isso livros como The Mythical Man Month continuam existindo e sendo referência, mesmo sendo lançado em 1975.


### 3. Por que existe arquitetura de software

Não dá para falar de arquitetura de software sem falar de Engenharia de Software, foi ela que sistematizou práticas para resolver problemas recorrentes no desenvolvimento. A arquitetura existe para mitigar esses problemas: organização, separação de responsabilidades, modularidade, comunicação entre componentes e integração com outros sistemas.

Construir software não é tão diferente de construir uma casa, prédio, etc. Ao olhar uma construção você consegue identificar se é uma casa, uma biblioteca ou outro tipo de edifício. O mesmo vale para software: ele deve transmitir o que faz pela forma como é escrito, organizado e estruturado, e pelas tecnologias que utiliza.

Obviamente não faz sentido projetar uma mega cozinha para uma casa comum, já em um restaurante ela é necessária. O mesmo vale para arquiteturas: uma arquitetura adequada para um servidor web pode ser inadequada para uma aplicação desktop.

A primeira etapa é levantar requisitos; com eles, escolhe-se a arquitetura que melhor balanceie separação de responsabilidades, organização do projeto, modularidade, comunicação entre componentes e integrações externas.

## Referências
- https://pt.wikipedia.org/wiki/Software
- https://pt.wikipedia.org/wiki/Engenharia_de_software
- https://pt.wikipedia.org/wiki/Arquitetura_de_software
- https://www.amazon.com.br/Arquitetura-Limpa-Artes%C3%A3o-Estrutura-Software/dp/8550804606
- https://www.amazon.com.br/M%C3%ADtico-Homem-m%C3%AAs-Ensaios-Engenharia-Software/dp/8550802530