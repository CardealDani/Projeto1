
let disciplinas_feitas = []
const total = 2880
let horas = 0

async function cadeiras() {
    const response = await axios.get('http://127.0.0.1:8000/eletivas')
    const cadeira = response.data
    console.log(cadeira)
    console.log(cadeira[0]['disciplina'])
    const progresso = cadeira[0]['prog']
    const barra = document.getElementById('progresso')
    barra.style.width = (progresso / total) * 100 + '%' 
}



function app() {
    console.log('App iniciado!')
    cadeiras()

}
app()
