var player = ["Cadu", "Pedro", "Deborah", "Paulinho", "Antônio", "Tavinho"];
var friend = ["Cadu", "Pedro", "Deborah", "Paulinho", "Antônio", "Tavinho"];

function secretFriend (yourName){

    //sorteia amigo oculto
    var randomNumber = Math.floor((Math.random()*friend.length));
    var yourFriend = friend[randomNumber];

    if (yourFriend == yourName){
        console.log("Você se tirou! Tire novamente seu amigo oculto");
    }
    else {
        console.log("Você tirou " + yourFriend +"!");
    //retira jogador e amigo oculto
    for (i=0; i < player.length; i++){
        if (yourName == player[i]) {
            player.splice(i,1);
            }    
        }
    for (i=0; i < friend.length; i++){
        if (yourFriend == friend[i]) {
            friend.splice(i,1);
            }    
        }
    }
}

secretFriend("Pedro");
