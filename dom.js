function request(url, cb) {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  document.getElementById("submit").addEventListener("click", ()=> {
    
   if(document.querySelector('#word').value == ""){
      alert("there's no word to translate!");
    }

    
        
    const div = document.querySelector(".container");
    div.textContent = "";
    let word = document.getElementById("word").value;
    
      request(
        "https://api.giphy.com/v1/gifs/search?q=" +
        word +
          "&api_key=w5iGda16vtNszVULYss6thQOeeaNpdK6",
        data => {
            data.data.forEach(element => {
            const img = document.createElement("img");
            img.setAttribute("class", "image");
            img.setAttribute("src","https://media.giphy.com/media/"+element.id+"/giphy.gif");
            div.appendChild(img);
            
  });
        }
      );
    
  });