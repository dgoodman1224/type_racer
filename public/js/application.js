window.addEventListener("load", initialize)

function initialize() {
  Game.listen()
}


//Closure
var Game = (function() {
  var correctCounter = 0

  return {

    shareVariable: function () {
      var counter = correctCounter
      return counter
    },

    listen: function () {
      window.addEventListener('keypress', this.keyPressed)
    },

    keyPressed: function (event) {
      var total = document.getElementsByTagName('span').length
      var letter = document.getElementsByTagName('span')[correctCounter]
      if (event.keyCode === letter.innerText.charCodeAt(0)) {
        letter.className = 'correct-letter'
        correctCounter++
        adjustOpacity()
      }
      if (correctCounter === total) {
        console.log("She doesn't actually want you.");
        Game.wait (2000)

      }
    },

    wait: function(time) {
      setTimeout( function() {
        window.location.href = "http://movies.netflix.com/WiMovie/House_of_Cards/70178217?trkid=13462050"
      }, time )

    }}})()