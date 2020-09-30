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
    var player_score = 0;
    var dealer_score = 0;
    var iter = 0;
    const stand_btn = document.getElementById("deal-2");
    const deal_btn = document.getElementById("deal-3");
   
        document.getElementById("deal-1").addEventListener('click' , function(){
        if(player_score <=21)  {
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
            iter += 1;
            console.log(`no of iteration${iter}`);
           
             /*matching the player-score*/
            
             if( (single === 'Q') || (single === 'J')  || (single === 'K')  )
             {
                player_score = player_score +  10 ;
             }   
             else if ( single === 'A' )
            {
                    if( (player_score + 11) > 21)  {
                        player_score = player_score + 1;
                    }
                    else {
                        player_score = player_score + 11;
                    }
            }  
            else {
                player_score = player_score + single;
            }
            console.log(`playerscore ${player_score}`);
            setTimeout(function(){ document.getElementById("player-score").innerHTML = player_score; }, 60);
            
        }
        if(player_score >21)  {
            setTimeout(function(){ 
                document.getElementById("player-score").innerHTML = "BUST!"
                document.getElementById("player-score").style.color = "red"
             }, 80);
           
        }
        });

        /*Deal button logic*/
    document.getElementById("deal-3").addEventListener('click' , function() {
        document.getElementById("dealer-score").style.color = "black";
        document.getElementById("player-score").style.color = "black";
        var resetimage_player = document.getElementById("your-area").querySelectorAll('img');
        for( i=0; i< resetimage_player.length; i++)  {
            resetimage_player[i].remove();
            player_score = 0;
            document.getElementById("player-score").innerHTML = 0;   
        }
        for( i=0; i< resetimage_dealer.length; i++)  {
            resetimage_dealer[i].remove();
            dealer_score = 0;
            document.getElementById("dealer-score").innerHTML = 0;   
        }
    });

    /*Stand button logic starts here*/ 
    document.getElementById("deal-2").addEventListener('click' , function(){
        var i = 0;
        //while()
        if(player_score <=21)  {
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
            iter += 1;
            console.log(`no of iteration${iter}`);
           
             /*matching the player-score*/
            
             if( (single === 'Q') || (single === 'J')  || (single === 'K')  )
             {
                player_score = player_score +  10 ;
             }   
             else if ( single === 'A' )
            {
                    if( (player_score + 11) > 21)  {
                        player_score = player_score + 1;
                    }
                    else {
                        player_score = player_score + 11;
                    }
            }  
            else {
                player_score = player_score + single;
            }
            console.log(`playerscore ${player_score}`);
            setTimeout(function(){ document.getElementById("player-score").innerHTML = player_score; }, 60);
            
        }
        if(player_score >21)  {
            setTimeout(function(){ 
                document.getElementById("dealer-score").innerHTML = "BUST!"
                document.getElementById("dealer-score").style.color = "red"
             }, 80);
           
        }

    });
}
blackjack();