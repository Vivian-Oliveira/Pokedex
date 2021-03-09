import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPokedex, goToPokemonsList } from '../../routes/coordinator';
import { PokeInfosContainer } from '../PokedexDetailScreen/styles';

const PokemonScreen = () => {
  const history = useHistory()
  const {pokedex} = useContext(GlobalStateContext)
  return (
    <>
       <Header title={"Pokédex"} 
      leftButtonFunction={() => goToPokemonsList(history)}
      />
      <PokeInfosContainer>
        {
          pokedex && pokedex.map((poke) => {
            return <PokemonCard key={poke.name} isPokedex pokemon={poke} />
          })
        }
      </PokeInfosContainer>
    </>
  );
}

export default  PokemonScreen;
