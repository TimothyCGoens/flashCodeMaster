let tableitems = document.getElementById('tableitems')
let logOutBtn = document.getElementById('logOutBtn')

let database = firebase.database()


function displayFavorites() {

  database.ref("users")
  .on('value',function(snapshot){
    let favorites = []
    let userId = firebase.auth().currentUser.uid
    snapshot.forEach((childSnapshot) => {
        if(childSnapshot.key == userId) {
          for(key in childSnapshot.val().cards) {
          favorites.push(`<tr><td>${(childSnapshot.val().cards[key].language)}</td>
                          <td>${(childSnapshot.val().cards[key].term)}</td>
                          <td>${(childSnapshot.val().cards[key].definition)}</td>
                          <td><button id="deleteBtn" onclick="deleteTerm('${key}')"> Delete </button></td></tr>`)
          }
          tableitems.innerHTML = favorites.join(" ")
        }
      })
    })
  }

  function deleteTerm(key) {
   console.log('clicked')
    let usersRef = database.ref('users')
    let user = usersRef.child(firebase.auth().currentUser.uid)
    let cards = user.child('cards')
    cards.child(key).remove()
    pageRefresh()
  }

  function pageRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod)
}

 displayFavorites()

logOutBtn.addEventListener('click',function(){
    console.log('clicked')
   firebase.auth().signOut().then(function(){
       console.log("signed out")
       console.log(firebase.auth().currentUser)
   }).catch(function(){
   })
   window.location.replace("../login.html")
 })
