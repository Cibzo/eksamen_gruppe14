export default function RandomSort(input) {
    let randIndex = []
    while (randIndex.length < input.length) {
        let index = Math.floor(Math.random()*input.length)
        if (!randIndex.includes(index)) {
            randIndex.push(index)
        }
    }
    let randdata = (randIndex.map((randIndex) => (input[randIndex])))
    
    return randdata

}


