document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    
    if (heart) {
        // Estilo do coração para aparecer como interativo
        heart.style.cursor = 'pointer';
        heart.style.transition = 'all 0.3s ease';
        heart.style.display = 'inline-block';
        heart.style.userSelect = 'none';

        // Efeito hover
        heart.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
            this.style.filter = 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))';
        });

        heart.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'none';
        });

        // Click com animação
        heart.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Animação de pulso
            this.style.animation = 'heartPulse 0.6s ease';

            // Criar partículas de corações flutuando
            createHeartParticles(e.pageX, e.pageY);

            // Redirecionar após animação
            setTimeout(() => {
                window.location.href = 'galeria_secreta.html';
            }, 600);
        });
    }

    // Função para criar partículas de corações
    function createHeartParticles(x, y) {
        const hearts = ['❤️', '💕', '💖', '💗'];
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            const heart = hearts[Math.floor(Math.random() * hearts.length)];
            
            particle.textContent = heart;
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.fontSize = '24px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.userSelect = 'none';
            particle.style.animation = `floatAway ${1.5 + Math.random() * 0.5}s ease-out forwards`;
            
            // Ângulo aleatório
            const angle = (Math.PI * 2 * i) / 8;
            const velocity = 100 + Math.random() * 100;
            
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity - 200 + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }
    }
});

// Adicionar estilos de animação ao DOM
const style = document.createElement('style');
style.textContent = `
    @keyframes heartPulse {
        0% { transform: scale(1); }
        25% { transform: scale(1.4); }
        50% { transform: scale(1.2); }
        75% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }

    @keyframes floatAway {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
        }
    }
`;
document.head.appendChild(style);
