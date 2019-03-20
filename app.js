let cardDef = document.getElementById("cardDef")
let cardTerm = document.getElementById('cardTerm')
let nextButton = document.getElementById('nextButton')
let previousButton = document.getElementById('previousButton')
let language = document.getElementById('language').value

let languageObject = {
  python: pythonFlashCards,
  javascript: javascriptFlashCards,
  html: htmlFlashCards,
  commandLine: commandlineFlashCards,
  css: cssFlashCards
}

let cardArray = languageObject[language]

let counter = 0


cardDef.innerHTML = cardArray[counter].Term
cardTerm.innerHTML = cardArray[counter].Definition
previousButton.style.visibility = 'hidden'

function buttonDisplay(counter) {
  if(counter <= 0) {
    previousButton.style.visibility = 'hidden'
  }
  else if (counter >= cardArray.length - 1) {
    nextButton.style.visibility = 'hidden'
  }
  else {
    previousButton.style.visibility = 'visible'
    nextButton.style.visibility = 'visible'
  }
}

nextButton.addEventListener('click',function(){
  counter += 1

  let questionItem = `<p>${cardArray[counter].Term}</p>`
  let solutionItem = `<p>${cardArray[counter].Definition}</p>`
  cardDef.innerHTML = solutionItem
  cardTerm.innerHTML = questionItem

  buttonDisplay(counter)
  })

previousButton.addEventListener('click',function(){
  counter -= 1

  let questionItem = `<p>${cardArray[counter].Term}</p>`
  let solutionItem = `<p>${cardArray[counter].Definition}</p>`
  cardDef.innerHTML = solutionItem
  cardTerm.innerHTML = questionItem

  buttonDisplay(counter)

  })
