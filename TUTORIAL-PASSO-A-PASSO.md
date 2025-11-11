# 📘 TUTORIAL PASSO A PASSO - Validador de Senha no Azure

## 🎯 O QUE VAMOS FAZER

Criar uma aplicação web que valida senhas e dá uma pontuação de 0 a 10, hospedada gratuitamente no Azure.

---

# PARTE 1: PREPARAÇÃO (30 minutos)

## PASSO 1: Criar Conta no GitHub

**O que é:** GitHub é onde vamos guardar nosso código.

**Como fazer:**

1. Abra o navegador
2. Acesse: https://github.com/signup
3. Preencha:
   - Email: seu-email@exemplo.com
   - Senha: crie uma senha forte
   - Username: escolha um nome (ex: ViniciusThi)
4. Clique em "Create account"
5. Verifique seu email
6. Clique no link de verificação
7. Pronto! Você tem uma conta no GitHub

---

## PASSO 2: Criar Conta no Azure

**O que é:** Azure é a nuvem da Microsoft onde vamos hospedar o site.

**Como fazer:**

1. Acesse: https://azure.microsoft.com/free/
2. Clique em "Iniciar gratuitamente" ou "Start free"
3. Faça login com sua conta Microsoft (ou crie uma)
4. Preencha seus dados pessoais
5. Adicione um cartão de crédito (NÃO será cobrado, é só verificação)
6. Complete a verificação de identidade
7. Aguarde aprovação (pode levar alguns minutos)
8. Pronto! Você tem acesso ao Portal Azure

---

## PASSO 3: Instalar Git no seu Computador

**O que é:** Git é um programa para controlar versões do código.

**Como fazer no Windows:**

1. Acesse: https://git-scm.com/download/win
2. Download automaticamente inicia
3. Abra o instalador baixado
4. Clique "Next" em todas as telas (configurações padrão estão OK)
5. Clique "Install"
6. Aguarde instalação
7. Clique "Finish"

**Verificar se funcionou:**

1. Abra o **Prompt de Comando** ou **PowerShell**:
   - Pressione `Windows + R`
   - Digite `cmd`
   - Enter
2. Digite: `git --version`
3. Deve aparecer algo como: `git version 2.43.0`
4. Se aparecer, está instalado corretamente!

---

# PARTE 2: CRIAR A PASTA DO PROJETO (5 minutos)

## PASSO 4: Criar Pasta do Projeto

1. Abra o **Windows Explorer** (pasta amarela na barra de tarefas)
2. Navegue até onde quer criar o projeto (ex: `Desktop`)
3. Clique com botão direito → **Novo** → **Pasta**
4. Nome da pasta: `ValidadorSenha`
5. Enter

**Resultado:** Você tem uma pasta vazia chamada `ValidadorSenha`

---

# PARTE 3: CRIAR OS ARQUIVOS DO PROJETO (30 minutos)

## PASSO 5: Criar Estrutura de Pastas

Dentro da pasta `ValidadorSenha`, crie esta estrutura:

```
ValidadorSenha/
├── assets/
└── api/
    └── PasswordScore/
```

**Como criar:**

1. Entre na pasta `ValidadorSenha`
2. Botão direito → Novo → Pasta → Nome: `assets`
3. Botão direito → Novo → Pasta → Nome: `api`
4. Entre na pasta `api`
5. Botão direito → Novo → Pasta → Nome: `PasswordScore`

---

## PASSO 6: Criar Arquivo `index.html`

**Localização:** Na raiz da pasta `ValidadorSenha`

**Como criar:**

1. Botão direito na pasta `ValidadorSenha`
2. Novo → Documento de Texto
3. Nome: `index.html` (apague o `.txt` se aparecer)
4. Abra o arquivo com **Bloco de Notas** ou **VSCode**
5. Cole EXATAMENTE este código:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador de Senha por Pontuação</title>
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <h1>🔐 Validador de Senha</h1>
            <p class="subtitle">Digite uma senha para verificar sua força</p>
            
            <div class="input-group">
                <input 
                    type="password" 
                    id="passwordInput" 
                    placeholder="Digite sua senha aqui..."
                    autocomplete="off"
                />
                <button id="togglePassword" class="toggle-btn" title="Mostrar/Ocultar senha">
                    👁️
                </button>
            </div>

            <div id="scoreContainer" class="score-container hidden">
                <div class="score-bar-wrapper">
                    <div id="scoreBar" class="score-bar"></div>
                </div>
                <div class="score-text">
                    <span id="scoreLabel">Pontuação:</span>
                    <span id="scoreValue">0/10</span>
                </div>
                <div id="strengthLabel" class="strength-label">Muito Fraca</div>
            </div>

            <div id="detailsContainer" class="details-container hidden">
                <h3>Requisitos da Senha:</h3>
                <ul class="requirements-list">
                    <li id="lengthCheck" class="requirement">
                        <span class="icon">⭕</span>
                        <span>Mínimo de 8 caracteres</span>
                    </li>
                    <li id="upperCheck" class="requirement">
                        <span class="icon">⭕</span>
                        <span>Letra maiúscula (A-Z)</span>
                    </li>
                    <li id="lowerCheck" class="requirement">
                        <span class="icon">⭕</span>
                        <span>Letra minúscula (a-z)</span>
                    </li>
                    <li id="digitCheck" class="requirement">
                        <span class="icon">⭕</span>
                        <span>Número (0-9)</span>
                    </li>
                    <li id="symbolCheck" class="requirement">
                        <span class="icon">⭕</span>
                        <span>Símbolo (!@#$%^&*)</span>
                    </li>
                </ul>
            </div>

            <div id="errorMessage" class="error-message hidden"></div>
        </div>

        <footer class="footer">
            <p>Desenvolvido com Azure Static Web Apps 🚀</p>
        </footer>
    </div>

    <script src="assets/main.js"></script>
</body>
</html>
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Define a estrutura visual da página
- Cria o campo de senha
- Cria áreas para mostrar a pontuação
- Liga os arquivos CSS e JavaScript

---

## PASSO 7: Criar Arquivo `assets/styles.css`

**Localização:** Dentro da pasta `assets`

**Como criar:**

1. Entre na pasta `assets`
2. Botão direito → Novo → Documento de Texto
3. Nome: `styles.css`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 500px;
}

.card {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
}

.card.fade-in {
    opacity: 1;
    transform: translateY(0);
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 10px;
    font-size: 2em;
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
    font-size: 0.95em;
}

.input-group {
    position: relative;
    margin-bottom: 25px;
}

#passwordInput {
    width: 100%;
    padding: 15px;
    padding-right: 50px;
    font-size: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.3s;
}

#passwordInput:focus {
    border-color: #667eea;
}

.toggle-btn {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s;
}

.toggle-btn:hover {
    transform: translateY(-50%) scale(1.1);
}

.score-container {
    margin-bottom: 25px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.score-bar-wrapper {
    width: 100%;
    height: 20px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
}

.score-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 0.5s ease, background-color 0.3s ease;
}

.score-bar.very-weak {
    background: linear-gradient(90deg, #ff4444, #cc0000);
}

.score-bar.weak {
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
}

.score-bar.moderate {
    background: linear-gradient(90deg, #feca57, #ff9ff3);
}

.score-bar.strong {
    background: linear-gradient(90deg, #48dbfb, #0abde3);
}

.score-bar.very-strong {
    background: linear-gradient(90deg, #1dd1a1, #10ac84);
}

.score-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: 600;
    color: #333;
}

.strength-label {
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    padding: 8px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.strength-label.very-weak {
    color: #cc0000;
    background: #ffe0e0;
}

.strength-label.weak {
    color: #ee5a24;
    background: #ffe5cc;
}

.strength-label.moderate {
    color: #f39c12;
    background: #fff3cd;
}

.strength-label.strong {
    color: #0abde3;
    background: #d1f2ff;
}

.strength-label.very-strong {
    color: #10ac84;
    background: #d4f1e8;
}

.details-container {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    margin-bottom: 20px;
}

.details-container h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.requirements-list {
    list-style: none;
}

.requirement {
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.requirement .icon {
    font-size: 20px;
    min-width: 24px;
}

.requirement.met {
    background: #d4f1e8;
    color: #10ac84;
}

.requirement.not-met {
    background: #ffe0e0;
    color: #cc0000;
}

.error-message {
    padding: 15px;
    background: #ffe0e0;
    color: #cc0000;
    border-radius: 10px;
    text-align: center;
    margin-top: 15px;
}

.hidden {
    display: none;
}

.footer {
    text-align: center;
    margin-top: 30px;
    color: white;
    font-size: 0.9em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Animações */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsividade */
@media (max-width: 600px) {
    .card {
        padding: 25px;
    }

    h1 {
        font-size: 1.5em;
    }

    .subtitle {
        font-size: 0.85em;
    }
}
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Define cores (fundo roxo, card branco)
- Cria barra de progresso animada com cores por nível
- Torna o site bonito e responsivo (funciona em celular)
- Animações suaves

---

## PASSO 8: Criar Arquivo `assets/main.js`

**Localização:** Dentro da pasta `assets`

**Como criar:**

1. Na pasta `assets`
2. Botão direito → Novo → Documento de Texto
3. Nome: `main.js`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```javascript
// Elementos do DOM
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const scoreContainer = document.getElementById('scoreContainer');
const detailsContainer = document.getElementById('detailsContainer');
const scoreBar = document.getElementById('scoreBar');
const scoreValue = document.getElementById('scoreValue');
const strengthLabel = document.getElementById('strengthLabel');
const errorMessage = document.getElementById('errorMessage');

// Elementos dos requisitos
const lengthCheck = document.getElementById('lengthCheck');
const upperCheck = document.getElementById('upperCheck');
const lowerCheck = document.getElementById('lowerCheck');
const digitCheck = document.getElementById('digitCheck');
const symbolCheck = document.getElementById('symbolCheck');

// Debounce para evitar muitas chamadas à API
let debounceTimer;

// Toggle para mostrar/ocultar senha
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Event listener para input de senha
passwordInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const password = e.target.value;

    if (password.length === 0) {
        hideResults();
        return;
    }

    debounceTimer = setTimeout(() => {
        validatePassword(password);
    }, 300);
});

// Função para ocultar resultados
function hideResults() {
    scoreContainer.classList.add('hidden');
    detailsContainer.classList.add('hidden');
    errorMessage.classList.add('hidden');
}

// Função para validar senha
async function validatePassword(password) {
    try {
        const response = await fetch('/api/PasswordScore', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password })
        });

        if (!response.ok) {
            throw new Error('Erro ao validar senha');
        }

        const result = await response.json();
        displayResults(result);
    } catch (error) {
        console.error('Erro:', error);
        showError('Erro ao validar senha. Tente novamente.');
    }
}

// Função para exibir resultados
function displayResults(result) {
    const { score, details } = result;

    // Mostrar containers
    scoreContainer.classList.remove('hidden');
    detailsContainer.classList.remove('hidden');
    errorMessage.classList.add('hidden');

    // Atualizar pontuação
    scoreValue.textContent = `${score}/10`;
    
    // Atualizar barra de progresso
    const percentage = (score / 10) * 100;
    scoreBar.style.width = `${percentage}%`;

    // Determinar força e cor
    let strength, colorClass;
    if (score <= 3) {
        strength = 'Muito Fraca';
        colorClass = 'very-weak';
    } else if (score <= 5) {
        strength = 'Fraca';
        colorClass = 'weak';
    } else if (score <= 7) {
        strength = 'Moderada';
        colorClass = 'moderate';
    } else if (score <= 9) {
        strength = 'Forte';
        colorClass = 'strong';
    } else {
        strength = 'Muito Forte';
        colorClass = 'very-strong';
    }

    strengthLabel.textContent = strength;
    
    // Remover classes antigas e adicionar nova
    scoreBar.className = 'score-bar ' + colorClass;
    strengthLabel.className = 'strength-label ' + colorClass;

    // Atualizar requisitos
    updateRequirement(lengthCheck, details.length >= 8);
    updateRequirement(upperCheck, details.hasUpper);
    updateRequirement(lowerCheck, details.hasLower);
    updateRequirement(digitCheck, details.hasDigit);
    updateRequirement(symbolCheck, details.hasSymbol);
}

// Função para atualizar requisito individual
function updateRequirement(element, isMet) {
    const icon = element.querySelector('.icon');
    if (isMet) {
        element.classList.add('met');
        element.classList.remove('not-met');
        icon.textContent = '✅';
    } else {
        element.classList.add('not-met');
        element.classList.remove('met');
        icon.textContent = '❌';
    }
}

// Função para mostrar erro
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    hideResults();
}

// Animação de entrada
window.addEventListener('load', () => {
    document.querySelector('.card').classList.add('fade-in');
});
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Detecta quando você digita no campo de senha
- Aguarda 300ms (debounce) para não fazer muitas chamadas
- Envia a senha para a API
- Recebe pontuação de volta
- Atualiza a tela com a pontuação e cores
- Mostra checks verdes/vermelhos dos requisitos

---

## PASSO 9: Criar Arquivo `api/PasswordScore/index.js`

**Localização:** Dentro de `api/PasswordScore/`

**Como criar:**

1. Entre na pasta `api/PasswordScore/`
2. Botão direito → Novo → Documento de Texto
3. Nome: `index.js`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```javascript
export default async function (context, req) {
  try {
    const { password } = req.body || {};
    const result = scorePassword(password || "");
    context.res = { 
      status: 200, 
      headers: { "Content-Type": "application/json" }, 
      body: result 
    };
  } catch (error) {
    context.res = { 
      status: 400, 
      body: { error: "invalid input" } 
    };
  }
}

function scorePassword(pwd = "") {
  const details = {
    length: pwd.length,
    hasUpper: /[A-Z]/.test(pwd),
    hasLower: /[a-z]/.test(pwd),
    hasDigit: /\d/.test(pwd),
    hasSymbol: /[^A-Za-z0-9]/.test(pwd)
  };
  let score = 0;
  if (pwd.length >= 8) score += 2;
  else if (pwd.length >= 6) score += 1;
  if (details.hasUpper) score += 2;
  if (details.hasLower) score += 2;
  if (details.hasDigit) score += 2;
  if (details.hasSymbol) score += 2;
  if (score > 10) score = 10;
  return { score, details };
}
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Recebe a senha enviada pelo JavaScript
- Testa 5 requisitos usando expressões regulares (regex):
  - Comprimento (8+ caracteres = +2, 6-7 = +1)
  - Maiúsculas (A-Z = +2)
  - Minúsculas (a-z = +2)
  - Números (0-9 = +2)
  - Símbolos (!@#$ = +2)
- Calcula pontuação total (máximo 10)
- Retorna resultado em JSON

---

## PASSO 10: Criar Arquivo `api/PasswordScore/function.json`

**Localização:** Dentro de `api/PasswordScore/`

**Como criar:**

1. Na pasta `api/PasswordScore/`
2. Botão direito → Novo → Documento de Texto
3. Nome: `function.json`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```json
{
  "bindings": [
    { "authLevel": "anonymous", "type": "httpTrigger", "direction": "in", "name": "req", "methods": ["post"] },
    { "type": "http", "direction": "out", "name": "res" }
  ]
}
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Configura a Azure Function para aceitar requisições HTTP POST
- Define que qualquer um pode acessar (anonymous)
- Diz que recebe (in) requisição e envia (out) resposta

---

## PASSO 11: Criar Arquivo `api/host.json`

**Localização:** Dentro da pasta `api/` (NÃO dentro de PasswordScore)

**Como criar:**

1. Volte para a pasta `api/`
2. Botão direito → Novo → Documento de Texto
3. Nome: `host.json`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```json
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "maxTelemetryItemsPerSecond": 20
      }
    }
  },
  "extensionBundle": {
    "id": "Microsoft.Azure.Functions.ExtensionBundle",
    "version": "[3.*, 4.0.0)"
  }
}
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Configura a versão do Azure Functions (2.0)
- Ativa logging (registros)
- Define extensões automáticas

---

## PASSO 12: Criar Arquivo `api/package.json`

**Localização:** Dentro da pasta `api/`

**Como criar:**

1. Na pasta `api/`
2. Botão direito → Novo → Documento de Texto
3. Nome: `package.json`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```json
{
  "name": "api",
  "version": "1.0.0",
  "description": "Azure Functions API para validação de senha",
  "type": "module",
  "scripts": {
    "start": "func start",
    "test": "echo 'No tests yet'"
  },
  "dependencies": {},
  "devDependencies": {
    "azure-functions-core-tools": "^4.0.0"
  }
}
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Define que usamos módulos ES6 (type: module)
- Lista dependências (nenhuma neste caso)
- Configura comandos de inicialização

---

## PASSO 13: Criar Arquivo `staticwebapp.config.json`

**Localização:** Na raiz da pasta `ValidadorSenha` (junto com index.html)

**Como criar:**

1. Volte para a pasta raiz `ValidadorSenha`
2. Botão direito → Novo → Documento de Texto
3. Nome: `staticwebapp.config.json`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```json
{
  "routes": [
    {
      "route": "/api/*",
      "allowedRoles": ["anonymous"]
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html"
  },
  "globalHeaders": {
    "content-security-policy": "default-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
  },
  "mimeTypes": {
    ".json": "application/json",
    ".js": "text/javascript",
    ".css": "text/css"
  }
}
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Configura rotas da API
- Define que API é pública (anonymous)
- Configura fallback para index.html
- Define headers de segurança
- Especifica tipos de arquivo

---

## PASSO 14: Criar Arquivo `README.md`

**Localização:** Na raiz da pasta `ValidadorSenha`

**Como criar:**

1. Na pasta raiz `ValidadorSenha`
2. Botão direito → Novo → Documento de Texto
3. Nome: `README.md`
4. Abra o arquivo
5. Cole EXATAMENTE este código:

```markdown
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
│   ├── host.json                  ← Config Azure Functions
│   └── PasswordScore/
│       ├── index.js               ← Handler da função
│       └── function.json          ← Config da função
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
```

6. Salve o arquivo (`Ctrl + S`)

**O que este arquivo faz:**
- Documenta o projeto
- Explica estrutura de pastas
- Mostra sistema de pontuação

---

## ✅ VERIFICAÇÃO DA ESTRUTURA

Sua pasta `ValidadorSenha` deve estar EXATAMENTE assim:

```
ValidadorSenha/
├── index.html
├── staticwebapp.config.json
├── README.md
├── assets/
│   ├── main.js
│   └── styles.css
└── api/
    ├── host.json
    ├── package.json
    └── PasswordScore/
        ├── index.js
        └── function.json
```

**Total: 9 arquivos**

---

# PARTE 4: ENVIAR PARA O GITHUB (15 minutos)

## PASSO 15: Abrir Terminal na Pasta do Projeto

**Opção 1 - Usando Windows Explorer:**

1. Abra a pasta `ValidadorSenha`
2. Na barra de endereços do Explorer, clique e digite: `cmd`
3. Pressione Enter
4. Uma janela preta (Prompt de Comando) abre

**Opção 2 - Usando PowerShell:**

1. Abra a pasta `ValidadorSenha`
2. Segure `Shift` e clique com botão direito em espaço vazio
3. Clique em "Abrir janela do PowerShell aqui"

---

## PASSO 16: Inicializar Git

**No terminal que abriu**, digite cada comando e pressione Enter:

```bash
git init
```

**O que acontece:**
- Mensagem aparece: `Initialized empty Git repository in ...`
- Uma pasta oculta `.git` é criada
- Agora sua pasta é um repositório Git

---

## PASSO 17: Adicionar Todos os Arquivos

Digite:

```bash
git add .
```

**O que acontece:**
- Todos os 9 arquivos são preparados para o commit
- Nada aparece na tela (é normal)

---

## PASSO 18: Fazer o Primeiro Commit

Digite:

```bash
git commit -m "Adiciona Validador de Senha por Pontuacao - Azure Static Web Apps"
```

**O que acontece:**
- Mensagem aparece mostrando arquivos commitados
- Algo como: `12 files changed, 645 insertions(+)`
- Seu código agora tem uma "foto" salva

---

## PASSO 19: Renomear Branch para main

Digite:

```bash
git branch -M main
```

**O que acontece:**
- Branch é renomeada de `master` para `main`
- Nada aparece na tela (é normal)

---

## PASSO 20: Criar Repositório no GitHub

**Atenção:** Saia do terminal por um momento e vá para o navegador.

1. Abra: https://github.com
2. Faça login (se não estiver)
3. Clique no **+** no canto superior direito
4. Clique em **"New repository"**
5. Preencha:
   - **Repository name:** `ValidadorSenha` (ou outro nome)
   - **Description:** Validador de Senha por Pontuação - Azure
   - Marque: **Public** (para o Azure acessar grátis)
   - **NÃO** marque "Add a README file"
   - **NÃO** marque ".gitignore"
   - **NÃO** marque "Choose a license"
6. Clique em **"Create repository"**

**Resultado:** Página abre mostrando comandos

---

## PASSO 21: Copiar URL do Repositório

Na página que abriu:

1. Veja a seção "…or push an existing repository from the command line"
2. Copie a URL que aparece (algo como):
   ```
   https://github.com/SEU-USUARIO/ValidadorSenha.git
   ```

---

## PASSO 22: Conectar Local ao GitHub

**Volte para o terminal** e digite (substitua pela SUA URL):

```bash
git remote add origin https://github.com/SEU-USUARIO/ValidadorSenha.git
```

**Exemplo real:**
```bash
git remote add origin https://github.com/ViniciusThi/ValidadorSenha.git
```

**O que acontece:**
- Nada aparece na tela (é normal)
- Seu repositório local agora conhece o remoto

---

## PASSO 23: Enviar Código para o GitHub

Digite:

```bash
git push -u origin main
```

**O que acontece:**
- Uma janela pode aparecer pedindo login no GitHub (faça login)
- Terminal mostra progresso do upload
- Mensagem final: `Branch 'main' set up to track 'origin/main'`
- **SUCESSO!** Código está no GitHub

---

## PASSO 24: Verificar no GitHub

1. Volte para o navegador
2. Atualize a página do repositório (F5)
3. Você deve ver todos os 9 arquivos listados
4. ✅ Código está no GitHub!

---

# PARTE 5: DEPLOY NO AZURE (20 minutos)

## PASSO 25: Acessar Portal Azure

1. Abra: https://portal.azure.com
2. Faça login com sua conta Microsoft
3. Aguarde carregar o Dashboard

---

## PASSO 26: Criar Novo Recurso

1. No menu lateral esquerdo, clique em **"Criar um recurso"**
   - OU clique no botão azul **"+ Create a resource"**
2. Na caixa de busca, digite: `static web app`
3. Nos resultados, clique em **"Static Web App"**
4. Clique no botão azul **"Create"** ou **"Criar"**

---

## PASSO 27: Preencher Abas - Project Details

Você verá um formulário com abas. Comece pela aba **"Basics"**:

**Subscription (Assinatura):**
- Selecione sua assinatura
- Se tiver só uma, já vem selecionada

**Resource Group (Grupo de Recursos):**
- Clique em **"Create new"**
- Digite um nome: `rg-validador-senha`
- Clique "OK"
- OU selecione um grupo existente

---

## PASSO 28: Preencher Static Web App Details

**Name (Nome):**
- Digite: `validador-senha-SEUNOME` (substitua SEUNOME)
- Exemplo: `validador-senha-vinicius`
- Tem que ser único no Azure inteiro

**Plan type (Tipo de Plano):**
- Selecione: **Free**

**Region (Região):**
- Selecione: **East US 2** (recomendado)
- OU **Brazil South** (se disponível)
- OU qualquer outra

---

## PASSO 29: Conectar ao GitHub

**GitHub account (Conta GitHub):**
- Clique no botão **"Sign in with GitHub"**
- Uma janela popup abre
- Faça login no GitHub (se pedido)
- Autorize o app "Azure Static Web Apps"
- Permissões pedidas:
  - ☑️ Ler repositórios
  - ☑️ Escrever workflows
  - ☑️ Ler/escrever metadata
- Clique em **"Authorize Azure-App-Service-Static-Web-Apps"**
- Popup fecha

---

## PASSO 30: Selecionar Repositório

**Organization (Organização):**
- Selecione sua conta do GitHub
- Exemplo: `ViniciusThi`

**Repository (Repositório):**
- Clique no dropdown
- Selecione: `ValidadorSenha` (ou o nome que você deu)

**Branch:**
- Selecione: `main`

---

## PASSO 31: Build Details (MUITO IMPORTANTE!)

**Build Presets (Predefinições de Build):**
- Selecione: **Custom**

**App location (Localização do app):**
- Digite: `/`
- **ATENÇÃO:** É uma barra `/` sozinha
- Significa "raiz do repositório"

**Api location (Localização da API):**
- Digite: `api`
- **ATENÇÃO:** SEM barra no início
- Apenas `api`

**Output location (Localização de saída):**
- Deixe **VAZIO** (em branco)
- Não digite nada

**Resumo das configurações:**
```
Build Presets: Custom
App location: /
Api location: api
Output location: (vazio)
```

---

## PASSO 32: Review e Create

1. Clique no botão **"Review + create"** (parte inferior)
2. Azure valida suas configurações (aguarde uns segundos)
3. Revise tudo:
   - ✅ Nome correto?
   - ✅ Plan: Free?
   - ✅ Repositório correto?
   - ✅ Localizações corretas? (/, api, vazio)
4. Se tudo OK, clique em **"Create"** (botão azul)

---

## PASSO 33: Aguardar Criação

**O que acontece:**
- Tela mostra "Deployment in progress"
- Barra de progresso aparece
- Aguarde 1-2 minutos

**Quando terminar:**
- Mensagem: "Your deployment is complete"
- Clique no botão **"Go to resource"**

---

## PASSO 34: Obter URL do Site

Na página do recurso criado:

1. Procure por **"URL"** na parte superior
2. Você verá algo como:
   ```
   https://gentle-beach-0c506101e.azurestaticapps.net
   ```
3. **COPIE ESTA URL** (você vai usar)
4. Clique nela para abrir em nova aba

**O que você vê:**
- Se mostra "Congratulations on your new site!", é normal!
- Ainda não terminou, o deploy está rodando

---

## PASSO 35: Acompanhar Deploy no GitHub

1. Vá para seu repositório no GitHub
2. Exemplo: https://github.com/ViniciusThi/ValidadorSenha
3. Clique na aba **"Actions"** (no topo)
4. Você verá um workflow rodando:
   - Nome: "Azure Static Web Apps CI/CD"
   - Status: 🟡 Amarelo (rodando) ou ✅ Verde (concluído)
5. Clique no workflow para ver detalhes
6. Clique em "Build and Deploy Job"
7. Veja os passos sendo executados

**Aguarde até:**
- Status ficar ✅ Verde
- Todos os steps terem ✅
- Geralmente leva 2-5 minutos

---

## PASSO 36: Testar o Site

**Após GitHub Actions mostrar ✅:**

1. Aguarde mais 1-2 minutos (cache do CDN)
2. Volte para a aba com a URL do seu site
3. Pressione `Ctrl + F5` (atualizar forçando)
4. **AGORA SIM!** Sua aplicação deve aparecer:
   - Fundo roxo
   - Card branco no centro
   - Título "🔐 Validador de Senha"
   - Campo de senha

---

# PARTE 6: TESTAR A APLICAÇÃO (10 minutos)

## PASSO 37: Teste 1 - Senha Muito Fraca

1. No campo de senha, digite: `123`
2. Aguarde 300ms (automático)

**Resultado esperado:**
- ✅ Pontuação aparece: **2/10**
- ✅ Barra vermelha (pequena)
- ✅ Label: **"Muito Fraca"** (vermelho)
- ✅ Checks dos requisitos:
  - ❌ Mínimo 8 caracteres (fundo vermelho)
  - ❌ Letra maiúscula (fundo vermelho)
  - ❌ Letra minúscula (fundo vermelho)
  - ✅ Número (fundo verde)
  - ❌ Símbolo (fundo vermelho)

---

## PASSO 38: Teste 2 - Senha Fraca

1. Apague o campo
2. Digite: `senha`

**Resultado esperado:**
- ✅ Pontuação: **4/10**
- ✅ Barra laranja
- ✅ Label: **"Fraca"** (laranja)
- ✅ Checks:
  - ❌ 8+ caracteres
  - ❌ Maiúscula
  - ✅ Minúscula
  - ❌ Número
  - ❌ Símbolo

---

## PASSO 39: Teste 3 - Senha Moderada

1. Apague o campo
2. Digite: `senha123`

**Resultado esperado:**
- ✅ Pontuação: **6/10**
- ✅ Barra amarela
- ✅ Label: **"Moderada"** (amarelo)
- ✅ Checks:
  - ✅ 8+ caracteres
  - ❌ Maiúscula
  - ✅ Minúscula
  - ✅ Número
  - ❌ Símbolo

---

## PASSO 40: Teste 4 - Senha Forte

1. Apague o campo
2. Digite: `Senha123`

**Resultado esperado:**
- ✅ Pontuação: **8/10**
- ✅ Barra azul
- ✅ Label: **"Forte"** (azul)
- ✅ Checks:
  - ✅ 8+ caracteres
  - ✅ Maiúscula
  - ✅ Minúscula
  - ✅ Número
  - ❌ Símbolo

---

## PASSO 41: Teste 5 - Senha Muito Forte

1. Apague o campo
2. Digite: `Senha123!`

**Resultado esperado:**
- ✅ Pontuação: **10/10**
- ✅ Barra verde (100%)
- ✅ Label: **"Muito Forte"** (verde)
- ✅ Checks:
  - ✅ 8+ caracteres
  - ✅ Maiúscula
  - ✅ Minúscula
  - ✅ Número
  - ✅ Símbolo

---

## PASSO 42: Teste do Botão Toggle

1. Com a senha digitada, clique no botão 👁️
2. **Resultado:** Senha fica visível, botão muda para 🙈
3. Clique novamente
4. **Resultado:** Senha fica oculta, botão volta para 👁️

---

## PASSO 43: Teste Responsivo (Celular)

**No navegador:**

1. Pressione `F12` (abre DevTools)
2. Pressione `Ctrl + Shift + M` (modo responsivo)
3. OU clique no ícone de celular/tablet
4. Selecione um dispositivo móvel (ex: iPhone 12)

**Resultado esperado:**
- ✅ Layout se adapta
- ✅ Card ocupa a tela
- ✅ Tudo funciona igual
- ✅ Fontes e espaçamentos ajustados

---

# 🎉 PARABÉNS! PROJETO COMPLETO!

## ✅ O QUE VOCÊ CONSEGUIU

1. ✅ Criou conta no GitHub
2. ✅ Criou conta no Azure
3. ✅ Instalou Git
4. ✅ Criou 9 arquivos do projeto
5. ✅ Enviou código para GitHub
6. ✅ Fez deploy no Azure
7. ✅ Aplicação está online e funcionando!

## 🌐 SEU SITE ESTÁ NO AR!

Sua URL: `https://seu-site.azurestaticapps.net`

Compartilhe com:
- ✅ Professor
- ✅ Colegas
- ✅ Portfólio
- ✅ Currículo

---

# PARTE 7: COMO FAZER ALTERAÇÕES NO FUTURO

## Fluxo para Atualizar o Site:

### PASSO A: Editar Arquivo Localmente

1. Abra o arquivo que quer mudar (ex: `index.html`)
2. Faça a alteração
3. Salve (`Ctrl + S`)

### PASSO B: Commitar Mudança

Abra terminal na pasta do projeto:

```bash
git add .
git commit -m "Descricao da mudanca"
git push
```

**Exemplo:**
```bash
git add .
git commit -m "Muda cor do botao para azul"
git push
```

### PASSO C: Aguardar Deploy Automático

1. GitHub Actions detecta o push
2. Faz deploy automaticamente
3. Aguarde 2-5 minutos
4. Site atualizado!

**Sem necessidade de:**
- ❌ Acessar portal Azure
- ❌ Fazer upload manual
- ❌ Configurar nada
- ✅ É TUDO AUTOMÁTICO!

---

# ANEXO: ENTENDENDO O CÓDIGO

## Como Funciona a Pontuação?

```javascript
// Senha: "Senha123!"

// 1. Testa cada requisito
hasUpper: /[A-Z]/.test("Senha123!")  → true (tem "S")
hasLower: /[a-z]/.test("Senha123!")  → true (tem "enha")
hasDigit: /\d/.test("Senha123!")     → true (tem "123")
hasSymbol: /[^A-Za-z0-9]/.test(...)  → true (tem "!")

// 2. Calcula pontos
score = 0
Comprimento 9 (>= 8) → score += 2  (score = 2)
Tem maiúscula       → score += 2  (score = 4)
Tem minúscula       → score += 2  (score = 6)
Tem número          → score += 2  (score = 8)
Tem símbolo         → score += 2  (score = 10)

// 3. Resultado final
score = 10
```

## O que são Expressões Regulares (Regex)?

```javascript
/[A-Z]/        // Qualquer letra maiúscula de A até Z
/[a-z]/        // Qualquer letra minúscula de a até z
/\d/           // Qualquer dígito (0123456789)
/[^A-Za-z0-9]/ // Qualquer coisa QUE NÃO SEJA letra ou número
               // = Símbolos (!@#$%...)
```

## Fluxo Completo de Dados:

```
1. Usuário digita "Senha123!" no campo
   ↓
2. JavaScript detecta (event listener)
   ↓
3. Aguarda 300ms (debounce)
   ↓
4. Faz POST para /api/PasswordScore
   Body: { "password": "Senha123!" }
   ↓
5. Azure Function recebe
   ↓
6. scorePassword() processa
   ↓
7. Retorna JSON:
   {
     "score": 10,
     "details": {
       "length": 9,
       "hasUpper": true,
       "hasLower": true,
       "hasDigit": true,
       "hasSymbol": true
     }
   }
   ↓
8. JavaScript recebe resposta
   ↓
9. displayResults() atualiza tela:
   - Barra 100% verde
   - Label "Muito Forte"
   - Todos checks verdes
```

---

# RESOLUÇÃO DE PROBLEMAS

## Problema 1: GitHub Actions Falha

**Sintomas:**
- ❌ Vermelho no Actions
- Site não atualiza

**Solução:**

1. GitHub → Actions
2. Clique no workflow falhado
3. Veja o erro
4. Erros comuns:
   - "Missing token" → Recrie recurso no Azure
   - "Build failed" → Verifique estrutura de pastas

---

## Problema 2: Site Mostra Página Padrão

**Sintomas:**
- "Congratulations on your new site!"
- Não carrega seu site

**Solução:**

1. Aguarde até GitHub Actions terminar com ✅
2. Aguarde mais 2-3 minutos (cache)
3. Pressione `Ctrl + F5` (atualizar forçando)
4. Se ainda não funcionar:
   - Verifique estrutura de pastas
   - Verifique que `index.html` está na raiz
   - Refaça deploy

---

## Problema 3: API Não Funciona

**Sintomas:**
- Digite senha, nada acontece
- Console mostra erro 404

**Solução:**

1. Pressione `F12` (DevTools)
2. Aba Console
3. Veja o erro
4. Se for 404:
   - Verifique pasta `api/`
   - Verifique `api/PasswordScore/index.js`
   - Verifique `staticwebapp.config.json`

---

## Problema 4: Senha Não Valida

**Sintomas:**
- Digita senha, aparece erro

**Solução:**

1. F12 → Console
2. Veja mensagem de erro
3. Verifique se API está respondendo:
   - Abra aba Network (Rede)
   - Digite senha
   - Veja requisição POST
   - Clique nela, veja resposta

---

# 📚 REFERÊNCIAS E LINKS ÚTEIS

## Documentação Oficial

- **Azure Static Web Apps:** https://docs.microsoft.com/azure/static-web-apps/
- **Azure Functions:** https://docs.microsoft.com/azure/azure-functions/
- **GitHub Actions:** https://docs.github.com/actions
- **Git:** https://git-scm.com/doc

## Tutoriais

- **Microsoft Learn:** https://learn.microsoft.com/training/paths/azure-static-web-apps/
- **MDN Web Docs:** https://developer.mozilla.org

---

# ✅ CHECKLIST FINAL

## Antes de Apresentar/Entregar:

- [ ] Site abre no navegador
- [ ] Campo de senha aparece
- [ ] Digitar senha mostra pontuação
- [ ] Barra muda de cor conforme pontuação
- [ ] Checks verde/vermelho aparecem
- [ ] Botão 👁️ mostra/oculta senha
- [ ] Funciona no celular (responsive)
- [ ] GitHub tem todos os arquivos
- [ ] README.md está completo

---

**FIM DO TUTORIAL**

**Desenvolvido:** Novembro 2025  
**Tecnologias:** HTML, CSS, JavaScript, Azure Static Web Apps, GitHub  
**Duração Total:** ~2 horas  
**Custo:** R$ 0,00 (Totalmente Gratuito)

