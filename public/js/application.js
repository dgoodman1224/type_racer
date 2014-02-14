window.addEventListener("load", initialize)

function initialize() {
  Game.listen()
}

window.onbeforeunload = function() { return "You work will be lost."; };

//Closure
var Game = (function() {
  var correctCounter = 0
  // var self = this

  return {


    listen: function () {
      window.addEventListener('keypress', this.keyPressed)
    },

    keyPressed: function (event) {
      var total = document.getElementsByTagName('span').length
      console.log("This is the total ammount of letters    " + total)
      var letter = document.getElementsByTagName('span')[correctCounter]
      if (event.keyCode === letter.innerText.charCodeAt(0)) {
        letter.className = 'correct-letter'
        correctCounter++
        console.log(true)
      }
      if (correctCounter === total) {
        console.log("Wait for me");
        Game.wait (5000)

      }
    },

    wait: function(time) {
      window.onbeforeunload = null;
      setTimeout( function() {
        window.location.href = "http://movies.netflix.com/WiMovie/House_of_Cards/70178217?trkid=13462050"
      }, time )

    }}})()
