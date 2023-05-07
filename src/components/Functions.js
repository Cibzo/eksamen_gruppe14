import { mygames, store } from "../data/games"


export let randIndex = []
export let sortedIndex = []


//const data = store.length && mygames.length

let data = store.length

while (randIndex.length < data) {
        let index = Math.floor(Math.random()*data)
        if (!randIndex.includes(index)) {
            randIndex.push(index)
        }
    }
