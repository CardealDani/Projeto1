

cadeira = JSON.parse(sessionStorage.getItem('optativas'))
const lista = document.getElementById('lista')
console.log(cadeira)

for (let i in cadeira) {
    let li = document.createElement('li')
    li.classList.add('c')
    li.innerText = cadeira[i][0].charAt(0).toUpperCase() + cadeira[i][0].substr(1).toLowerCase();
    lista.appendChild(li)
    
}



function pesquisar() {
    let input = document.getElementById('cadeira').value
    input = input.toLowerCase();
    let c = document.getElementsByClassName('c');

    for (i = 0; i < c.length; i++) {
        if (c[i].innerHTML.toLowerCase().includes(input)) {
            c[i].style.display = "list-item";
        }
        else {
            c[i].style.display = "none";
        }

    }
}