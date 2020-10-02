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

        winnercalc(player_score , dealer_score);

        document.getElementById("dealer-score").style.color = "black";
        document.getElementById("player-score").style.color = "black";
       
        //To clear the player side area
        var resetimage_player = document.getElementById("your-area").querySelectorAll('img');
        for( i=0; i< resetimage_player.length; i++)  {
            resetimage_player[i].remove();
            player_score = 0;
            document.getElementById("player-score").innerHTML = 0;   
        }
        
        //To clear the dealer side area.
        var resetimage_dealer = document.getElementById("dealer-area").querySelectorAll('img');
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
        if(dealer_score <=21)  {
            var deck_d = [ 2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
            var single_d = deck_d[Math.floor(Math.random()*deck_d.length)];
            console.log(`Dealer choice ${single_d}`);
            let card_d = document.createElement('img');
            card_d.classList.add("size");
            card_d.src = `${single_d}.png`;
            document.getElementById("dealer-area").appendChild(card_d);
            card_d.style.animation = "flipping 0.5s ease";
            /*jquery for automatic scroll*/
            $('#dealer-area').animate({
                scrollTop: $('#dealer-area').get(0).scrollHeight}, 200);
            /*iter += 1;
            console.log(`no of iteration ${iter}`);*/
           
             /*matching the player-score*/
            
             if( (single_d === 'Q') || (single_d === 'J')  || (single_d === 'K')  )
             {
                dealer_score = dealer_score +  10 ;
             }   
             else if ( single_d === 'A' )
            {
                    if( ( dealer_score + 11) > 21)  {
                        dealer_score = dealer_score + 1;
                    }
                    else {
                        dealer_score = dealer_score + 11;
                    }
            }  
            else {
                dealer_score = dealer_score + single_d;
            }
            console.log(`playerscore ${dealer_score}`);
            setTimeout(function(){ document.getElementById("dealer-score").innerHTML = dealer_score; }, 60);
            
        }
        if(dealer_score >21)  {
            setTimeout(function(){ 
                document.getElementById("dealer-score").innerHTML = "BUST!"
                document.getElementById("dealer-score").style.color = "red"
             }, 80);
           
        }
       
    });
    
}
function winnercalc( player_score, dealer_score )  {
    var winner ;
    if( player_score <= 21) {
        
        if( (player_score > dealer_score) || (dealer_score > 21) )  {
            console.log(`Player Wins!`);
            winner = "Player";
        }
        else if(player_score < dealer_score) {
            console.log(`Player Loses!`);
            winner = "Dealer";
        }
        else if( player_score === dealer_score )  {
            console.log(`Game Tie!`);
        }
    } else if ((player_score > 21) && (dealer_score <= 21))  {
        console.log(`Player Loses!`);
        winner = "Dealer";
    }
    else if ((player_score > 21) && (dealer_score > 21)) {
        console.log(`Game drew!`);
    }
    console.log(`Winner is ${winner}`);
    return winner;
}
function DisplayResult(winenr)  {
    var display_text , text_color ;

    if( winner === "Player" )  {
        display_text = "Player Wins!";
        text_color = "green";
    }
    else if( winner === "Dealer" )  {
        display_text = "Dealer Wins!";
        text_color = "red";
    }
    else  {
        display_text = "You drew!";
        text_color = "black";
    }
    document.getElementById("sample-text").
}
blackjack();