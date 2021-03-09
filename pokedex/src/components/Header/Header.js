import React from "react";
import { useHistory } from "react-router";
import { goToPokedex } from "../../routes/coordinator";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./syles";

const Header = ({title, leftButtonFunction, showRightButton}) => {
  const history = useHistory()

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokédex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
        </LeftHeaderButton>
      <h1>{title}</h1>
      {showRightButton &&
       <RightHeaderButton onClick={() => goToPokedex(history)}>Ir para Pokedex</RightHeaderButton>
      }
     
    </HeaderContainer>
  );
};

export default Header;
