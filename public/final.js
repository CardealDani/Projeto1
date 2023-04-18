

let progresso = parseInt(sessionStorage.getItem('progresso'))


const cadeiras = sessionStorage.getItem('disciplinas').split(",")


const ul = document.getElementById('cadeiras')
const ulHoras = document.getElementById('horas')

console.log(cadeiras)
cadeiras.forEach(c => {
    const li = document.createElement('li')
    li.innerText = `${c}`
    ul.appendChild(li)
});

let credito = progresso/16
const li = document.createElement('li')
li.innerText = `Horas: ${progresso} -- Créditos: ${credito}`
ulHoras.appendChild(li)

