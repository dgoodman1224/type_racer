window.addEventListener("load",initialize)

function initialize() {
  listen()
  i = 0
}

function listen() {
  var input = document.getElementById('input-field')
  input.addEventListener('keypress', keyPressed)
}

function keyPressed(event) {
  var letter = document.getElementsByTagName('span')[i]
  if (event.keyCode === letter.innerText.charCodeAt(0)) {
    i += 1
    console.log(true)
  } else {
    console.log(false)
  }


  }


