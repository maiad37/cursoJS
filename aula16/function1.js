function parImpar(n){
    if(n%2 == 0){
        return `par!`
    }else{
        return 'ímpar!'
    }
}

let res = parImpar(12)
console.log(`Esse número é ${res}`)
