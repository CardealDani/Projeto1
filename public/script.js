async function cadeiras() {
    const response = await axios.get('http://127.0.0.1:8000')
    const cadeira = response.data
    const semestre1 = document.getElementById('semestre1')
    const semestre2 = document.getElementById('semestre2')
    const semestre3 = document.getElementById('semestre3')
    const semestres = [semestre1, semestre2, semestre3]

 
    const total = 2880
    let horas = 0 // Declare horas variable outside the loop
    let progresso = 0
    console.log(cadeira)
    for (i in cadeira) {
      console.log(`Semestre ${parseInt(i) + 1}`)
      for (j in cadeira[i]) {
        console.log(cadeira[i][j][0])
        horas = parseInt(cadeira[i][j][1]) // Add parsed value to horas
        const item = document.createElement('li')
        const bt = document.createElement('BUTTON')
        const bt2 = document.createElement('BUTTON')
        var lbl = document.createTextNode('+')
        var lbl2 = document.createTextNode('-')
        bt.appendChild(lbl)
        bt2.appendChild(lbl2)
        
        item.innerText = `${cadeira[i][j][0]}  Horas`
        semestres[i].appendChild(item).appendChild(bt)
        semestres[i].appendChild(item).appendChild(bt2)
        item.classList.add('cadeiras')
        bt.classList.add('plus')
        bt2.classList.add('minus')
        bt2.classList.add('activePlus')
        const barra = document.getElementById('progresso')

        bt.addEventListener('click', (event) => {
          event.stopPropagation()
          console.log(horas)
          progresso += horas // Add parsed value to horas
          console.log(`Adicionado ${horas}`)
          bt.setAttribute('disabled', true)
          bt.nextElementSibling.removeAttribute('disabled')
          bt.classList.add('activeMinus')
          bt2.classList.remove('activePlus')
          barra.style.width = (progresso / total) * 100 + '%'
        })
        bt2.setAttribute('disabled', true)  
        bt2.addEventListener('click', (event) => {
          event.stopPropagation()
          console.log(horas)
          progresso -= parseInt(horas) // Subtract parsed value from horas
          if (progresso < 0) progresso = 0
          console.log(`Subtraido ${horas}`)

          bt2.setAttribute('disabled', true)
          bt2.previousElementSibling.removeAttribute('disabled')
          bt2.classList.add('activePlus')
          bt.classList.remove('activeMinus')
          barra.style.width = (progresso / total) * 100 + '%'
        })

        console.log(`esse codigo ta rodando antes dos botoes ${horas}`)
      }
    }
  
    const obrigatorias = document.getElementById('obrigatorias')
    const semestresObrigatorias = document.querySelectorAll('.semestres')


    obrigatorias.addEventListener('click',()=>{
        obrigatorias.classList.toggle('active')
    })
    semestres.forEach(e=>{
        e.addEventListener('click',event=>{
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
