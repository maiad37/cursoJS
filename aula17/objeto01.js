//declarar array
let num = [5,8,4]
//declarar objeto 
let pessoa = {nome:'Maria',sexo:'F', peso:45.5, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

pessoa.engordar(2)
console.log(pessoa.peso)