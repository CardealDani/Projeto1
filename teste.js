const cadeira=[
    [
        'Programação I',
        'Autoração Multimídia I',
        'História do Design',
        'Desenho I',
        'ISMD'
    ],
    [
        'Programação II',
        'Comunicação Visual I',
        'MAMI',
        'Narrativas Multimídia I',
        'Cognautas',
        'Opa'
    ],
    [
        'Projeto I',
        'Autoração Multimídia II',
        'Cibercultura',
        'IHC',
        'DIG',
        'opa1',
        'opa2'
    ]
]

for(i in cadeira){
    console.log(`Semestre ${parseInt(i) + 1}`)
    for(j in cadeira[i]){
        console.log(cadeira[i][j])
    }
    console.log('')
}






