window.addEventListener("load", initialize)

function initialize() {
  Game.listen()
}


//Closure
var Game = (function() {
  var correctCounter = 0


  return {
    listen: function () {
      console.log("this is me outside event listener", this)
      var self = this
      var input = document.getElementById('input-field')
        console.log("this is me inside event listener", this)
        input.addEventListener('keypress', self.keyPressed)
    },

    keyPressed: function (event) {
      var letter = document.getElementsByTagName('span')[correctCounter]
      if (event.keyCode === letter.innerText.charCodeAt(0)) {
        correctCounter += 1
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
})()


//Object Literal
// GameObjLiteral = {
//   correctCounter: 0,

//   listen: function () {
//     var input = document.getElementById('input-field')
//     input.addEventListener('keypress', function (e) {
    // Game.keyPressed(e){

    // })
//   },

//   keyPressed: function (event) {
//     var letter = document.getElementsByTagName('span')[i]
//     if (event.keyCode === letter.innerText.charCodeAt(0)) {
//       i += 1
//       console.log(true)
//     } else {
//       console.log(false)
//     }
//   }
// }


