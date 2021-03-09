import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/url'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [pokemonNames, setPokemonsName] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonNames()
    }, [])

    useEffect(() => {
        const newList = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
            .then((res) => {
                newList.push(res.data)
                if(newList.length === 20){
                    const orderedList = newList.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            })
            .catch((err) => console.log(err.message))
        })
        
    }, [pokemonNames])

    const getPokemonNames = () => {
        axios.get(`${BASE_URL}/pokemon`)
        .then((res) => setPokemonsName(res.data.results))
        .catch((err) => console.log(err. message))
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState