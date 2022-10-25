const allStars = document.querySelectorAll(".star-rate span svg");
function expectRate(num){
    for(let i=0; i< num;i++){
        allStars[i].style.fill = "var(--ctb-04)";
        allStars[i].style.stroke = "transparent";
    }
}
expectRate(4);