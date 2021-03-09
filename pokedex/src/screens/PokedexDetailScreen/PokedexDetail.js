import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { ImagesContainer, ImgWrapper, MovesContainer, PokeInfosContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer } from './styles'

const PokedexDetail = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const {name} = useParams()
  const{pokemons} = useContext(GlobalStateContext)
  const history = useHistory()
  

  useEffect(() => {
    const currentPokemon = pokemons.find((item) => {return item.name === name})
      setSelectedPokemon(currentPokemon)
    
  }, [])
  return (
    <div >
      <Header 
        title={"Detalhes do Pokemon"}
        leftButtonFunction={() => history.goBack()}
        showRightButton
      />
      <PokeInfosContainer>
        {selectedPokemon && selectedPokemon.sprites &&
        <ImagesContainer>
          <ImgWrapper src={selectedPokemon.sprites.front_default} />
          <ImgWrapper src={selectedPokemon.sprites.back_default} />
        </ImagesContainer>
        }
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          { selectedPokemon && selectedPokemon.stats &&
          selectedPokemon.stats.map((stat) => {
            return(
              <p key={stat.stat.name}>
                <strong>{stat.stat.name}:</strong>
                {stat.base_stat}
              </p>
            )
          })

          }
        </StatsContainer>
        
          <TypeAndMovesContainer>
            <TypesContainer>
            { selectedPokemon && selectedPokemon.types &&
          selectedPokemon.types.map((type) => {
            return(
              <p key={type.type.name}>
                <strong>{type.type.name}</strong>
              </p>
            )
          })

          }
            </TypesContainer>
            <MovesContainer>
            <TitleContainer>Principais ataques</TitleContainer>
              {selectedPokemon && selectedPokemon.moves &&
                selectedPokemon.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  );
                })}
            </MovesContainer>
          </TypeAndMovesContainer>
        
      </PokeInfosContainer>
    </div>
  );
}

export default PokedexDetail;
