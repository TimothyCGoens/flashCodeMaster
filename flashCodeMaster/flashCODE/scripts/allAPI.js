let languages = document.getElementById('language').value
let list = document.getElementById("list")

    function loadPage(){
        if (languages == 'html'){
            value = 1004
        }
        if (languages == 'commandLine'){
            value = 1005
        }
        if (languages == 'css'){
            value = 1003
        }
        if (languages == 'javascript'){
            value = 1001
        }
        if (languages == 'github'){
            value = 1006
        }
        if (languages == 'python'){
            value = 1002
        }


        let bookURL = 'https://www.googleapis.com/books/v1/users/107552229442176176141/bookshelves/' + value + '/volumes?key=AIzaSyA-Td3_FxqXbIKV69sdiwZtiUFOvS347hQ'


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
