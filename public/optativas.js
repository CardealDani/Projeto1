fetch('http://127.0.0.1:8000/optativas')
.then(res => res.json()).then(data => {
    sessionStorage.setItem('eletivas',JSON.stringify(data))
})



async function cadeiras() {
    cadeira = JSON.parse(sessionStorage.getItem('obrigatorias'))
}