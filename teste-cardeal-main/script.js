let semestre = document.querySelectorAll('.semestre')
let plus = document.querySelectorAll('.plus')
let minus = document.querySelectorAll('.minus')
let pontos = 0
const total = 10
const progresso = document.getElementById('progresso')

plus.forEach(e => {
    e.addEventListener('click', (event) => {
        event.stopPropagation()
        e.setAttribute('disabled', null)
        e.nextElementSibling.removeAttribute('disabled')
        pontos++
        console.log(pontos)
        console.log((pontos / total) * 100)
        progresso.style.width = (pontos / total) * 100 + '%'
    })
})

    minus.forEach(ele => {
      ele.addEventListener('click', (event) => {
        event.stopPropagation()
        ele.setAttribute('disabled', null)
        ele.previousElementSibling.removeAttribute('disabled');
        pontos--
        if(pontos < 0){
            pontos=0
        }
        console.log(pontos)
        console.log((pontos / total) * 100)
        progresso.style.width = (pontos / total) * 100 + '%'
      })
    })

semestre.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('active')
  })
})