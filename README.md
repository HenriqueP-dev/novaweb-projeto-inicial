# Projeto Nova-Web — Game Zone & Especificações de UI/UX

## 📌 Visão Geral do Repositório

Este repositório faz parte do projeto **Nova-Web**, desenvolvido no âmbito do curso Técnico em Desenvolvimento de Sistemas. Ele contempla a primeira aplicação prática (o blog educacional **Game Zone**) e a documentação técnica de UI/UX referente às especificações de interface para o módulo de Login, Perfil do Usuário e Tabela de Consulta de Dados.

---

## 🎮 Game Zone (Situação de Aprendizagem 01)

### Descrição do Projeto
O **Game Zone** é um blog educacional sobre jogos desenvolvido individualmente por Henrique Pereira para a Situação de Aprendizagem 01. O projeto foi construído com HTML5 e CSS3 estático e apresenta conteúdos sobre tecnologia, jogos independentes, competições digitais, acessibilidade e cuidados com equipamentos.

### Como Acessar
1. Baixe ou clone este repositório.
2. Abra o arquivo `Gamezone/index.html` em qualquer navegador web.
3. Utilize o menu de navegação superior para navegar entre as páginas Início, Posts e Contato.

*O projeto é estático e não exige instalação, servidor ou banco de dados.*

### Páginas do Blog
- **Início (`index.html`):** Apresentação do blog, imagem principal, destaques e lista de categorias.
- **Posts (`pages/posts.html`):** Três publicações sobre jogos e tecnologia.
- **Contato (`pages/contato.html`):** Informações de contato e formulário demonstrativo.

### Requisitos Atendidos
- Três páginas HTML interligadas via menu de navegação funcional.
- Estrutura semântica do HTML5 e estilização CSS3 externa.
- Utilização de imagens com textos alternativos (`alt`), listas e links.
- Formulário com rótulos (`labels`) e campos obrigatórios.
- Organização de arquivos em pastas e controle de versão via Git/GitHub.
- Wireframes armazenados na pasta `Gamezone/docs`.

---

## 🏢 NovaWeb Studio (Situação de Aprendizagem 02)

Interface demonstrativa com **Login, Perfil e Consulta** (tabela com pesquisa), responsiva e feita a partir de um protótipo no Figma.
- Projeto: [`NovaWeb-SA02/`](NovaWeb-SA02/) — abra `NovaWeb-SA02/index.html` (login de demonstração: `demo@novaweb.com` / `senha123`).
- Documentação: [`NovaWeb-SA02/README.md`](NovaWeb-SA02/README.md)
- Protótipo: https://www.figma.com/design/MZRSpti6V2W8vvmX3fNVGj

---

## 🎨 Especificações de UI/UX — Tela de Login (Aula 8)

Esta seção documenta o levantamento técnico e as especificações de usabilidade, padrões de interface e acessibilidade para o protótipo da Tela de Login do projeto.

### 1. Conceitos de Usabilidade em Formulários

#### **Labels vs. Placeholders**
- **Por que não utilizar o placeholder como substituto da label?**
  - **Perda de Contexto Visual:** Quando o usuário clica ou começa a digitar no campo de entrada, o texto do *placeholder* desaparece. Caso o usuário se distraia ou precise revisar as informações preenchidas, ele perde a referência do que aquele campo exige.
  - **Acessibilidade Prejudicada:** Leitores de tela costumam ignorar *placeholders* ou tratá-los com menor prioridade, dificultando a navegação de pessoas com deficiência visual.
  - **Problemas de Contraste e Legibilidade:** O texto do *placeholder* é exibido em cinza claro para indicar que é um texto temporário. Isso frequentemente viola as diretrizes de contraste mínimo da WCAG.
  - **Sensação de Campo Preenchido:** Usuários podem confundir o *placeholder* com um campo já preenchido por padrão e pular o preenchimento do formulário.

> **Boa Prática:** A *label* deve ser permanente e posicionada acima ou ao lado do campo de entrada. O *placeholder* deve ser utilizado apenas para fornecer exemplos curtos de formato (ex: `exemplo@empresa.com`).

---

#### **Hierarquia Visual nos Botões de Ação**
A hierarquia visual direciona a atenção do usuário para a ação principal desejada (*Call to Action* - CTA), reduzindo a carga cognitiva e evitando cliques acidentais.

- **Botão Primário (Primary Button):**
  - **Função:** Ação principal da tela (ex: *"Entrar"*).
  - **Estilo:** Preenchimento de cor sólida de alto contraste, tipografia em negrito e maior destaque visual na página. Há apenas **um** botão primário por fluxo principal.
- **Botão Secundário (Secondary / Outline Button):**
  - **Função:** Ações alternativas ou de menor prioridade (ex: *"Criar Conta"*, *"Cancelar"* ou *"Voltar"*).
  - **Estilo:** Estilo de contorno (*outline*) ou sem preenchimento de fundo, mantendo a borda e o texto na cor primária ou neutra.
- **Links Textuais / Terciários:**
  - **Função:** Ações de suporte de baixíssimo impacto visual (ex: *"Esqueci minha senha"*).
  - **Estilo:** Texto sublinhado ou colorido, sem bordas ou backgrounds.

---

### 2. Estados de Validação dos Campos de Entrada (Input States)

Para garantir um *feedback* claro e imediato durante a interação do usuário, os campos de entrada (*inputs*) implementam os seguintes estados visuais:

| Estado | Descrição Visual e Diretrizes |
| :--- | :--- |
| **Default (Padrão)** | Borda em tom neutro (ex: `#D1D5DB`), fundo claro/branco, *label* visível em cor neutra escura e *placeholder* em tom suavizado. |
| **Focus (Foco)** | Destaque visual ativado quando o campo é selecionado pelo usuário. Utiliza um anel de foco (*focus ring* ou *outline*) na cor primária da marca (ex: Azul `#2563EB`) para indicar navegação ativa. |
| **Error (Erro)** | Borda e rótulo destacados na cor vermelha (ex: `#DC2626`). Acompanhado obrigatoriamente por uma **mensagem explicativa clara abaixo do campo** (ex: *"E-mail inválido"* ou *"Campo obrigatório"*), sem depender apenas da cor. |
| **Success (Sucesso)** | Borda em tom verde de validação (ex: `#16A34A`) acompanhada de um ícone indicador (*checkmark*) à direita do campo, sinalizando preenchimento correto das diretrizes. |
| **Disabled (Desabilitado)** | Fundo em cinza claro, texto e bordas com contraste e opacidade reduzidos (ex: 50%). O ponteiro do mouse altera para `not-allowed` e o campo deixa de responder a cliques ou foco via teclado. |

---

### 3. Padrões de Acessibilidade (Accessibility & Inclusion)

A interface foi projetada seguindo as diretrizes internacionais de acessibilidade **WCAG 2.1 (Web Content Accessibility Guidelines)** no nível **AA**:

1. **Contraste Mínimo de Cor (WCAG 1.4.3):**
   - Textos normais e rótulos (*labels*) mantêm uma razão de contraste mínima de **4.5:1** em relação ao fundo.
   - Componentes de interface e botões grandes possuem taxa de contraste mínima de **3:1**.
2. **Navegação por Teclado (`Tab` & `Enter`):**
   - Todos os elementos interativos (*inputs*, botões, links e *checkboxes*) possuem ordem lógica no DOM para navegação intuitiva através da tecla `Tab`.
   - O indicador de foco (*focus ring*) permanece claramente visível durante a navegação via teclado.
3. **Suporte a Leitores de Tela (*Screen Readers*):**
   - Cada campo de entrada possui sua correspondente tag `<label>` devidamente vinculada via atributo `for` / `id`.
   - Mensagens de erro contêm atributos ARIA (`aria-invalid="true"` e `aria-describedby`) para garantir que sejam anunciadas imediatamente por softwares de leitura de tela.

---

## 📊 Especificações de UI/UX — Aula 09: UX de Tabelas de Dados e Telas de Perfil

### 1. Pesquisa Teórica - UX para Tabelas Corporativas

- **Alinhamento de Dados:**
  - **Textos:** Devem ser alinhados à *esquerda* para garantir uma leitura natural e fluida.
  - **Números e Valores Monetários:** Devem ser alinhados à *direita* para facilitar a comparação rápida de grandezas numéricas na mesma coluna.
  - **Status e Ações Rápidas:** Podem ser centralizados para um melhor equilíbrio e alinhamento visual no centro da célula.
- **Filtros e Busca:**
  - O campo de pesquisa principal deve ficar posicionado no topo superior esquerdo ou direito acima da tabela para rápido acesso visual.
  - Filtros avançados devem ser agrupados ou dispostos em menus suspensos (*dropdowns*) para economizar espaço útil de tela.
- **Hierarquia Visual:**
  - Utilização de cabeçalhos fixos (*sticky header*) para tabelas extensas, garantindo que o usuário não perca a referência do dado ao rolar a página.
  - Alternância de cores em linhas (*zebra striping*) ou bordas sutis para facilitar a leitura horizontal de dados complexos.

### 2. Especificação do Protótipo (Figma)

- **Link do Projeto no Figma:** [Cole o link do seu projeto aqui]
- **Telas Desenvolvidas:**
  1. *Perfil de Usuário:* Exibição de avatar, dados pessoais, formulário de edição e nível de permissão.
  2. *Área de Consulta (Tabela):* Lista de usuários/clientes com busca, ordenação, paginação de 5 registros por página e badges de status (Ativo/Pendente/Inativo).

---

## 📁 Estrutura de Arquivos

```text
novaweb-projeto-inicial/
├── Gamezone/
│   ├── assets/
│   │   └── images/
│   ├── css/
│   │   └── estilo.css
│   ├── docs/
│   │   ├── Home - Game Zone.png
│   │   ├── pagina posts - Game Zone.png
│   │   └── wireframe-sobre-contato.png
│   ├── pages/
│   │   ├── contato.html
│   │   └── posts.html
│   ├── CREDITOS_ASSETS.md
│   └── index.html
└── README.md