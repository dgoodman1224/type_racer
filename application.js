window.addEventListener("load",initialize)

function initialize() {
  listen()
  console.log("Sup Homes")
}

function listen() {
  var input = document.getElementById('input-field')
  input.addEventListener(onkeypress, keyPressed)
  console.log(input)
}

function keyPressed() {
  console.log("Key was pressed")
}


