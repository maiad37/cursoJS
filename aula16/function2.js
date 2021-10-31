// param1=0 param2=0(parametros opcionais...)
function somar(n1=0, n2=0){
    return n1 + n2
}
//returns 2 (2+0)
console.log(somar(2))

// sem os parametros opcionais
function somar2(n1, n2){
    return n1 + n2
}
//returns NaN (2 + undefined)
console.log(somar2(2))