
const allStarRates = document.querySelectorAll(".star-rate");
function  expectRate(){
    for(let starRate of allStarRates){
        let rate = starRate.getAttribute("data-rate");
        let stars = starRate.getElementsByTagName("i");
        for(let i=stars.length-1; i> stars.length-rate*2-1; i--){
            stars[i].style.fontFamily = "fontAwesome";
            stars[i].style.color = "var(--ctb-04)";
        }
    }
}
 expectRate();