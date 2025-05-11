
        let timer=60;
        let score=0;
        let update=0;
        function makeBubble(){  

        var clutter ="";
        for( var i=1; i<=170; i++){
            let a = Math.floor(Math.random()*10);

             clutter +=`<div class="bubble">${a}</div>`;

        }

        document.querySelector(".headerBtm").innerHTML =clutter;
    }
        function runTimer(){
          let clear= setInterval(function(){

            if (timer>0){
                timer--;
                document.querySelector("#timerval").textContent=timer;
            }
            else{
                clearInterval(clear);
            }
               
            },1000);

        }
        function getNewhit(){
            update= Math.floor(Math.random()*10);
            document.querySelector("#hit").textContent=update; 
            
        };
        function scoreUpdate(){
            score+=10;
            document.querySelector("#scoreUp").textContent=score;
        }


        document.querySelector(".headerBtm").addEventListener("click",function(details){
          let increase= Number(details.target.textContent) ;
          if(increase===update){
            makeBubble();
            scoreUpdate();
            getNewhit();

          }
          else{
            alert("try again you guess the wrong😒😒");
          }
          
        });



        // scoreUpdate();
        getNewhit();
        makeBubble();
        runTimer();