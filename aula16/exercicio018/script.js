let num = document.getElementById('inputNum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        alert('Valor inválido ou já digitado!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let i in valores){
            soma += valores[i]
        }

        res.innerHTML = ''
        if(valores.length == 1){
            res.innerHTML += `<p>Ao todo temos ${total} número.</p>`
        }else{
            res.innerHTML += `<p>Ao todo temos ${total} números.</p>`
        }
        
        for(let i in valores){
            if(valores[i] > maior)
                maior = valores[i]
            if(valores[i] < menor)
                menor = valores[i]
        }

        media = soma / total
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}