# Notas de Estudo — Projeto NovaWeb Studio

## 1. Linguagens de marcação: HTML, XML e Markdown

Linguagens de marcação utilizam símbolos ou etiquetas para indicar a estrutura e o significado de um conteúdo. HTML, XML e Markdown pertencem a esse grupo, mas possuem finalidades diferentes.

| Linguagem | Finalidade | Características | Exemplo de aplicação |
|---|---|---|---|
| HTML | Estruturar páginas e conteúdos para a Web | Possui elementos predefinidos e semânticos, interpretados pelos navegadores | Cabeçalhos, menus, artigos, imagens, tabelas e formulários de um site |
| XML | Armazenar e transportar dados de forma estruturada | Permite criar etiquetas próprias e exige uma estrutura bem-formada | Troca de dados entre sistemas, arquivos de configuração e catálogos |
| Markdown | Formatar textos de maneira simples e legível | Utiliza caracteres como `#`, `*` e `-`, podendo ser convertido em HTML | Arquivos README, documentação e anotações técnicas |

### Classificação de exemplos

- `<h1>GameZone</h1>` é **HTML**, pois utiliza um elemento predefinido para representar um título de página.
- `<jogo><titulo>Aventura</titulo></jogo>` é **XML**, pois utiliza etiquetas criadas para representar dados.
- `# GameZone` é **Markdown**, pois utiliza uma cerquilha para marcar um título de forma simplificada.

Neste projeto, o HTML estrutura as páginas do GameZone e o Markdown organiza o README, as notas de estudo e os créditos. O XML não é necessário na implementação, mas sua finalidade foi estudada e comparada.

## 2. O que diferencia um projeto de software de um script ou código isolado?

Um projeto de software é um conjunto organizado de atividades, arquivos e decisões criado para resolver um problema ou atender a uma necessidade específica. Ele geralmente possui objetivos definidos, requisitos, planejamento, documentação, testes, controle de versões e uma forma de entrega ao usuário.

Já um script ou código isolado normalmente é um arquivo menor, criado para executar uma tarefa específica, como renomear arquivos, realizar um cálculo ou automatizar uma ação simples. Ele pode funcionar sem possuir uma estrutura completa de projeto, documentação detalhada ou várias etapas de desenvolvimento.

Portanto, a principal diferença é que um projeto de software possui uma estrutura mais completa e organizada, enquanto um código isolado costuma resolver uma tarefa específica de forma mais simples.

## 3. Ciclo de vida básico de um projeto de software

### Levantamento de requisitos e escopo

Nesta fase, são identificadas as necessidades do cliente e os objetivos do software. A equipe procura entender quais problemas devem ser resolvidos, quais funções o sistema deverá possuir e quais recursos não farão parte do projeto.

O escopo registra os limites do trabalho, ajudando a deixar claro o que será desenvolvido, o prazo esperado e quais serão as responsabilidades de cada pessoa envolvida.

### Desenvolvimento e codificação

Nesta etapa, os desenvolvedores transformam os requisitos definidos anteriormente em código. São criadas as páginas, funcionalidades e demais partes necessárias para o funcionamento do software.

O desenvolvimento deve seguir uma organização para facilitar futuras correções, melhorias e manutenções.

### Testes e qualidade

Nesta fase, o software é verificado para identificar erros, falhas e comportamentos inesperados. Os testes ajudam a confirmar se as funcionalidades estão funcionando de acordo com os requisitos definidos.

Também são avaliados aspectos como facilidade de uso, acessibilidade, desempenho, funcionamento em diferentes dispositivos e qualidade geral do sistema.

### Entrega e implantação

A entrega acontece quando o software finalizado é disponibilizado ao cliente ou aos usuários. A implantação pode envolver a publicação de um site, a instalação de um programa ou a configuração de um serviço.

Após a implantação, ainda podem ser realizados ajustes, correções e acompanhamentos para garantir que o sistema continue funcionando corretamente.

## 4. Por que definir um escopo fechado antes da codificação?

Para a NovaWeb Studio, definir um escopo fechado antes de iniciar a codificação é importante porque deixa claro quais páginas, funções, integrações e serviços serão desenvolvidos.

Sem um escopo bem definido, o cliente pode solicitar várias mudanças ou novas funcionalidades durante o desenvolvimento. Isso pode aumentar o tempo de trabalho, gerar retrabalho, elevar os custos e causar atrasos na entrega.

Um escopo fechado também ajuda a calcular um preço mais justo, organizar o prazo, definir as responsabilidades da empresa e alinhar as expectativas do cliente. Caso o cliente solicite algo que não estava previsto, essa alteração poderá ser analisada separadamente e poderá gerar um novo prazo ou valor.

Portanto, o escopo protege tanto a NovaWeb Studio quanto o cliente, pois reduz mal-entendidos e permite que o projeto seja desenvolvido de maneira mais organizada, profissional e previsível.

## 5. Decisões aplicadas no GameZone

- O tema escolhido foi um blog de conteúdo sobre jogos.
- As três páginas foram planejadas em wireframes antes da codificação.
- O HTML semântico organiza e dá significado ao conteúdo.
- Um único arquivo CSS mantém a identidade visual consistente.
- O JavaScript oferece interações simples sem depender de bibliotecas.
- A navegação, os formulários e os contrastes consideram princípios básicos de acessibilidade.
- O Git registra a evolução e o GitHub funciona como meio de entrega.
