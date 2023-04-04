async function cadeiras(){
    const response = await axios.get('http://127.0.0.1:8000')
    const cadeira = response.data
    const semestre1 = document.getElementById('semestre1')
    const semestre2=document.getElementById('semestre2')
    const semestre3 = document.getElementById('semestre3')
    const semestres = [semestre1,semestre2,semestre3]

    let x = 0
    let count
    console.log(cadeira)
    for(let i = 0; i<3; i++){
        count= Object.keys(cadeira[i]).length;
        console.log(count)
        for(let j = 0; j<count; j++){
            console.log(cadeira[j])
            cadeira[j].forEach(c=>{
                const item = document.createElement('li')
                const bt = document.createElement('BUTTON')
                const bt2 = document.createElement('BUTTON')
                var lbl = document.createTextNode("+");
                var lbl2 = document.createTextNode("-")
                bt.appendChild(lbl);
                bt2.appendChild(lbl2)
                item.innerText = c
                semestres[j].appendChild(item).appendChild(bt)
                semestres[j].appendChild(item).appendChild(bt2)
                item.classList.add('cadeiras')
                bt.classList.add('plus')
                bt2.classList.add('minus')
                bt2.classList.add('activePlus')
                const progresso = document.getElementById('progresso')

                bt.addEventListener('click',(event)=>{
                    event.stopPropagation()
                    x++
                    console.log(x)
                    bt.setAttribute('disabled',null)
                    bt.nextElementSibling.removeAttribute('disabled')
                    bt.classList.add('activeMinus')
                    bt2.classList.remove('activePlus')
                    progresso.style.width = (x/total)*100 + '%'
                })
                bt2.addEventListener('click',(event)=>{
                    event.stopPropagation()
                    x--
                    if(x<0) x=0
                    console.log(x)
                    bt2.setAttribute('disabled',null)
                    bt2.previousElementSibling.removeAttribute('disabled')
                    bt2.classList.add('activePlus')
                    bt.classList.remove('activeMinus')
                    progresso.style.width = (x/total)*100 + '%'
                })

                const obrigatorias = document.querySelectorAll('.obrigatorias')
                
                obrigatorias.forEach(e=>{
                    e.addEventListener('click', ()=>{
                        e.classList.toggle('activeObrigatorias')
                    })
                })

            })
        }
    }
}

function app() {
    console.log('App iniciado!')
    cadeiras()
}
app()
