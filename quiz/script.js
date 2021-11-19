const q1 = document.forms.quiz.elements['q1']
const q2 = document.forms.quiz.elements['q2']
var c = document.getElementsByClassName('inpT')
var res = document.getElementById('result')
var score = document.getElementById('score')
var CurrentScore = 0


function showRes(){
    if(q1.value == 't' && q2.value == 't'){
        res.style.color = 'green'
        res.innerHTML = ' All are right! CONGRATS!'
        CurrentScore = 2;
    }else if(q1.value == 't' && q2.value == 'f'){
        res.style.color = 'red'
        res.innerHTML = 'q2 is wrong'
        CurrentScore = 1
    }else if(q1.value == 'f' && q2.value == 't'){
        res.style.color = 'red'
        res.innerHTML = 'q1 is wrong'
        CurrentScore = 1
    }else{
        res.style.color = 'red'
        res.innerHTML = 'All are wrong'
        CurrentScore = 0
    }

    score.innerHTML = 'CURRENT SCORE: '+ CurrentScore
}

