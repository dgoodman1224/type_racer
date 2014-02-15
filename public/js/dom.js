window.addEventListener("load", domInitialize)

function domInitialize() {
  var gameText = document.getElementById('game-text').innerHTML;
  var textArray = splitString(gameText)
  var spannedText = wrapSpans(textArray)
  injectToDOM(spannedText);
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

function adjustOpacity(){
  var kate = document.getElementById('kate');
  var bubble = document.getElementById('bubble')
  var counter = Game.shareVariable()
  var lengthOfText = document.getElementsByTagName('span').length
  kate.style.opacity = counter / lengthOfText;
  bubble.style.opacity = counter / lengthOfText;
}