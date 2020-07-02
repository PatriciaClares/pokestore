import React, { useState, useEffect } from "react";
import * as S from "./styled.js";

export default function ShoppingCart({ pokemonCart, totalPrice }) {

  useEffect(() => {

    if (pokemonCart) {
      pokemonCart.forEach((element) => {
        totalPrice(element.order)
      });
    }
  }, [pokemonCart]);

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column',marginBottom:'10px'}}>
        {pokemonCart.map((pokemonCurrent, index) => {
          return (
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems:'center', padding:'0 20px' }}
              key={index}
            >
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src={pokemonCurrent.sprites.front_shiny} alt="Avatar" style={{width:'50px'}} />
                    <p>{pokemonCurrent.name}</p>
                    
                </div>
              <p>R$ {pokemonCurrent.order}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
