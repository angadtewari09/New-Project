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

/*function updateScroll(){
    if(!scrolled){
        var element = document.getElementById("your-area");
        element.scrollTop = element.scrollHeight;
    }
}*/

function blackjack() {
    let player = 0;
    let dealer = 0;

    const stand_btn = document.getElementById("deal-2");
    const deal_btn = document.getElementById("deal-3");
    document.getElementById("deal-1").addEventListener('click' , function(){
        var deck = [ 2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        var single = deck[Math.floor(Math.random()*deck.length)];
        console.log(single);
        let card = document.createElement('img');
        card.classList.add("size");
        card.src = `${single}.png`;
        document.getElementById("your-area").appendChild(card);
        card.style.animation = "flipping 0.5s ease";
        /*jquery for automatic scroll*/
        $('#your-area').animate({
            scrollTop: $('#your-area').get(0).scrollHeight}, 200); 
       
         /*matching the player-score*/
         var player_score = 0;
         if( (single === 'Q') || (single === 'J')  || (single === 'K')  )
         {
            player_score = player_score +  10 ;
         }   
         else if ( single === 'A' )
        {
            player_score = player_score + 11;
        }  
        else {
            player_score = player_score + single;
        }
        console.log(player_score);
    });
    /*document.getElementById("deal-3").addEventListener('click' , function(){
        
    });*/
}
blackjack();