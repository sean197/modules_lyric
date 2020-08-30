// Improts UI js variables
import { API } from "./api.js";
import * as UI from "./ui.js";

UI.searchForm.addEventListener("submit", function(e){
    e.preventDefault();

    // read the form data
    const artistName = UI.artistInput.value,
          songName = UI.songInput.value;

    // Validate the form
    if(artistName === "" || songName === ""){
        UI.messageDiv.innerHTML = "All Fields are Mandatory";
        UI.messageDiv.classList.add("error");
        setTimeout(function(){
            UI.messageDiv.innerHTML = "";
            UI.messageDiv.classList.remove("error");
        }, 3000)
    } else {
        // Query the API
        const lyric = new API(artistName, songName);
        lyric.queryAPI()
            .then(function(data){
                if(data.lyric.lyrics){
                // data.lyric // from redt api
                let result = data.lyric.lyrics;
                UI.resultDiv.textContent = result;
            } else {
                // No result found
                UI.messageDiv.innerHTML = "No lyrics found";
                UI.messageDiv.classList.add("error");
                setTimeout(function(){
                    UI.messageDiv.innerHTML = "";
                    UI.messageDiv.classList.remove("error");
                    UI.searchForm.reset();
                }, 3000);

            }
         })
    }
}) 