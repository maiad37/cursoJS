function calc(){
    let nome = prompt(`Qual o nome do aluno?`)
    let nota1 = prompt(`Digite a primeira nota de ${nome}`)
    let nota2 = prompt(`Digite a segunda nota de ${nome}`)
    let media = (Number(nota1) + Number(nota2))/2



    res.innerHTML += `<h1>Analisando a Situação de ${nome}...</h1>`
    res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong></p>`
    if(media < 3){
        res.innerHTML += `Com média abaixo de 3,0 o aluno está <span id=rep>REPROVADO</span>`
     }else if(media >= 3 && media <= 6){
        res.innerHTML += `Com média entre 3,0 e 6,0 o aluno está em <span id=rec>RECUPERAÇÃO</span>`
     }else if(media > 6){
        res.innerHTML += `Com média acima de 6,0 o aluno está <span id=apr>APROVADO</span>`
     }

}