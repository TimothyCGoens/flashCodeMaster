let faveUl = document.getElementById('faveUl')
let tableitems = document.getElementById('tableitems')


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
        favorites.push(`<tr><td>${(childSnapshot.val()[key].language)}</td>
                        <td>${(childSnapshot.val()[key].term)}</td>
                        <td>${(childSnapshot.val()[key].definition)}</td>
                        <td> <button id="deleteBtn" onclick="deleteTerm('${childSnapshot.val()[key]}')"> Delete </button></td></tr>`)
        }
      tableitems.innerHTML = favorites.join(" ")
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
