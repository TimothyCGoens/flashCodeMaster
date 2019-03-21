
let list = document.getElementById("list")

    function loadPage(){
        let bookURL = "https://www.googleapis.com/books/v1/users/107552229442176176141/bookshelves/1004/volumes?key=AIzaSyA-Td3_FxqXbIKV69sdiwZtiUFOvS347hQ"


        fetch(bookURL)
        .then(function(response){
          return response.json()
        }).then(function(myJSON){

          myJSON.items.forEach(function(items){
           let bookLIItems =
                      `<div id="bookDisplay">
                      <a href="${items.volumeInfo.infoLink}">
                      <img src='${items.volumeInfo.imageLinks.smallThumbnail}' id="pics">
                      </a>
                      </div>`

            list.innerHTML += bookLIItems
          })



      })
    }


    loadPage()
