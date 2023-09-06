let score = 0;
let scoreHTML = document.getElementById("score");
function increase(){
    score=score+1
    scoreHTML.innerHTML=score;
}
