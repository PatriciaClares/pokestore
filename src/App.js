import React, { useEffect, useState } from "react";
import { allPokemon } from "./services/api";
import Header from "./components/Header";
import * as S from "./styled";
import Card from "./components/Card";

import "./style.css";

export default function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokemonSearchName, setPokemonSearchName] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showScroll, setShowScroll] = useState(false);
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

  return (
    <>
      <Header pokemonSearchName={(pokemon) => {
        setOffset(0)
        setPokemonArray([pokemon])}}
      />
      <S.divMap>{renderCards(pokemonArray)}</S.divMap>
      <S.divButton>
        <S.button onClick={() => loadPokemon(limit, offset)}>VER MAIS</S.button>
      </S.divButton>
      <S.scrollTop>
        <S.scrollTopIcone
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        />
      </S.scrollTop>
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
    checkArraySize(pokemon);
    return pokemon.map((pokemonCurrent, index) => {
      return <Card pokemon={pokemonCurrent} key={index} />;
    });
  }
  function checkArraySize() {
    if (pokemonArray.length > 6) {
      delete pokemonArray[0];
    }
  }
}
