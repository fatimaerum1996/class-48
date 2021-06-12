class Game{
  constructor(){

  }

  getGameState(){
    database.ref('gameState').on('value', function(data){
      gameState = data.val();
      console.log(gameState);
     
      }
    })

    
    player1 = createSprite(400, 800, 20, 20);
    player1.addImage(player1_img);

    player2 = createSprite(400, 400, 20, 20);
    player2.addImage(player2_img);
    player2.scale = 0.2;

    player1.collide(ground1);
    player2.collide(ground2);

    players = [player1, player2];
    grounds = [ground1, ground2];
  }

  updateGameState(state){
    database.ref('/').update({gameState: state})
  }
  
  play(){
    players = [player1, player2];
    form.hide();
    Player.getPlayerInfo();

    var index = 0;
    var x= 50;
    var y = 100;
    var ySpacing = 200; 

    for(var plr in allPlayers){

      grounds[index].x = players[index].x;
       players[index].collide(grounds[index]);

       players[index].velocityY += 2;
       players[index].velocityX = 20;
      
       if(index + 1 == player.index){
         players[index].shapeColor = 'red';
         camera.position.x = players[index].x

          if(keyWentDown('space')){
            players[index].velocityY -= 40
          }

          player.xPos = players[index].x
          player.yPos = players[index].y
          player.updatePlayerInfo();

          
       }

       // This isn't working
       if (
        obstacleGroups[index] !== undefined &&
        obstacleGroups[index].isTouching(players[index])
      ) {
        
        gameState = 2;
       
      }

       index++;

       text(allPlayers[plr].name + " : " + allPlayers[plr].xPos + " , " + allPlayers[plr].yPos,
        200, ySpacing);
       ySpacing += 50 ;
      }

     this.spawnObstacles();

     
  }

 