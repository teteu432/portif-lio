// ======================================
// ANIMAÇÃO AO SCROLL
// ======================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


// ======================================
// BOTÃO VOLTAR AO TOPO
// ======================================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ======================================
// FORMULÁRIO WHATSAPP
// ======================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const mensagem = document.getElementById("mensagem").value;

    const telefone = "5511950549974";

    const texto =

`Olá, Mateus!

Meu nome é ${nome}

E-mail: ${email}

${mensagem}`;

    const url =

`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});


// ======================================
// EFEITO DE DIGITAÇÃO
// ======================================

const profissao = document.querySelector(".hero h2");

const palavras = [

    "Desenvolvedor Front-End",

    "Desenvolvedor React",

    "Desenvolvedor JavaScript",

    "Desenvolvedor C#"

];

let palavra = 0;

let letra = 0;

let apagando = false;

function escrever() {

    const texto = palavras[palavra];

    if (!apagando) {

        profissao.textContent = texto.substring(0, letra++);

        if (letra > texto.length) {

            apagando = true;

            setTimeout(escrever, 1800);

            return;

        }

    } else {

        profissao.textContent = texto.substring(0, letra--);

        if (letra < 0) {

            apagando = false;

            palavra++;

            if (palavra >= palavras.length) {

                palavra = 0;

            }

        }

    }

    setTimeout(escrever, apagando ? 45 : 90);

}

escrever();


// ======================================
// MENU ATIVO
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================================
// EFEITO PARALLAX SUAVE
// ======================================

const background = document.querySelector(".background");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth) * 20;

    const y = (e.clientY / window.innerHeight) * 20;

    background.style.transform =
        `translate(${x / 3}px, ${y / 3}px)`;

});


// ======================================
// ANIMAÇÃO DOS CARDS
// ======================================

const cards = document.querySelectorAll(

    ".card, .skill-card, .projeto-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

`radial-gradient(circle at ${x}px ${y}px,
rgba(59,130,246,.18),
rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =

"rgba(255,255,255,.05)";

    });

});