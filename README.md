 Twitwer

Projeto front-end (React + Vite) que replica a interface do Twitter.

## Requisitos
- Node.js 16+ (recomendado 18+)
- npm (ou pnpm/yarn, se preferir)

## Instalação
1. Clone ou copie o projeto para sua máquina.
2. No diretório do projeto, instale as dependências:

```bash
npm install
```

## Executar em modo desenvolvimento
1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Acesse no navegador:
- http://localhost:5173/

### Dica (PowerShell no Windows)
Se aparecer erro de política de execução ao rodar `npm` pelo PowerShell, você pode:
- Usar `npm.cmd run dev`, ou
- Ajustar a política de execução (requer permissões de administrador):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Build de produção
Gera os arquivos otimizados para produção:

```bash
npm run build
```

Pré-visualizar o build localmente:

```bash
npm run preview
```

## Estrutura principal
- `src/` código-fonte (componentes, páginas e estilos)
- `src/components/Sidebar.tsx` Sidebar e logo
- `src/pages/layouts/Default.tsx` Layout base

## Scripts disponíveis
- `npm run dev` inicia o servidor Vite
- `npm run build` compila TypeScript e gera o build
- `npm run preview` serve os arquivos gerados em `dist/`

