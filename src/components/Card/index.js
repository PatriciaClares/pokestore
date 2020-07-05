import React, { useEffect, useState } from "react";
import { specficPokemon } from '../../services/api'
import * as S from "./styled";

export default function Card({pokemon, pokemonCart}) {

    const [currentPokemon, setCurrentPokemon] = useState([])

    useEffect(() => {
        async function loadPokemon() {
                const {id, name, order} =  await specficPokemon(pokemon.name).then(result => result)
                setCurrentPokemon({id,
                    name,
                    order, 
                    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`})
        }
            loadPokemon()
    }, [pokemon])
    
    return (
           <>
               <S.divCard>
                    <S.imgCard src={currentPokemon.image} alt="Avatar" style={{width:'80%'}} />
                    <S.cardBody>
                        <S.cardDescription>
                            <S.price>R${currentPokemon.order}</S.price>
                            <S.name>{currentPokemon.name}</S.name>
                        </S.cardDescription>
                        <S.cardButton onClick={() => pokemonCart(currentPokemon)}>Adicionar <S.cartIcon /></S.cardButton> 
                    </S.cardBody>
                </S.divCard>
           </>
    );


  
  }
  