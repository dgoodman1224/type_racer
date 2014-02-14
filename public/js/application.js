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
      var self = this
      var input = document.getElementById('input-field')
        input.addEventListener('keypress', self.keyPressed)
    },

    keyPressed: function (event) {
      var total = document.getElementsByTagName('span').length
      var letter = document.getElementsByTagName('span')[correctCounter]
      if (event.keyCode === letter.innerText.charCodeAt(0)) {
        correctCounter += 1
        console.log(true)
        adjustOpacity()
        if (correctCounter === total) {
          window.location.href = "http://movies.netflix.com/WiMovie/House_of_Cards/70178217?trkid=13462050"

        }
      } else {
        console.log(false)
      }
    }
  }
})()