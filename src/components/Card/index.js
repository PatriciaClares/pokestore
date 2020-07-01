import React, { useEffect, useState } from "react";
import { specficPokemon } from '../../services/api'
import * as S from "./styled";

export default function Card({pokemon}) {

    const [currentPokemon, setCurrentPokemon] = useState([])
    const [pokemonURLImage, setPokemonURLImage] = useState('');

    useEffect(() => {
        async function loadPokemon() {
                const {name, order, sprites} =  await specficPokemon(pokemon.name).then(result => result)
                setCurrentPokemon({name,order})
                setPokemonURLImage(sprites.front_shiny);
        }
            loadPokemon()
    }, [pokemon])
    
    return (
           <>
               <S.divCard>
                    <S.imgCard src={pokemonURLImage} alt="Avatar" style={{width:'100%'}} />
                    <S.cardBody>
                        <S.cardDescription>
                            <S.price>R$ {currentPokemon.order}</S.price>
                            <S.name>{currentPokemon.name}</S.name>
                        </S.cardDescription>
                        <S.cardButton>Adicionar <S.cartIcon /></S.cardButton> 
                    </S.cardBody>
                </S.divCard>
           </>
    );


  
  }
  