import React from "react";
import * as S from "./styled.js";

export default function ShoppingCart({pokemonCart, totalPrice, endShop }) {

  return (
    <S.containerCart>
      <S.title>CARRINHO DE COMPRAS</S.title>
      <S.listShoppingCart>
        {pokemonCart ? pokemonCart.map((pokemonCurrent, index) => {
          return (
            <S.listItem
              key={index}>
                <S.info>
                    <S.img src={pokemonCurrent.sprites.front_shiny} alt="Avatar" />
                    <p>{pokemonCurrent.name}</p>
                    
                </S.info>
              <p>R$ {pokemonCurrent.order}</p>
            </S.listItem>
          );
        }): <p>Carrinho vazio :(</p>}
      </S.listShoppingCart>
      <S.total>
            <h2>Total:</h2>
            <strong>R$ {totalPrice? totalPrice : 0}</strong>
      </S.total>
      <S.button onClick={() => endShop()}>FINALIZAR COMPRA</S.button>
    </S.containerCart>
  );
}
