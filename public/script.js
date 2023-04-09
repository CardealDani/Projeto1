
let disciplinas_feitas = []
const total = 2880
let horas = 0
let progresso = 0

async function cadeiras() {
    const response = await axios.get('http://127.0.0.1:8000/obrigatorias')
    const cadeira = response.data
    const semestre1 = document.getElementById('semestre1')
    const semestre2 = document.getElementById('semestre2')
    const semestre3 = document.getElementById('semestre3')
    const semestre4 = document.getElementById('semestre4')
    const semestre6 = document.getElementById('semestre6')
    const semestre7 = document.getElementById('semestre7')
    const semestre8 = document.getElementById('semestre8')
    const semestres = [semestre1, semestre2, semestre3, semestre4, semestre6, semestre7, semestre8]

    
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
            const barra = document.getElementById('progresso')

            bt.addEventListener('click', (function (horas, cad,dis,prog,tot) {
                return function (event) {
                    event.stopPropagation()
                    prog += parseInt(horas) // Add parsed value to horas
                    console.log(`Adicionado ${horas}`)
                    console.log(prog)
                    bt.setAttribute('disabled', true)
                    bt.nextElementSibling.removeAttribute('disabled')
                    bt.classList.add('activeMinus')
                    bt2.classList.remove('activePlus')
                    barra.style.width = (prog / tot) * 100 + '%'
                    dis.push(cad)
                    console.log(dis)

                }

            })(horas, cadeira[i][j][0],disciplinas_feitas,progresso,total))

            bt2.addEventListener('click', (function (horas, cad,dis,prog,tot) {
                return function (event) {
                    event.stopPropagation()
                    prog -= parseInt(horas) // Subtract parsed value from horas
                    if (prog < 0) prog = 0
                    console.log(`Subtraido ${horas}`)
                    console.log(prog)
                    bt2.setAttribute('disabled', true)
                    bt2.previousElementSibling.removeAttribute('disabled')
                    bt2.classList.add('activePlus')
                    bt.classList.remove('activeMinus')
                    barra.style.width = (prog / tot) * 100 + '%'
                    dis = dis.filter(disciplina => disciplina !== cad); // remove o nome da cadeira do array cadeirasSelecionadas)
                    console.log(dis)
                }
            })(horas, cadeira[i][j][0],disciplinas_feitas,progresso,total))
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

}


function app() {
    console.log('App iniciado!')
    cadeiras()

}
app()
