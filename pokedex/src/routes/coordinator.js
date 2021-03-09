export const goToPokemonsList = (history) =>{
    history.push("/")
}

export const goToPokemonsDetails = (history, name) =>{
    history.push(`/pokemon/${name}`)
}

export const goToPokedex = (history) =>{
    history.push("/pokedex")
}