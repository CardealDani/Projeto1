async function cadeiras(){
    const response = await axios.get('http://localhost:8000/')
    const cadeira = response.data
    const semestre1 = document.getElementById('semestre1')
    let x = 0
    let total = cadeira.length
    console.log(total)
    cadeira.forEach(c=>{
        const item = document.createElement('li')
        const bt = document.createElement('BUTTON')
        const bt2 = document.createElement('BUTTON')
        var lbl = document.createTextNode("+");
        var lbl2 = document.createTextNode("-")
        bt.appendChild(lbl);
        bt2.appendChild(lbl2)

        item.innerText = c
        semestre1.appendChild(item).appendChild(bt)
        semestre1.appendChild(item).appendChild(bt2)
        item.classList.add('cadeiras')
        bt.classList.add('plus')
        bt2.classList.add('minus')
        bt2.classList.add('activePlus')
        const progresso = document.getElementById('progresso')

        bt.addEventListener('click',()=>{
            x++
            console.log(x)
            bt.setAttribute('disabled',null)
            bt.nextElementSibling.removeAttribute('disabled')
            bt.classList.add('activeMinus')
            bt2.classList.remove('activePlus')
            progresso.style.width = (x/total)*100 + '%'
        })
        bt2.addEventListener('click',()=>{
            x--
            if(x<0) x=0
            console.log(x)
            bt2.setAttribute('disabled',null)
            bt2.previousElementSibling.removeAttribute('disabled')
            bt2.classList.add('activePlus')
            bt.classList.remove('activeMinus')
             progresso.style.width = (x/total)*100 + '%'
        })



    })

}


function app() {
    console.log('App iniciado!')
    cadeiras()
}
app()
