let num = [4,5,2]

//array.push()
num.push(1,3,6)

//array.length - array.sort()
console.log(`Array - [${num}]`)
console.log(`Array length - ${num.length}`)
//console.log(`Sorted array = [${num.sort()}]`)

//for
console.log(num)
for(let i = 0; i < num.length; i++){
    console.log(`[${i}] = ${num[i]}`)
}

console.log('-----------------------')

//simplified for (for arrays)
for(let i in num){
    console.log(`[${i}] = ${num[i]}`)
}

//array.indexOf()
console.log(`3 is at position [${num.indexOf(3)}]`)

//using if to determine rather number exists or not in an array
let n = 100
let position = num.indexOf(n)
if(position < 0){
    console.log(`${n} isn't in this array`)
}else{
    console.log(`${n} is at position [${position}]`)
}
