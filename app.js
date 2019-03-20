// Python

let pythondef = document.getElementById("pythondef")
let pythonanswer = document.getElementById('pythonanswer')
let nextbutton = document.getElementById('nextbutton')


let database = firebase.database()

let counter = 0

nextbutton.addEventListener('click',function(){

let questionItem = `<p> ${pythonflashcards[counter].Term}</p>`
let solutionItem = `<p>${pythonflashcards[counter].Definition}</p>`
counter += 1
pythondef.innerHTML = questionItem
pythonanswer.innerHTML = solutionItem
})
