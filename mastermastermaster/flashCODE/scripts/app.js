let cardDef = document.getElementById("cardDef")
let cardTerm = document.getElementById('cardTerm')
let nextButton = document.getElementById('nextButton')
let previousButton = document.getElementById('previousButton')
let faveButton = document.getElementById('faveButton')
let language = document.getElementById('language').value
const placeHolderExample = `<span>  </span>`

let languageObject = {
  python: pythonFlashCards,
  javascript: javascriptFlashCards,
  html: htmlFlashCards,
  commandLine: commandlineFlashCards,
  css: cssFlashCards,
  github: gitFlashCards
}

let cardArray = languageObject[language]

let counter = 0


cardTerm.innerHTML = cardArray[counter].Term
cardDef.innerHTML = cardArray[counter].Definition
cardEx.innerHTML = cardArray[counter].Example == undefined ? placeHolderExample : `<p><b><u>Example</b></u><br>${cardArray[counter].Example}</p>`
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
  // let example = cardArray[counter].Example == undefined ? placeHolderExample :
  let questionItem = `<p>${cardArray[counter].Term}</p>`
  let solutionItem = `<p>${cardArray[counter].Definition}</p>`
  let exampleItem = cardArray[counter].Example == undefined ? placeHolderExample : `<p><b><u>Example</b></u><br>${cardArray[counter].Example}</p>`

  cardTerm.innerHTML = questionItem
  cardDef.innerHTML = solutionItem
  cardEx.innerHTML = exampleItem

  buttonDisplay(counter)
  })

previousButton.addEventListener('click',function(){
  counter -= 1

  let questionItem = `<p>${cardArray[counter].Term}</p>`
  let solutionItem = `<p>${cardArray[counter].Definition}</p>`
  let exampleItem = cardArray[counter].Example == undefined ? placeHolderExample : `<p><b><u>Example</b></u><br>${cardArray[counter].Example}</p>`
  cardTerm.innerHTML = questionItem
  cardDef.innerHTML = solutionItem
  cardEx.innerHTML = exampleItem

  buttonDisplay(counter)

  })

faveButton.addEventListener('click',function(){
   let userId = firebase.auth().currentUser.uid
   let database = firebase.database()
   let usersRef = database.ref("users")
   let userRef = usersRef.child(userId)
   userRef.push({
     definition: cardArray[counter].Definition,
     term: cardArray[counter].Term,
     language: language
   })
 })
