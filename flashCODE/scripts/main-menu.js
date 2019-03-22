let logOutBtn = document.getElementById('logOutBtn')

logOutBtn.addEventListener('click',function(){
   console.log('clicked')
   firebase.auth().signOut().then(function(){
       console.log("signed out")
       console.log(firebase.auth().currentUser)
   }).catch(function(){
   })
   window.location.replace("../login.html")
 })
