---
title: 'OWASP Top 10: o guia essencial de cibersegurança para desenvolvedores'
description: '/imagens/1 - index.png'
pubDate: '11/01/2025'
goal: 'Introduzir os conceitos base sobre cibersegurança em desenvolvimento'
id: 1
---

## O que é a OWASP?

A OWASP (Open Web Application Security Project) é uma comunidade online focada em segurança da informação no desenvolvimento de software. Ela disponibiliza gratuitamente projetos, artigos, metodologias e ferramentas, sendo uma referência mundial para profissionais de cibersegurança.

<br />

## Porque um desenvolvedor precisa saber isso?

Um desenvolvedor não deve se preocupar apenas em escrever código funcional e eficiente, ele também precisa escrever código seguro.

Em empresas maiores, existem equipes de segurança dedicadas a identificar e corrigir vulnerabilidades. Ainda assim, todo desenvolvedor deve ter, no mínimo, um conhecimento básico em segurança no desenvolvimento.

O OWASP Top 10 representa esse nível básico de conhecimento. Aplicar seus princípios ajuda a prevenir grande parte das falhas mais comuns em aplicações.

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

## Aviso

Não será abordado aqui como corrigir essas vulnerabilidades, pois cada caso é diferente. Não existe uma solução única que funcione para todos os ambientes, linguagens, frameworks ou sistemas operacionais. O objetivo é apenas identificar vulnerabilidades e apresentar exemplos ilustrativos de cada uma.

<br />

### 1) Quebra de controle de acesso

**Explicação:** Essa vulnerabilidade ocorre quando um usuário consegue acessar recursos ou funcionalidades que deveriam estar restritos a ele, quando o ocorre uma falha na identificação do usuário. Isso pode permitir, por exemplo, acessar funcionalidades administrativas, alterar configurações do sistema, visualizar ou modificar dados de outros usuários e até deletar informações críticas.

**Caso grande:** Em 2021, o Facebook anúncio que dados de 553 milhões de usuários foram vazados. Foram vazados: Identidades do Facebook, Nome completo, Data de nascimento, localização e email, até o titio Zuck teve seu número vazado. Os atacantes exploraram uma funcionalidade que ajudava o usuário a encontrar seus amigos no Facebook, que não verificava corretamente se o usuário tinha permissão para acessar aquelas informações.

Um exemplo que ilustra essa vulnerabilidade ocorreu em 2014, quando um garoto de 5 anos descobriu uma falha no Xbox One. Ao tentar acessar a conta do pai, ele percebeu que, após digitar a senha incorretamente e avançar para a tela de verificação, bastava preencher o campo de senha apenas com espaços para conseguir acessar o perfil normalmente. Não há fontes oficiais detalhando os aspectos técnicos, mas em discussões online sugere-se que o problema provavelmente surgiu porque o framework responsável pelo login transformava a sequência de espaços ('    ') em uma string vazia (''). Em seguida, um bug no sistema interpretava essa string vazia como uma senha válida, permitindo o acesso indevido à conta.

<br />

### 2) Falhas criptográficas

**Explicação:** Essa vulnerabilidade ocorre quando há alguma falha na implementação ou utilização da criptografia, podendo envolver algoritmos obsoletos, senhas fracas ou o armazenamento inadequado de chaves e senhas. Tais falhas podem permitir que um atacante consiga reverter dados criptografados para o seu formato original (texto em claro).

A criptografia pode ser aplicada de duas formas: Criptografia em repouso, quando os dados estão armazenados, por exemplo, em bancos de dados. Criptografia em trânsito, quando os dados estão sendo transmitidos entre sistemas ou dispositivos.

As senhas devem ser armazenadas usando hash e salt. O hash é uma função de criptografia unidirecional, ou seja, não é possível reverter o valor gerado para o texto original. O salt é um valor aleatório adicionado à senha antes do hash, dificultando ataques de força bruta e ataques de dicionário.

**Caso grande:** Em 2025, o Microsoft SharePoint Server apresentou uma falha zero-day (uma vulnerabilidade ainda desconhecida pela empresa e sem correção disponível). Com essa falha, os invasores podiam ter acesso à chave de criptografia, permitindo ler e modificar o conteúdo armazenado no SharePoint.

<br />

### 3) Injeção

**Explicação:** Essa vulnerabilidade ocorre quando o usuário consegue infiltrar comando em algum campo e enviar para servidor. Podendo realizar ataques de XSS, injeção de SQL ou NoSQL e etc.

**Caso grande:** Em 2025, uma vulnerabilidade no plugin Paid Memberships Pro do WordPress afetou mais de 10.000 sites.
O plugin é utilizado para gerenciar assinaturas e pagamentos recorrentes. O erro ocorria durante o processamento inadequado das notificações de pagamento do PayPal, o plugin inseria dados fornecidos pelo usuário em consultas SQL sem a devida validação, possibilitando SQL Injection.

<br />

### 4) Design inseguro

**Explicação:** Refere-se a falhas de segurança que podem ocorrer em todas as fases do ciclo de desenvolvimento de um projeto, incluindo planejamento, desenvolvimento e manutenção. Esse conceito vai além do código-fonte, abrangendo a arquitetura do sistema, o uso de pacotes ou bibliotecas de terceiros e o armazenamento e proteção de dados sensíveis.

**Exemplos:**
- Configuração inadequada de servidores, APIs ou serviços HTTP, que podem permitir acesso não autorizado ou ataques.
- Solicitação excessiva de informações do usuário sem necessidade, aumentando o impacto de um possível vazamento de dados.
- Falta de tratamento e prevenção de falhas em condições inesperadas, como discos cheios, ausência de backup ou interrupções na rede.
- Ausência de limites para tentativas de login, aumentando a vulnerabilidade a ataques de força bruta.

**Caso:** Em 2025, uma cama inteligente que podia ser configurada via aplicativo, permitindo ajustar o nível de inclinação, a temperatura, entre outros parâmetros. O aplicativo enviava informações para a AWS, que então repassava os comandos para a cama. No dia 20/10/2025, a AWS sofreu uma queda, tornando impossível configurar a cama. Na internet, pessoas reclamaram que a cama parecia uma sauna ou que acabaram dormindo quase sentadas. Esse exemplo ilustra de forma clara um design com dependência excessiva de um único serviço externo (ou seja, design inseguro), mesmo sem que houvesse qualquer ataque ou vulnerabilidade explorada.

<br />

### 5) Configurações inseguras

**Explicação:** Esta vulnerabilidade não se limita apenas ao código-fonte, ela também envolve as configurações do sistema operacional, ferramentas, frameworks e linguagens de programação. Configurações padrão ou recursos desnecessários podem criar brechas de segurança. Por exemplo, se sua aplicação não utiliza XML, desative o suporte a XML presente por padrão na linguagem ou framework. Além disso, evite exibir mensagens de erro excessivamente detalhadas, pois podem fornecer informações sensíveis a um invasor.

**Caso grande:** Em 2016, a empresa Uber sofreu um vazamento de dados que expôs 600.000 nome e número de licença de motoristas, além de 57 milhões de informações pessoais de usuários, incluindo nome, número de telefone e e-mail. O incidente ocorreu porque hackers obtiveram acesso a um repositório privado no GitHub, que continha uma chave de acesso e credenciais que permitiram a coleta dos dados dos usuários.

<br />

### 6) Componentes desatualizados e vulneráveis

**Explicação:** Essa vulnerabilidade aparece quando softwares ou bibliotecas não são atualizados, deixando o sistema exposto a falhas conhecidas. A exploração dessas falhas pode comprometer a confidencialidade, integridade ou disponibilidade do sistema.

Também pode acontecer de o próprio software ou biblioteca ter sido intencionalmente desenvolvido com vulnerabilidades (por exemplo, uma extensão de navegador ou um plugin de IDE), podendo incluir scripts que roubam cookies, registram dados digitados ou copiados, e comprometem o ambiente de desenvolvimento.

**Caso grande:** Em 2017, a empresa Equifax, especializada em relatórios de crédito, sofreu uma violação de dados que expôs informações confidenciais de mais de 140 milhões de pessoas (americanos). Entre os dados comprometidos estavam nomes, datas de nascimento, endereços, números de Segurança Social e informações de cartões de crédito. A vulnerabilidade explorada estava no framework Apache Struts, uma correção já havia sido lançada em março de 2017 e a Equifax só foi atacada em maio do mesmo ano.

<br />

### 7) Falhas de identificação e autenticação

**Explicação:** Essa vulnerabilidade ocorre quando o sistema não consegue identificar ou autenticar corretamente os usuários. Como consequência, é possível que um invasor se passe por outro usuário legítimo, ganhando acesso a informações ou funcionalidades que não deveria acessar.

**Caso grande:** Em 2025, o aplicativo Tea (um app para Android e iOS voltado exclusivamente para mulheres, com foco em segurança durante encontros) sofreu um grave vazamento de dados. Cerca de 72 mil imagens (incluindo selfies e documentos de identidade) e 1,1 milhão de mensagens privadas foram expostas publicamente. 

A causa principal foi uma configuração incorreta no Firebase, onde os dados eram armazenados sem autenticação ou controle de acesso adequados. Além disso, a chave de API e o token de acesso estavam embutidos diretamente no código do aplicativo, permitindo que qualquer pessoa com acesso ao app pudesse conectar-se aos servidores e extrair informações sensíveis.

<br />

### 8) Falhas de integridade de dados e software

**Explicação:** Essa vulnerabilidade ocorre quando sistemas confiam cegamente em fontes externas sem realizar verificações adequadas de integridade, como validação de hash (ex.: SHA256). Sem essas verificações, é possível que softwares ou dados sejam alterados por agentes maliciosos antes de serem utilizados pelo sistema.

**Curiosidade:** É por isso que o Git gera um hash para cada commit. Ele permite verificar se o commit foi alterado indevidamente.

**Caso grande:** Em 2023, a empresa 3CX sofreu um ataque ao 3CX Desktop App, um software de telefonia empresarial baseado em IP (VoIP), que afetou mais de 600.000 clientes. O incidente ocorreu por meio de um ataque à cadeia de suprimentos (supply chain): os invasores injetaram malware tanto no instalador quanto nas DLLs do software.

<br />

### 9) Falhas em monitoramento e registro de segurança

**Explicação:** Neste caso, não estamos falando de falhas ou vulnerabilidades diretamente, e sim de problemas no monitoramento e no registro das informações do sistema. Embora isso não impeça que uma vulnerabilidade seja explorada, um bom monitoramento permite identificar como o ataque ocorreu e onde será necessário corrigir.

**Caso grande:** Em 2016, a rede de hotéis Marriott adquiriu sua concorrente Starwood. Em 2018, a Marriott revelou um vazamento de dados que comprometeu até 327 milhões de registros de hóspedes da antiga base da Starwood. Desses, aproximadamente 327 milhões continham informações pessoais completas, como nome, endereço, telefone, e-mail, número de passaporte e data de nascimento, enquanto alguns registros também incluíam dados de pagamento, como número do cartão e data de validade. A investigação apontou que a invasão aos sistemas da Starwood começou em 2014, dois anos antes da aquisição pela Marriott, e só foi descoberta em 2018.

<br />

### 10) Falsificação de solicitação do lado do servidor (SSRF)

**Explicação:** Essa vulnerabilidade ocorre quando um atacante consegue induzir o servidor vulnerável a realizar requisições HTTP (ou de outro tipo) para um endereço arbitrário. Em vez de o cliente fazer a requisição, é o próprio servidor que faz, seguindo a instrução manipulada pelo atacante. Isso permite que o invasor: Acesse serviços internos que normalmente não são expostos à internet (ex: localhost), faça download de arquivos maliciosos, realize scans internoso e até vaze arquivos sensíveis.

**Cago grande:** Em 2019, o banco Capital One sofreu um vazamento de dados que expôs informações de mais de 100 milhões de clientes, incluindo dados de contas e pedidos de cartões de crédito. A falha explorada envolveu um WAF mal configurado na infraestrutura AWS, permitindo a execução de um ataque SSRF que resultou no acesso a buckets do Amazon S3.

<br />

## Reflexão final

Um software recebe dados, processa-os e retorna resultados. Por isso, ao desenvolver, é essencial considerar cuidadosamente essas três etapas, pois vulnerabilidades podem surgir em qualquer delas.

Por exemplo, um ataque de injeção de SQL pode ser evitado se o tratamento das entradas for feito corretamente. Se dados maliciosos chegarem à etapa de processamento ou retorno sem validação, eles podem causar sérios problemas. Todo processo de software deve ser analisado considerando onde e como ele pode ser explorado.

Além disso, evite criar soluções próprias de segurança. Técnicas e bibliotecas consolidadas são amplamente testadas, o que reduz significativamente o risco de falhas. Isso é especialmente crítico em criptografia: apenas “embaralhar” dados não garante segurança. Algoritmos confiáveis passam por extensa revisão matemática e testes antes de serem utilizados em produção.

É importante manter uma visão crítica. Por exemplo, o item “Componentes desatualizados e vulneráveis” do OWASP Top 10 não significa que você nunca pode usar um componente com vulnerabilidades conhecidas (embora seja recomendado evitar). Se o código ou componente for essencial, é preciso analisar detalhadamente as vulnerabilidades e avaliar formas de mitigação, como limitar acessos, validar entradas, filtrar dados ou aplicar outras proteções adequadas.

<br /><hr /><br />

## Referências
- https://owasp.org/Top10/pt-BR/
- https://www.strongdm.com/what-is/facebook-data-breach
- https://security.stackexchange.com/questions/54968/how-was-the-xbox-one-password-verification-compromised
- https://www.cybersecbrazil.com.br/post/falha-cr%C3%ADtica-zero-day-no-sharepoint-n%C3%A3o-corrigida-permite-invas%C3%A3o-de-mais-de-75-servidores-corporat
- https://www.infosecurity-magazine.com/news/sqli-threat-wordpress-memberships/
- https://g1.globo.com/tecnologia/noticia/2025/10/23/pane-global-na-nuvem-da-amazon-fez-camas-inteligentes-travarem-durante-a-madrugada.ghtml
- https://www.cybersaint.io/blog/uber-hack-undisclosed
- https://en.wikipedia.org/wiki/2017_Equifax_data_breach
- https://www.appknox.com/blog/tea-app-data-breach-security-flaws-analysis-appknox
- https://www.tenable.com/blog/3cx-desktop-app-for-windows-and-macos-reportedly-compromised-in-supply-chain-attack
- https://www.bbc.com/news/technology-46401890
- https://time.com/5467781/marriott-data-breach-information
- https://root-vaibhav.medium.com/the-2019-capital-one-breach-how-ignored-warnings-and-cloud-misconfigurations-opened-the-door-to-1f57fbea527f