// vues YOUTUBE
import { compteur } from "./selector.js"



export
function getViews() {
    
    fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCaRUPds-SPouHDU-R0_Om7A&key=AIzaSyDqyOegdlGVK4qqnENs8OrcpAwk7Nap7B4')
        .then( res => {
            return res.json()
        })
            .then(data => {

                compteur[0].innerHTML= data.items[0].statistics.viewCount
            })

}
