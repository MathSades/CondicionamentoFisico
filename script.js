// Calculadora de IMC Aprimorada
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "⚠️ Por favor, preencha todos os campos com valores válidos!";
        resultado.style.color = "#e74c3c";
        resultado.style.background = "#fdf2f2";
        resultado.style.border = "2px solid #e74c3c";
        return;
    }

    let imc = peso / (altura * altura);
    let mensagem = "";
    let categoria = "";
    let cor = "";
    let emoji = "";
    let dicas = "";

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        cor = "#f39c12";
        emoji = "⚖️";
        dicas = "Consulte um nutricionista para ganho de peso saudável.";
    } else if (imc < 24.9) {
        categoria = "Peso ideal";
        cor = "#27ae60";
        emoji = "✅";
        dicas = "Parabéns! Mantenha seus hábitos saudáveis.";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
        cor = "#f39c12";
        emoji = "⚠️";
        dicas = "Considere exercícios regulares e alimentação balanceada.";
    } else if (imc < 34.9) {
        categoria = "Obesidade Grau I";
        cor = "#e67e22";
        emoji = "🚨";
        dicas = "Recomendamos acompanhamento médico e mudanças no estilo de vida.";
    } else if (imc < 39.9) {
        categoria = "Obesidade Grau II";
        cor = "#e74c3c";
        emoji = "🚨";
        dicas = "Procure orientação médica urgente para um plano de emagrecimento.";
    } else {
        categoria = "Obesidade Grau III";
        cor = "#c0392b";
        emoji = "🆘";
        dicas = "Consulte um médico imediatamente. Considere tratamentos especializados.";
    }

    resultado.innerHTML = `
        <div style="text-align: center;">
            <h4>${emoji} Seu IMC: ${imc.toFixed(2)}</h4>
            <p><strong>Categoria:</strong> ${categoria}</p>
            <p style="margin-top: 15px; font-style: italic;">${dicas}</p>
        </div>
    `;
    resultado.style.color = cor;
    resultado.style.background = "#f8f9fa";
    resultado.style.border = `2px solid ${cor}`;
    resultado.style.borderRadius = "10px";
}

// Calculadora de Frequência Cardíaca Máxima
function calcularFCM() {
    let idade = parseInt(document.getElementById("idade").value);
    let resultado = document.getElementById("resultadoFCM");

    if (!idade || idade <= 0 || idade > 120) {
        resultado.innerHTML = "⚠️ Por favor, insira uma idade válida (1-120 anos)!";
        resultado.style.color = "#e74c3c";
        resultado.style.background = "#fdf2f2";
        resultado.style.border = "2px solid #e74c3c";
        return;
    }

    let fcm = 220 - idade;
    let zona1_min = Math.round(fcm * 0.5);
    let zona1_max = Math.round(fcm * 0.6);
    let zona2_min = Math.round(fcm * 0.6);
    let zona2_max = Math.round(fcm * 0.7);
    let zona3_min = Math.round(fcm * 0.7);
    let zona3_max = Math.round(fcm * 0.8);
    let zona4_min = Math.round(fcm * 0.8);
    let zona4_max = Math.round(fcm * 0.9);
    let zona5_min = Math.round(fcm * 0.9);

    resultado.innerHTML = `
        <div style="text-align: center;">
            <h4>💓 Sua FCM: ${fcm} bpm</h4>
            <hr style="margin: 15px 0;">
            <div style="text-align: left; font-size: 0.9rem;">
                <p><strong>🟢 Zona 1 (50-60%):</strong> ${zona1_min}-${zona1_max} bpm - Aquecimento</p>
                <p><strong>🔵 Zona 2 (60-70%):</strong> ${zona2_min}-${zona2_max} bpm - Queima de gordura</p>
                <p><strong>🟡 Zona 3 (70-80%):</strong> ${zona3_min}-${zona3_max} bpm - Exercício aeróbico</p>
                <p><strong>🟠 Zona 4 (80-90%):</strong> ${zona4_min}-${zona4_max} bpm - Limiar anaeróbico</p>
                <p><strong>🔴 Zona 5 (90-100%):</strong> ${zona5_min}-${fcm} bpm - Potência máxima</p>
            </div>
        </div>
    `;
    resultado.style.color = "#2c3e50";
    resultado.style.background = "#f8f9fa";
    resultado.style.border = "2px solid #3498db";
    resultado.style.borderRadius = "10px";
}

// Calculadora de Gasto Calórico
function calcularCalorias() {
    let peso = parseFloat(document.getElementById("pesoCaloria").value);
    let met = parseFloat(document.getElementById("exercicio").value);
    let tempo = parseInt(document.getElementById("tempo").value);
    let resultado = document.getElementById("resultadoCalorias");

    if (!peso || !tempo || peso <= 0 || tempo <= 0) {
        resultado.innerHTML = "⚠️ Por favor, preencha todos os campos com valores válidos!";
        resultado.style.color = "#e74c3c";
        resultado.style.background = "#fdf2f2";
        resultado.style.border = "2px solid #e74c3c";
        return;
    }

    // Fórmula: Calorias = MET × peso (kg) × tempo (horas)
    let calorias = Math.round(met * peso * (tempo / 60));
    let exercicioNome = document.getElementById("exercicio").selectedOptions[0].text;

    let eficiencia = "";
    if (calorias < 150) {
        eficiencia = "Exercício leve - Ótimo para iniciantes! 🌱";
    } else if (calorias < 300) {
        eficiencia = "Exercício moderado - Perfeito para manutenção! 💪";
    } else if (calorias < 500) {
        eficiencia = "Exercício intenso - Excelente queima calórica! 🔥";
    } else {
        eficiencia = "Exercício muito intenso - Máxima queima! 🚀";
    }

    resultado.innerHTML = `
        <div style="text-align: center;">
            <h4>🔥 Calorias queimadas: ${calorias} kcal</h4>
            <p><strong>Exercício:</strong> ${exercicioNome}</p>
            <p><strong>Duração:</strong> ${tempo} minutos</p>
            <p><strong>Peso:</strong> ${peso} kg</p>
            <hr style="margin: 15px 0;">
            <p style="font-style: italic; color: #27ae60;">${eficiencia}</p>
            <p style="font-size: 0.85rem; margin-top: 10px;">
                💡 <strong>Dica:</strong> Para perder 1kg, você precisa queimar cerca de 7.700 kcal
            </p>
        </div>
    `;
    resultado.style.color = "#2c3e50";
    resultado.style.background = "#f8f9fa";
    resultado.style.border = "2px solid #27ae60";
    resultado.style.borderRadius = "10px";
}

// Função para alternar entre categorias de exercícios
function showCategory(categoryId) {
    // Esconder todas as categorias
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remover classe active de todos os botões
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar categoria selecionada
    document.getElementById(categoryId).classList.add('active');
    
    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');
}

// Função para alternar entre planos de treino
function showPlan(planId) {
    // Esconder todos os planos
    document.querySelectorAll('.plan-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remover classe active de todos os botões
    document.querySelectorAll('.plan-tab').forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar plano selecionado
    document.getElementById(planId).classList.add('active');
    
    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');
}

// Função para alternar FAQ
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.classList.contains('active');
    
    // Fechar todas as FAQs
    document.querySelectorAll('.faq-answer').forEach(faq => {
        faq.classList.remove('active');
    });
    
    // Se não estava aberta, abrir esta FAQ
    if (!isOpen) {
        answer.classList.add('active');
    }
}

// Smooth scroll para navegação
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar offset para o header fixo
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Compensar header fixo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de entrada para cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observar todos os cards para animação
    document.querySelectorAll('.card, .component-card, .exercise-card, .nutrition-card, .calculator-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});
