
let disciplinas_feitas = sessionStorage.getItem('disciplinas').split(",")
let progresso = parseInt(sessionStorage.getItem('progresso'))
const total = 2880
let horas = 0


const barra = document.getElementById('progresso')
barra.style.width = (progresso / total) * 100 + '%'




async function cadeiras() {

    const response = await axios.get('http://127.0.0.1:8000/eletivas')
    const cadeira = response.data
    const semestre4 = document.getElementById('semestre4')
    const semestre5 = document.getElementById('semestre5')
    const semestres = [semestre4, semestre5]

    console.log(cadeira)
    for (let i in cadeira) {
        console.log(`Semestre ${parseInt(i) + 1}`)
        for (let j in cadeira[i]) {
            console.log(cadeira[i][j][0])
            horas = parseInt(cadeira[i][j][1])
            const item = document.createElement('li')
            const bt = document.createElement('BUTTON')
            const bt2 = document.createElement('BUTTON')
            var lbl = document.createTextNode('+')
            var lbl2 = document.createTextNode('-')
            bt.appendChild(lbl)
            bt2.appendChild(lbl2)

            item.innerText = `${cadeira[i][j][0]}`
            semestres[i].appendChild(item).appendChild(bt)
            semestres[i].appendChild(item).appendChild(bt2)
            item.classList.add('cadeiras')
            bt.classList.add('plus')
            bt2.classList.add('minus')
            bt2.classList.add('activePlus')

            bt.addEventListener('click', (function (horas, cad) {
                return function (event) {
                    event.stopPropagation()
                    progresso += parseInt(horas) // Add parsed value to horas
                    console.log(`Adicionado ${horas}`)
                    console.log(progresso)
                    bt.setAttribute('disabled', true)
                    bt.nextElementSibling.removeAttribute('disabled')
                    bt.classList.add('activeMinus')
                    bt2.classList.remove('activePlus')
                    barra.style.width = (progresso / total) * 100 + '%'
                    disciplinas_feitas.push(cad)
                    console.log(disciplinas_feitas)

                }

            })(horas, cadeira[i][j][0]))

            bt2.addEventListener('click', (function (horas, cad) {
                return function (event) {
                    event.stopPropagation()
                    progresso -= parseInt(horas) // Subtract parsed value from horas
                    if (progresso < 0) progresso = 0
                    console.log(`Subtraido ${horas}`)
                    console.log(progresso)
                    bt2.setAttribute('disabled', true)
                    bt2.previousElementSibling.removeAttribute('disabled')
                    bt2.classList.add('activePlus')
                    bt.classList.remove('activeMinus')
                    barra.style.width = (progresso / total) * 100 + '%'
                    disciplinas_feitas = disciplinas_feitas.filter(disciplina => disciplina !== cad); // remove o nome da cadeira do array cadeirasSelecionadas)
                    console.log(disciplinas_feitas)
                }
            })(horas, cadeira[i][j][0]))
        }
    }


    const obrigatorias = document.getElementById('obrigatorias')
    const semestresObrigatorias = document.querySelectorAll('.semestres')


    obrigatorias.addEventListener('click', () => {
        obrigatorias.classList.toggle('active')
    })
    semestres.forEach(e => {
        e.addEventListener('click', event => {
            event.stopPropagation()
        })
    })
    semestresObrigatorias.forEach(e => {
        e.addEventListener('click', (event) => {
            event.stopPropagation()
            e.classList.toggle('activeObrigatorias')
        })
    })
    const continuar = document.getElementById('final')
    continuar.addEventListener('click', () => {
        sessionStorage.setItem('progresso', progresso)
        sessionStorage.setItem('disciplinas', disciplinas_feitas)

    })

}



function app() {
    console.log('App iniciado!')
    cadeiras()

}
app()
