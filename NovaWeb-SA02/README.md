# NovaWeb Studio — Interface inicial (SA02)

Interface front-end demonstrativa de um sistema corporativo fictício: **Login → Perfil → Consulta**. Projeto individual de Henrique Pereira, Situação de Aprendizagem 02 (Desenvolvimento Web, SENAI).

> O login é apenas uma demonstração no navegador. Não há banco de dados, API, cadastro nem autenticação real.

## Como usar
1. Abra `index.html` no navegador (não precisa de instalação nem servidor).
2. Entre com os dados de demonstração: **demo@novaweb.com** / **senha123**.
3. Navegue pelo menu: **Perfil**, **Consulta** e **Sair**.
4. Em **Consulta**, digite no campo de pesquisa para filtrar a tabela (nome, departamento, cargo, e-mail ou status).

## Estrutura
```text
NovaWeb-SA02/
├── index.html            Login
├── pages/
│   ├── perfil.html       Perfil do usuário
│   └── consulta.html     Tabela com pesquisa
├── css/estilo.css        Toda a estilização (CSS externo)
├── js/app.js             Validação do login, "sessão" de demonstração e filtro da tabela
├── assets/images/logo.svg
└── docs/PROTOTIPO.md     Decisões visuais do protótipo
```

## Protótipo
Feito no Figma antes da implementação: https://www.figma.com/design/MZRSpti6V2W8vvmX3fNVGj
As cores, tipografia, espaçamentos e telas (desktop 1440 px e mobile 390 px) estão registrados em [docs/PROTOTIPO.md](docs/PROTOTIPO.md).

### Verificação do protótipo
Conferido pela API do Figma (conta do autor): o arquivo contém 6 frames de topo — Login, Perfil e Consulta, cada um em desktop (1440 px) e mobile (390 px). Os frames foram comparados visualmente com as capturas da implementação, o que levou a um ajuste: o fundo da página passou a ser branco, como no Figma. Não foi verificado se o link abre para quem não é o dono do arquivo; para isso é preciso ativar o compartilhamento no Figma.

## Verificações executadas
Teste automatizado manual (script com Chrome headless, não incluído no repositório), todos aprovados:
- acesso direto a uma página interna sem login redireciona ao login; após "Sair" também;
- login: envio vazio, e-mail inválido, senha vazia e credencial errada mostram mensagem e `aria-invalid`; o foco vai ao campo com erro; login correto abre o Perfil;
- consulta: 6 registros iniciais; a pesquisa ignora maiúsculas, filtra por qualquer coluna, atualiza o contador, mostra mensagem sem resultados e volta a 6 ao limpar;
- mobile (390 px): sem rolagem horizontal.

Não foram testados: leitor de tela, navegação por teclado completa, contraste por ferramenta e navegadores diferentes do Chrome.

## Decisões técnicas
- HTML semântico (`header`, `nav`, `main`, `section`, `table` com `caption` e `th scope`).
- Formulário com `label` associado a cada campo, mensagens de erro em texto (`aria-invalid`, `aria-describedby`, `aria-live`) e foco no primeiro campo com erro.
- Foco visível por teclado em links, botões e campos.
- Responsivo com uma regra `@media (max-width: 768px)`: no mobile a tabela vira uma lista de cartões.
- Sem Bootstrap, Tailwind ou qualquer biblioteca. Sem CSS inline e sem a tag `<style>`.
- A "sessão" usa `sessionStorage` só para impedir o acesso direto às páginas internas; ela não protege dados reais.
- A fonte Inter é usada se estiver instalada; caso contrário, o navegador usa Segoe UI ou Arial (nenhuma fonte é baixada).

## Imagens
| Arquivo | Formato | Dimensões | Tamanho | Uso |
|---|---|---|---|---|
| `assets/images/logo.svg` | SVG (vetorial) | 32 × 32 px (escalável) | 261 bytes | Logo no cabeçalho e ícone da aba |

O protótipo não usa fotografias: o avatar do perfil é feito com as iniciais em CSS, então não há imagens pesadas.
