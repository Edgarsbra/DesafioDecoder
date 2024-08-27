function pegarTexto() {
    return document.getElementById('texto').value;
}

const listaCriptografia = {
    "i": "imes",
    "e": "enter",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const textoModificado = document.getElementById("textoModificado");
const imagem = document.getElementById("imagem");
const titulo = document.getElementById("titulo");
const botaoCopiar = document.getElementById("botaoCopiar");

function contemCaracteresInvalidos(texto) {
    return /[^a-z\s]/.test(texto); // Permite letras minúsculas e espaços
}

function aplicarEstilosAposValidacao() {
    textoModificado.style.textAlign = "justify";
    textoModificado.style.color = "var(--cor-titulo-inicial)";
    textoModificado.style.fontSize = "var(--tamanho-letra-secundario)";
    botaoCopiar.style.display = "block"; // Exibe o botão de copiar
}

function mostrarAviso() {
    textoModificado.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    textoModificado.style.textAlign = "center";
    imagem.style.display = "block";
    titulo.style.display = "block";
    botaoCopiar.style.display = "none"; // Esconde o botão de copiar

    const aviso = document.querySelector('.apresentacao__entrada__interface__aviso p');
    aviso.classList.add('blink');

    setTimeout(() => {
        aviso.classList.remove('blink');
    }, 3000);
}

function processarTexto(acao) {
    let mensagemInicial = pegarTexto();

    if (mensagemInicial === "" || contemCaracteresInvalidos(mensagemInicial)) {
        mostrarAviso();
        return;
    }

    if (acao === "criptografar") {
        mensagemInicial = mensagemInicial.split("").map(char => listaCriptografia[char] || char).join("");
    } else {
        mensagemInicial = mensagemInicial
            .replace(/imes/g, "i")
            .replace(/enter/g, "e")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    textoModificado.textContent = mensagemInicial;
    imagem.style.display = "none";
    titulo.style.display = "none";
    textoModificado.style.display = "block";

    aplicarEstilosAposValidacao();
}

function criptografar() {
    processarTexto("criptografar");
}

function descriptografar() {
    processarTexto("descriptografar");
}

function copiarTexto() {
    const textoParaCopiar = document.createElement("textarea");
    textoParaCopiar.value = textoModificado.textContent;
    document.body.appendChild(textoParaCopiar);
    textoParaCopiar.select();
    document.execCommand("copy");
    document.body.removeChild(textoParaCopiar);
}
