window.addEventListener("load", domInitialize)

function domInitialize() {
  var gameText = document.getElementById('game-text').innerHTML;
  var textArray = splitString(gameText)
  var spannedText = wrapSpans(textArray)
  injectToDOM(spannedText)
}

function splitString(gameText){
  var textArray = gameText.split("")
  return textArray
}

function wrapSpans(textArray){
  for (var i = 0; i < textArray.length; i++){
    textArray[i] = '<span>' + textArray[i] + '</span>'
  }
  return textArray.toString().replace(/,/g, '')
}

function injectToDOM(spannedText){
  document.getElementById('game-text').innerHTML = spannedText;
}