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

