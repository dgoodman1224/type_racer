window.addEventListener("load",initialize)

function initialize() {
  listen()
}

function listen() {
  var input = document.getElementById('input-field')
  input.addEventListener('keypress', keyPressed)
}

function keyPressed() {
  console.log("Key was pressed")
}


