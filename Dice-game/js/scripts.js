function Player(name, spin, score) {
  this.name = name;
  this.spin = spin;
  this.score = score;
}

Player.prototype.spining = function() {
 var playerSpin = Math.floor((Math.random() * 6) + 1);
 $(".currentSpin").text(playerSpin);
    if (playerSpin === 1) {
      alert("You got a '1'! Next Player!");
      return this.spin = 0;
    } else {
      this.spin = (this.spin + playerSpin);
      return this.spin;
    }
}

Player.prototype.holding = function() {

  this.score = (this.spin + this.score);
  this.spin = 0;
  if(this.score >= 100){
    confirm("Congratulations! ");
    if (true) {
      location.reload();
    }
  }
  return this.score;

}




$(document).ready(function(){
  $("#firstPlayer").submit(function(event){
    event.preventDefault();

    var pOneInput = $("#firstPlayer-name").val();
    onePlayer = new Player(pOneInput, 0, 0);
    $(".firstPlayerName").text(onePlayer.name);
    $(".playOneDiv").hide();
  });

  $("#secondPlayer").submit(function(event){
    event.preventDefault();

    var pTwoInput = $("#secondPlayer-name").val();
    twoPlayer = new Player(pTwoInput, 0, 0);
    $(".secondPlayerName").text(twoPlayer.name);
    $(".playTwoDiv").hide();

  });

  $("#p1button").click(function(event){
    event.preventDefault();

    var oneSpin = onePlayer.spining();
    $(".p1spin").text(oneSpin);

  });
  $("#p2button").click(function(event){
    event.preventDefault();

    var twoSpin = twoPlayer.spining();
    $(".p2spin").text(twoSpin);

   });



  $(".p1hold").click(function(event){
    event.preventDefault();

    var oneScore = onePlayer.holding();
    $(".p1score").text(oneScore);
    $(".p1spin").text("");

  });
  $(".p2hold").click(function(event){
    event.preventDefault();

    var twoScore = twoPlayer.holding();
    $(".p2score").text(twoScore);
    $(".p2spin").text("");
  });

});
