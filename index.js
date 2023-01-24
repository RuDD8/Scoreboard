let numHome = 0
let homeScore = document.getElementById("homeScore")
homeScore.textContent = numHome

let numAway = 0
let awayScore = document.getElementById("awayScore")
awayScore.textContent = 0


function add1home(){
    numHome += 1
    homeScore.textContent = numHome
}

function add2home(){
    numHome += 2
    homeScore.textContent = numHome
}

function add3home(){
    numHome += 3
    homeScore.textContent = numHome
}

function add1away(){
    numAway += 1
    awayScore.textContent = numAway
}

function add2away(){
    numAway += 2
    awayScore.textContent = numAway
}

function add3away(){
    numAway += 3
    awayScore.textContent = numAway
}

function resetScore(){
    numHome = 0
    numAway = 0
    homeScore.textContent = 0
    awayScore.textContent = 0
}

function setLeader(){
    if(numHome > numAway){
        document.getElementById('homeScore').style.color = 'green'
        document.getElementById('awayScore').style.color = 'red'
    }else if(numHome < numAway){
        document.getElementById('homeScore').style.color = 'red'
        document.getElementById('awayScore').style.color = 'green'
    }else{
        document.getElementById('homeScore').style.color = '#9AABD8'
        document.getElementById('awayScore').style.color = '#9AABD8'
    }
}