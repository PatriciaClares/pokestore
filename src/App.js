import React, { useEffect, useState } from "react";
import { allPokemon } from "./services/api";
import Header from "./components/Header";
import * as S from "./styled";
import Card from "./components/Card";
import ShoppingCart from './components/ShoppingCart'
import Modal from './components/Modal'
import ScrollTop from './components/ScrollTop'

import "./style.css";

export default function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokemonCart, setPokemonCart] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  const [showModalState, setShowModalState] = useState(false);  
  const limit = 6;

  useEffect(() => {
    loadPokemon(limit, offset);
  }, []);

  return (
    <>
      <Header pokemonSearchName={(pokemon) => {
        setOffset(0)
        setPokemonArray([pokemon])}}
      />
      <S.divMap>
        <S.divCards>
          {renderCards(pokemonArray)}
        </S.divCards>
       
        <ShoppingCart 
          endShop={() => endShop()} 
          pokemonCart={pokemonCart} 
          totalPrice={totalPrice} 
        />
      </S.divMap>

      <S.divButton>
        <S.button onClick={() => loadPokemon(limit, offset)}>VER MAIS </S.button>
      </S.divButton>

      <ScrollTop />
      {showModal()}
    </>
  );

  async function loadPokemon(limit, offset) {
    setOffset(offset + 10);
    let response = await allPokemon(limit, offset).then(
      (result) => result.results
    );
    setPokemonArray(pokemonArray.concat(response));
  }

  function renderCards(pokemon) {
    return pokemon.map((pokemonCurrent, index) => {
      return <Card pokemonCart={(pokemon) => { 
        sumPriceTotal(pokemon.order)
        savePokemon(pokemon)    
    }} 
        pokemon={pokemonCurrent} key={index} />;
    });
  }

  function showModal() {
    if (showModalState === true)
      return (<Modal hideModal={() => {hideModal()}}/>);
  }

  function endShop() {
    localStorage.clear()
    setPokemonCart([]);
    setTotalPrice(0);
    
    setShowModalState(true)
  }

  function hideModal(){
    setShowModalState(false);
  }

  function sumPriceTotal(value){
    setTotalPrice(value + totalPrice)
  }

  function savePokemon(pokemon){
    setPokemonCart(pokemonCart.concat(pokemon))
    localStorage.setItem('pokemons', JSON.stringify(pokemonCart))    
  }
}
