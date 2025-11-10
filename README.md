# 🔐 Validador de Senha por Pontuação

Aplicação Azure Static Web Apps para validação de senhas com pontuação de 0 a 10.

## 📁 Estrutura

```
📦 Projeto/
├── 📄 index.html                  ← Interface principal
├── 📁 assets/
│   ├── main.js                    ← Lógica JavaScript
│   └── styles.css                 ← Estilos CSS
├── 📁 api/
│   ├── package.json               ← Dependências da API
│   ├── host.json                  ← Config Azure Functions
│   └── PasswordScore/
│       ├── index.js               ← Handler da função
│       └── function.json          ← Config da função
├── 📁 src/
│   ├── scorer.js                  ← Lógica de pontuação
│   └── handler-azure.js           ← Handler do Azure
├── 📄 package.json                ← Dependências do projeto
└── 📄 staticwebapp.config.json    ← Config do Azure SWA
```

## 🚀 Deploy no Azure

1. Criar Static Web App no Azure Portal
2. Conectar ao seu repositório GitHub
3. Configurar:
   - **App location**: `/`
   - **Api location**: `api`
   - **Output location**: `` (vazio)

## 🌐 URL

https://gentle-beach-0c506101e.3.azurestaticapps.net/

## 🎯 Sistema de Pontuação

- 8+ caracteres: +2 pontos
- Letra maiúscula: +2 pontos
- Letra minúscula: +2 pontos
- Número: +2 pontos
- Símbolo: +2 pontos

**Total: 10 pontos**

