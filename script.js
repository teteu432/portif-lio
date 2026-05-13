function enviarWhats(events) {

    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');
    const tel = '5511950549974';

    const texto = `Olá" Ma chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${tel}/?t=${msgFormatada}`;

    console.log(url)

    window.open(url, '_blank')
}

const body = document.body;

document.addEventListener("mousemove", (e) => {

    const particula = document.createElement("div");

    particula.classList.add("rastro");

    particula.style.left = e.pageX + "px";
    particula.style.top = e.pageY + "px";

    body.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 600);
});