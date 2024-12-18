// script.js

// Função para ativar animações conforme os elementos entram na viewport
function revealOnScroll() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible) {
            element.classList.add('show');
        }
    });
}

// Listener para scroll
window.addEventListener('scroll', revealOnScroll);

// Carregar elementos iniciais quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();

    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Compensar o header fixo
                    behavior: 'smooth',
                });
            }
        });
    });
});

// Botão de volta ao topo
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆';
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color:rgba(0, 0, 0, 0.38);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: transform 0.3s;
`;

document.body.appendChild(backToTopButton);

// Exibir/esconder botão de voltar ao topo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.transform = 'scale(1)';
    } else {
        backToTopButton.style.transform = 'scale(0)';
        setTimeout(() => (backToTopButton.style.display = 'none'), 300);
    }
});

// Ação ao clicar no botão de voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Função para animar as habilidades ao entrar na viewport
document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => observer.observe(item));
});
