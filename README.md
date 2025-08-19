# 🚀 Portfólio Angular - Diogo Bassalobre

Um portfólio moderno e responsivo desenvolvido com Angular 17+, TypeScript e Tailwind CSS.

## 🌟 Características

- ⚡ **Angular 17+** com Standalone Components
- 🎨 **Tailwind CSS** para estilização responsiva
- 📱 **Design Responsivo** para todos os dispositivos
- 🔥 **Lazy Loading** para otimização de performance
- 📝 **Formulários Reativos** com validação
- 🎯 **SEO Otimizado** com meta tags
- ♿ **Acessível** seguindo boas práticas
- 🚀 **Deploy Automático** no GitHub Pages

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Angular 17+, TypeScript, Tailwind CSS
- **Ícones**: Lucide Angular
- **Formulários**: Angular Reactive Forms
- **Roteamento**: Angular Router
- **Build**: Angular CLI
- **Deploy**: GitHub Pages com GitHub Actions

## 📦 Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/angular-portfolio.git
cd angular-portfolio
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Execute o projeto localmente**
\`\`\`bash
npm start
\`\`\`

4. **Acesse no navegador**
\`\`\`
http://localhost:4200
\`\`\`

## 🚀 Deploy no GitHub Pages

### Configuração Automática (Recomendado)

1. **Fork ou clone este repositório**

2. **Configure o GitHub Pages**
   - Vá para Settings > Pages
   - Source: GitHub Actions
   - O deploy será automático a cada push na branch `main`

3. **Acesse seu site**
   - URL: `https://seu-usuario.github.io/angular-portfolio/`

### Deploy Manual

\`\`\`bash
# Build para produção
npm run build:prod

# Deploy manual (opcional)
npm run deploy
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── navigation/      # Navegação principal
│   │   └── footer/          # Rodapé
│   ├── pages/               # Páginas da aplicação
│   │   ├── home/            # Página inicial
│   │   ├── about/           # Sobre mim
│   │   ├── skills/          # Habilidades
│   │   ├── projects/        # Projetos
│   │   └── contact/         # Contato
│   ├── app.component.ts     # Componente raiz
│   └── app.routes.ts        # Configuração de rotas
├── assets/                  # Recursos estáticos
├── styles.css              # Estilos globais
└── index.html              # HTML principal
\`\`\`

## 🎨 Personalização

### Cores e Tema
Edite o arquivo `tailwind.config.js` para personalizar as cores:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6', // Azul principal
        600: '#2563eb',
        // ...
      }
    }
  }
}
\`\`\`

### Informações Pessoais
Atualize os dados pessoais nos componentes:

1. **Informações básicas**: `src/app/pages/home/home.component.ts`
2. **Sobre**: `src/app/pages/about/about.component.ts`
3. **Habilidades**: `src/app/pages/skills/skills.component.ts`
4. **Projetos**: `src/app/pages/projects/projects.component.ts`
5. **Contato**: `src/app/pages/contact/contact.component.ts`

### SEO
Atualize as meta tags em `src/index.html`:

\`\`\`html
<title>Seu Nome - Desenvolvedor Full Stack</title>
<meta name="description" content="Sua descrição personalizada">
<meta property="og:title" content="Seu Nome - Desenvolvedor Full Stack">
\`\`\`

## 📱 Páginas Incluídas

- **🏠 Home**: Apresentação, hero section e call-to-actions
- **👤 Sobre**: História pessoal, experiência e formação
- **⚡ Habilidades**: Skills técnicas com barras de progresso
- **💼 Projetos**: Portfólio com filtros e projetos destacados
- **📧 Contato**: Formulário funcional e informações de contato

## 🔧 Scripts Disponíveis

\`\`\`bash
npm start          # Servidor de desenvolvimento
npm run build      # Build para produção
npm run build:prod # Build otimizado para GitHub Pages
npm test           # Executar testes
npm run lint       # Verificar código
npm run deploy     # Deploy manual para GitHub Pages
\`\`\`

## 🌐 Demo

Veja o portfólio em ação: [https://seu-usuario.github.io/angular-portfolio/](https://seu-usuario.github.io/angular-portfolio/)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

**Diogo Bassalobre**
- 📧 Email: diogo.bassalobre@gmail.com
- 💼 LinkedIn: [linkedin.com/in/diogo-bassalobre-a31a29272](https://linkedin.com/in/diogo-bassalobre-a31a29272)
- 🐱 GitHub: [github.com/diogobssdev](https://github.com/diogobssdev)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
