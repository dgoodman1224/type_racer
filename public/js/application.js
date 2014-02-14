window.addEventListener("load", initialize)

function initialize() {
  Game.listen()
}


//Closure
var Game = (function() {
  var correctCounter = 0
  var incorrectCounter = 0

  return {
    listen: function () {
      var self = this
      window.addEventListener('keypress', self.keyPressed)
    },

    keyPressed: function (event) {
      var total = document.getElementsByTagName('span').length
      console.log("This is the total ammount of letters    " + total)
      var letter = document.getElementsByTagName('span')[correctCounter]


      if (event.keyCode === letter.innerText.charCodeAt(0) && incorrectCounter === 0) {
        var letter = document.getElementById('letter-' + correctCounter)
        letter.className = 'correct-letter'
        correctCounter++
        console.log(true)
        if (correctCounter === total) {
          window.location.href = "http://movies.netflix.com/WiMovie/House_of_Cards/70178217?trkid=13462050"
        }
      } else if (event.keyCode === 48 && incorrectCounter !== 0){
        incorrectCounter--
        document.getElementById('show-counter').innerHTML = incorrectCounter
      } else {
        incorrectCounter++
        document.getElementById('show-counter').innerHTML = incorrectCounter

      }
    }
  }
})()