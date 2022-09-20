// Recuperation 
import{ songs } from './import/songs.js'
import { random } from './import/function.js'
import { audio, playBtn, visible , compteur } from "./import/selector.js"
import {getViews} from './import/compteur.js'

getViews()
 


playBtn[0].addEventListener('click' , event => {

    let index = random(0 , songs.length-1)
    visible.animation = 'pulse 2s linear 0s  none'
    visible.animationFillMode = 'forwards' 
    

    
    audio.volume = 0.25
    audio.play()

    audio.onended = event => {
    let index = random(0 , songs.length-1)

    audio.src=`./songs/${songs[index]}`
    console.log('piste suivante:' ,songs[index]);
    audio.play()
}
    
})








 



 




 


        
















