import { store } from "../data/games"

export let randIndex = []
    

while (randIndex.length < store.length) {
        let index = Math.floor(Math.random()*store.length)
        if (!randIndex.includes(index)) {
            randIndex.push(index)
        }
    }

