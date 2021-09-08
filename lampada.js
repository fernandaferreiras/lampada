"use strict"
const lampada = document.getElementById("lampada")
let idLigar
let idDesligar

// function id(elemento) {
//     return document.getElementById(elemento)
// }

const id = (elemento) => document.getElementById(elemento)

const botoesLigaDesliga = (estadoLiga, estadoDesliga, estadoPiscar) => {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")
    const botaoPiscar = document.getElementById("piscar")
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
    botaoPiscar.disabled = estadoPiscar
}

// function lampadaQuebrada() {
//     return lampada.src.includes("quebrada")
// }

const lampadaQuebrada = () => lampada.src.includes("quebrada")

const ligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)
    }
}

const desligarLampada= () => {
    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
}

const quebrarLampada = () => {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)
}

const pararPiscar = () => {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

const piscar = () => {
    const botaoPiscar = document.getElementById("piscar")
    if (botaoPiscar.textContent == "Piscar") {
        idLigar = setInterval(ligarLampada, 500)
        idDesligar = setInterval(desligarLampada, 1000)
        botaoPiscar.textContent = "Parar"
    } else {
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
}

// eventos
id("ligar").addEventListener("click", ligarLampada)

id('desligar').addEventListener("click", desligarLampada)

id("lampada").addEventListener("mouseover", ligarLampada)

id("lampada").addEventListener("mouseleave", desligarLampada)

id("lampada").addEventListener("dblclick", quebrarLampada)

id("piscar").addEventListener("click", piscar)