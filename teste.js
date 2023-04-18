const cadeira=[
    [['Programação I'],
        ['Autoração Multimídia I','64'],
        ['História do Design','64'],
  
    ],
    [
        ['Programação II','64'],
        ['Comunicação Visual I','64'],
     
    ],
    [
        ['Projeto I','64'],
        ['Autoração Multimídia II','64'],
       
    ]
]

for(i in cadeira){
    console.log(`Semestre ${parseInt(i) + 1}`)

    for(j in cadeira[i]){
        console.log(cadeira[i][j][1])
    }
    console.log('')
}

lista = [ 
    ['a',0],
    ['b',1],
    ['c',2]
]
const [label,value]  = item 
