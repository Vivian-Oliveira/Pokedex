import React, { useContext } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonsDetails } from "../../routes/coordinator";
import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg,
} from "./styles";

const PokemonCard = ({pokemon, isPokedex}) => {
  const history = useHistory()
  const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
    const newPokemonsList = [...pokemons]
    newPokemonsList.splice(pokeIndex, 1)
    const newPokedexList = [...pokedex, pokemon]
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(orderedPokedex)
    setPokemons(newPokemonsList)
  }

  const removeToPokedex = () => {
    const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
    const newPokedexList = [...pokedex]
    newPokedexList.splice(pokeIndex, 1)

    const newPokemonsList = [...pokemons, pokemon]
    setPokedex(newPokedexList)
    setPokemons(newPokemonsList)
  }

  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg 
        src={pokemon.sprites && pokemon.sprites.front_default}
        alt={pokemon.name}
        />
      </ImgContainer>
      <ButtonsContainer>
        <button onClick={isPokedex? removeToPokedex : addToPokedex}>
         {isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
          </button>
        <button onClick={() => goToPokemonsDetails(history, pokemon.name)}>
          Ver detalhes
          </button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
