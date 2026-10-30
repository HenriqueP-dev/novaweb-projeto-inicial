# Protótipo — NovaWeb Studio (SA02)

- **Ferramenta:** Figma
- **Link:** https://www.figma.com/design/MZRSpti6V2W8vvmX3fNVGj
- **Telas:** Login, Perfil e Consulta, cada uma em desktop (1440 px) e mobile (390 px).

## Decisões visuais (base para comparar com o código)

### Cores
| Uso | Hex |
|---|---|
| Primária (botão, marca, links ativos) | `#2563EB` |
| Azul escuro (texto sobre fundo claro azul) | `#1E40AF` |
| Fundo claro de destaque (link ativo) | `#EFF6FF` |
| Fundo da página | `#F3F4F6` |
| Cartões e campos | `#FFFFFF` |
| Texto principal | `#111827` |
| Texto secundário | `#4B5563` |
| Placeholder | `#6B7280` |
| Bordas | `#D1D5DB` |
| Cabeçalho da tabela | `#F9FAFB` |
| Status Ativo | fundo `#DCFCE7`, texto `#166534` |
| Status Pendente | fundo `#FEF3C7`, texto `#92400E` |
| Status Inativo | fundo `#E5E7EB`, texto `#374151` |

### Tipografia
Inter (fallback: sans-serif). Título de página 32 px bold (26 px no mobile); título do login 28 px bold; corpo 16 px; rótulos 14 px medium; tabela 15 px; badges 13 px semibold.

### Espaçamentos e formas
- Campos: altura aproximada de 44 px, padding 12 px, borda 1 px, raio 8 px.
- Botão: padding 12 px × 20 px, raio 8 px.
- Cartões: padding 32 px (20 px no mobile), borda 1 px, raio 12 px.
- Cabeçalho: padding 16 px × 80 px (desktop); 16 px (mobile), com navegação em segunda linha.
- Conteúdo: padding 48 px × 80 px (desktop); 24 px × 16 px (mobile).

### Telas
- **Login (desktop):** painel azul de 640 px com nome e frase da marca, e cartão de 400 px centralizado à direita. Campos E-mail e Senha, botão Entrar e dica com os dados de demonstração.
- **Login (mobile):** faixa azul no topo e formulário em largura total.
- **Perfil:** cartão com avatar (iniciais, 96 px), nome, cargo, badge de nível e dados em 2 colunas (1 coluna no mobile).
- **Consulta (desktop):** campo de pesquisa de 400 px, contador de registros e tabela com 5 colunas (Nome, Departamento, Cargo, E-mail, Status).
- **Consulta (mobile):** a tabela vira uma lista de cartões, um por registro.

### Dados de demonstração
Login: `demo@novaweb.com` / `senha123`. Usuário: Marina Duarte, Coordenadora de Projetos. Tabela com 6 colaboradores fictícios.
