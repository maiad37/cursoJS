function gerarTabuada(){
    var n = document.getElementById("num")
    var num = Number(n.value)
    var tab = document.getElementById('select-tabuada')

    if(num.value.lengh == 0){
        window.alert('ERRO - campo vazio. Por favor digite um número e tente novamente')
    }else{
        var i = 1
        var total = ''
        tab.innerHTML = ''
        do{
            let item = document.createElement('option')
            total = num * i 
            item.text =`${num} x ${i} = ${total}`
            item.value = `tab ${i}`
            tab.appendChild(item)
            i++
        }while(i < 51)
    }



}