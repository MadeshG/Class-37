class Game{
    constructor(){
    }
    getState(){
       
       var gamestateref=database.ref('gameState') 
       gamestateref.on("value",function(data){
           gameState=data.val()
       })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(25)
        fill ("blue")
        text ("start",120,100)
        Player.getPlayerInfo()
        if(allPlayers !== undefined  ){
            var y=130
            for(var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red")

                }
                else{
                    fill("black")
                }
                y=y+20
                textSize(15)
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,y)

            }

        }
        if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance=player.distance+50
            player.update()
        }
    }
    }








    

    


    

    


    
