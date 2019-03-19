// Python

let pythondef = document.getElementById("pythondef")
let pythonanswer = document.getElementById('pythonanswer')
let nextbutton = document.getElementById('nextbutton')

let database = firebase.database()

pythonflashcards.map(function(question){
  console.log(question.Definition)
})
