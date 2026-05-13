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