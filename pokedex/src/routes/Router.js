import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokedexDetail from '../screens/PokedexDetailScreen/PokedexDetail'
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen'
import PokemonList from '../screens/PokemonsListScreen/PokemonsList'

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={PokemonList} />
            <Route exact path={"/pokemon/:name"} component={PokedexDetail} />
            <Route exact path={"/pokedex"} component={PokemonScreen} />
        </Switch>
        </BrowserRouter>
    )
}
export default Router;