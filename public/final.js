const doc = new jsPDF({
    format: 'a4',
    unit: 'mm',
    putOnlyUsedFonts: true,
    lineHeight: 1.5
})

const img = new Image()
img.src = '/img/timbrado.jpg'





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

let credito = progresso / 16
const li = document.createElement('li')
li.innerText = `Horas: ${progresso} -- Créditos: ${credito}`
ulHoras.appendChild(li)

let x = 0
function pdf() {
    doc.addImage(img, 'jpg', 0, 0, 210, 297)
    doc.setFontSize(20)
    doc.setFontStyle('Gothic')
    doc.setFontStyle('bold')
    doc.text(`Cadeiras feitas:`, 10, 50)
    for (t in cadeiras) {
        doc.setFontSize(15)
        doc.setFontStyle('normal')
        doc.setFontStyle('regular')
        doc.text(`- ${cadeiras[t]}`, 10, t * 10 + 60)
        x = t
    }
    doc.setDrawColor(0, 0, 0);
    doc.line(0, x + 10, 210, x + 10)
    doc.setFontSize(20)
    doc.setFontStyle('Gothic')
    doc.setFontStyle('bold')
    doc.text(`Total de Horas:`, 10, x * 10 + 80)
    doc.setFontSize(15)
    doc.setFontStyle('normal')
    doc.setFontStyle('regular')
    doc.text(`- ${progresso}`, 10, x * 10 + 90)

    doc.setFontSize(20)
    doc.setFontStyle('Gothic')
    doc.setFontStyle('bold')
    doc.text(`Total de Crédito:`, 10, x * 10 + 110)
    doc.setFontSize(15)
    doc.setFontStyle('normal')
    doc.setFontStyle('regular')
    doc.text(`- ${credito}`, 10, x * 10 + 120)

    doc.save('Cadeiras.pdf')
}
