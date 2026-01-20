# 🚀 Portfólio 3.0 - Alexandre Alves

> Portfólio moderno desenvolvido com **Next.js**, **React** e **TypeScript**, com design dinâmico e animações suaves usando Framer Motion.


## 🛠️ Tecnologias Utilizadas

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**clear

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd Portifolio_3.0
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
npm start
```

## 🌐 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Configuração Automática

1. **Workflow configurado**: O arquivo `.github/workflows/deploy.yml` está configurado para fazer deploy automático sempre que houver push na branch `main`.

2. **Habilitar GitHub Pages**:
   - Vá em **Settings** do repositório no GitHub
   - Navegue até **Pages** no menu lateral
   - Em **Source**, selecione **GitHub Actions**
   - O deploy será feito automaticamente após cada push

3. **URL do site**: Após o deploy, o site estará disponível em:
   ```
   https://alexandre020285.github.io/Portifolio-2.0/
   ```

### Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run build
# A pasta 'out' será criada com os arquivos estáticos
# Faça upload desta pasta para o GitHub Pages
```

## 📁 Estrutura do Projeto

```
Portifolio_3.0/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial (usa todos os componentes)
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Componente de cabeçalho/navegação
│   ├── Home.tsx            # Seção inicial
│   ├── About.tsx           # Seção sobre
│   ├── Skills.tsx          # Seção de habilidades
│   ├── Portfolio.tsx       # Seção de portfólio
│   └── Footer.tsx          # Rodapé/contato
├── public/
│   ├── img/                # Imagens e vídeos dos projetos
│   └── ...                 # Outros assets
└── package.json
```

## 🎨 Paleta de Cores

- **Azul-marinho Profundo**: `#01257D`
- **Azul Elétrico**: `#00FFFF`

## 📝 Funcionalidades

### Seções

1. **🏠 Início**: Apresentação pessoal com animações
2. **👤 Sobre**: Experiência, formação e objetivos
3. **💪 Habilidades**: Frontend, Backend e Ferramentas com barras de progresso animadas
4. **📁 Portfólio**: Projetos desenvolvidos com modais de vídeo
5. **📞 Contato**: Informações de contato e redes sociais

### Recursos Interativos

- ✨ Animações de scroll suave
- 🎬 Modais de vídeo para demos dos projetos
- 📱 Menu mobile responsivo
- 🎯 Efeitos hover dinâmicos
- 🌊 Animações de fundo

## 📞 Contato

- **Email**: alexandre0202dev@gmail.com
- **Telefone**: +55 (21) 99052-0213
- **Localização**: Rio de Janeiro, RJ - Brasil
- **LinkedIn**: [alexandre-oliveira-alves](https://www.linkedin.com/in/alexandre-oliveira-alves/)
- **GitHub**: [alexandre020285](https://github.com/alexandre020285)


