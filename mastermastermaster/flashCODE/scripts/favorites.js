let faveUl = document.getElementById('faveUl')

let database = firebase.database()


function displayFavorites() {
    
database.ref("users")
.on('value',function(snapshot){
  let favorites = []
  let userId = firebase.auth().currentUser.uid
  snapshot.forEach((childSnapshot) => {
      if(childSnapshot.key == userId) {
        console.log(childSnapshot.key)
        for( key in childSnapshot.val()) {
        favorites.push(`<li>language: ${(childSnapshot.val()[key].language)} term: ${(childSnapshot.val()[key].term)}, definition: ${(childSnapshot.val()[key].definition)}</li>
                        <button id="deleteBtn" onclick="deleteTerm('${childSnapshot.val()[key]}')"> Delete </button>`)
        }  
  faveUl.innerHTML = favorites.join(" ")
    }
  })
})
}
displayFavorites()

function deleteTerm(){
    console.log('clicked')
    let uid = firebase.auth().currentUser.uid 
    database.ref("users").child(uid).child(key).remove()
  }