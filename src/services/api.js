import { get } from 'axios'

export function allPokemon (limit, offset){
    return get(` https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(result => result.data)
}

export function specficPokemon(name){
    return get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => result.data)
}