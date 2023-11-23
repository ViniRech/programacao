const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "idiomas/english.js";
document.head.appendChild(linguaInglesa);

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "idiomas/francais.js";
document.head.appendChild(linguaFrancesa);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function () {
    translate(this.value);
})

function translate(idioma) {
    const traducao = (idioma == "br") ? portugues()
    : (idioma == "es") ? espanol()
    : (idioma == "fr") ? francais()
    : (idioma == "en") ? english()
    : null;
    setLanguage(traducao);
}

function setLanguage(traducao) {
    btSoma = document.getElementById("btSoma");
    btSubtracao = document.getElementById("btSubtracao");
    btMultiplicacao = document.getElementById("btMultiplicacao");
    btDivisao = document.getElementById("btDivisao");
    titulo = document.getElementById("titulo");
    boasVindas = document.getElementById("boasVindas");

    btSoma.value = traducao.soma;
    btSubtracao.value = traducao.subtracao;
    btMultiplicacao.value = traducao.multiplicacao;
    btDivisao.value = traducao.divisao;
    titulo.textContent = traducao.titulo;
    boasVindas.textContent = traducao.boasVindas;
}

/*
let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function () {
    if (this.value == "br") {
        btSoma.value = "Somar";
        btSubtracao.value = "Subtrair";
        btMultiplicacao.value = "Multiplicar";
        btDivisao.value = "Dividir";
    }
    else if (this.value == "es") {
        btSoma.value = "Sumar";
        btSubtracao.value = "Restar";
        btMultiplicacao.value = "Multiplicar";
        btDivisao.value = "Dividir"
    }
    else if (this.value == "en") {
        btSoma.value = "Add";
        btSubtracao.value = "Substract";
        btMultiplicacao.value = "Multiply";
        btDivisao.value = "Divide"
    }
    else if (this.value == "fr") {
        btSoma.value = "Ajouter";
        btSubtracao.value = "Soustraire";
        btMultiplicacao.value = "Multiplier";
        btDivisao.value = "Diviser";
    }
});
*/