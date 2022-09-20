// function aleatoire 
export
function random(min, max) {
    let step1 = max - min +1
    let step2 = Math.random()* step1
    const index = Math.floor(step2)+min

    return index
}


