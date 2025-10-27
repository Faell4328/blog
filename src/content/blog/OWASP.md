---
title: 'OWASP Top 10: o guia essencial para desenvolvedores'
description: '/imagens/owasp.png'
pubDate: '10/26/2025'
goal: 'Introduzir os conceitos base sobre cibersegurança em desenvolvimento'
---

## O que é a OWASP?

A OWASP (Open Web Application Security Project) é uma comunidade online voltada à segurança da informação no desenvolvimento de software. Ela disponibiliza projetos, artigos, metodologias e ferramentas de forma gratuita, servindo como referência mundial para profissionais de cibersegurança.

<br />

## Porque um desenvolvedor precisa saber isso?

Um desenvolvedor não deve apenas escrever código eficiente e funcional, ele também precisa escrever código seguro.

Em empresas maiores, normalmente existem equipes de segurança dedicadas a identificar e corrigir vulnerabilidades. Ainda assim, todo desenvolvedor deve ter, no mínimo, um conhecimento básico de segurança.

O OWASP Top 10 representa esse nível básico. Mesmo assim, aplicar seus princípios ajuda a prevenir grande parte das falhas mais comuns em aplicações.

<br />

## OWASP Top 10

O OWASP Top 10 é uma lista que apresenta as 10 vulnerabilidades mais comuns e críticas em aplicações web. A versão mais recente é de 2021, e inclui:

1) Quebra de controle de acesso
2) Falhas criptográficas
3) Injeção
4) Design inseguro
5) Configuração insegura
6) Componentes desatualizados e vulneráveis
7) Falhas de identificação e autenticação
8) Falhas de integridade de dados e software
9) Falhas em monitoramento e registro de segurança
10) Falsificação de solicitação do lado do servidor (SSRF)

<br />

## Estrutura da explicação

Agora entramos na parte teórica e demonstrativa. A explicação será estruturada da seguinte forma:

1) Explicarei o que é a vulnerabilidade.
2) Apresentarei um caso de uma grande empresa que sofreu um impacto significativo e o porque ocorreu.
3) Por fim, explicarei como se proteger de forma geral, incluindo exemplos em código.

<br />

### Quebra de controle de acesso

**Explicação:** Essa vulnerabilidade ocorre quando um usuário consegue acessar recursos ou funcionalidades que deveriam estar restritos a ele. Isso pode permitir, por exemplo, acessar contas administrativas, alterar configurações do sistema, visualizar ou modificar dados de outros usuários e até deletar informações críticas.

**Caso grande:** Em 2021, o Facebook anúncio que dados de 553 milhões de usuários foram vazados. Foram vazados: Identidades do Facebook, Nome completo, Data de nascimento, localização e email, até o titio Zuck teve seu número vazado. Os atacantes exploraram uma funcionalidade que ajudava o usuário a encontrar seus amigos no Facebook, que não verificava corretamente se o usuário tinha permissão para acessar aquelas informações.

<br />

### Falhas criptográficas

**Explicação:** Essa vulnerabilidade ocorre quando informações ou serviços não são criptografados corretamente ou utilizam algoritmos fracos. Isso permite que atacantes interceptem, leiam ou modifiquem os dados transmitidos, comprometendo a confidencialidade (garantia de que apenas o destinatário possa acessar a informação) e a integridade (garantia de que os dados não foram alterados) das informações.

Outro ponto importante são as senhas: se elas não forem devidamente protegidas e forem vazadas, isso tem o mesmo efeito que não criptografar os dados, pois permite que terceiros obtenham acesso não autorizado às informações.

**Caso grande:** Em 2025, o Microsoft SharePoint Server apresentou uma falha zero-day (uma vulnerabilidade que não havia sido descoberta pela empresa e ainda não possuía correção, tornando-se um alvo fácil para atacantes). Com essa falha, os invasores podiam ter acesso à chave de criptografia, permitindo ler e modificar o conteúdo armazenado no SharePoint.

<br /><hr />

## Referências
- https://owasp.org/Top10/pt-BR/
- https://www.strongdm.com/what-is/facebook-data-breach
- https://www.cybersecbrazil.com.br/post/falha-cr%C3%ADtica-zero-day-no-sharepoint-n%C3%A3o-corrigida-permite-invas%C3%A3o-de-mais-de-75-servidores-corporat