import React, { useContext } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
//import GlobalState from "../../global/GlobalState";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routes/coordinator";
import { PokeListContainer } from "./styles";

const PokemonList = () => {
  const { pokemons } = useContext(GlobalStateContext);
  const history = useHistory()
  return (
    <>
      <Header title={"Lista de Pokémons"} 
      leftButtonFunction={() => goToPokedex(history)}
      />
      <PokeListContainer>
        {pokemons.map((poke) => {
          return <PokemonCard key={poke.name} pokemon={poke} />;
        })}
      </PokeListContainer>
    </>
  );
};

export default PokemonList;
