import React, { useEffect, useState } from "react";
import { allPokemon } from "./services/api";
import Header from "./components/Header";
import * as S from "./styled";
import Card from "./components/Card";
import ShoppingCart from './components/shoppingCart'
import Modal from './components/Modal'

import "./style.css";

export default function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokemonCart, setPokemonCart] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  const [showScroll, setShowScroll] = useState(false);
  const [showModalState, setShowModalState] = useState(false);  
  const limit = 6;

  useEffect(() => {
    loadPokemon(limit, offset);
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  function showModal() {
    if (showModalState === true)
      return (<Modal hideModal={() => {hideModal()}}/>);
  }
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
        <div style={{border:'1px solid #040404'}}>
        <h2
          style={{
            backgroundColor: '#e64c3c',
            display: "flex",
            justifyContent: "center",
            padding:'5px'
          }}
        >
          CARRINHO DE COMPRAS
        </h2>
          <S.shoppingCart >
            <ShoppingCart pokemonCart={pokemonCart} totalPrice={(price) => setTotalPrice(price + totalPrice)} />
          </S.shoppingCart>
          <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: '#e0e4e8', padding:'5px'}}>
            <strong>Total:</strong>
            <strong>R$ {totalPrice}</strong>
          </div>
          <button onClick={() => endShop ()} style={{display:'flex', width:'100%', justifyContent:'center', padding:'5px', backgroundColor:'#040404', color:'white'}}>FINALIZAR COMPRA</button>
        </div>
      </S.divMap>

      <S.divButton>
        <S.button onClick={() => loadPokemon(limit, offset)}>VER MAIS</S.button>
      </S.divButton>

      <S.scrollTop>
        <S.scrollTopIcone
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        />
      </S.scrollTop>
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
        localStorage.setItem('pokemons', JSON.stringify(pokemonCart.concat(pokemon)))
        setPokemonCart(JSON.parse(localStorage.getItem('pokemons')))
    }} 
        pokemon={pokemonCurrent} key={index} />;
    });
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
}
