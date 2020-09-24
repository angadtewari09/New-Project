/*const click = document.getElementById("click-me");

click.addEventListener('click' , function(){
    document.querySelector(".begin").style.display = "none";
});*/
$(document).ready(function(){
    $("#click-me").click(function(){
        $(".begin").fadeOut(400);
        $(".container").fadeIn(1500);
    });
});
function blackjack() {
    let player = 0;
    let dealer = 0;
    const hit_btn = document.getElementById("deal-1");
    const stand_btn = document.getElementById("deal-2");
    const deal_btn = document.getElementById("deal-3");

    
}