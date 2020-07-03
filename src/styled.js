import styled from 'styled-components'

export const divMap = styled.div`
    display:flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin: 10px 0 ;
    align-items: end;
    @media(min-width:1125px){
        justify-content: flex-start
    }

`

export const divCards = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width: 750px;
    
`

export const shoppingCart = styled.div`

`
export const button = styled.button`
    width:100px;
    border-radius: 10px;
    border:none;
    background-color: red;
    cursor:pointer;
    padding:5px;

    &:hover{
        outline:none;
        background-color: yellow;
    }

    &:focus, :active{
            outline: none
        }
    
`
export const divButton = styled.div`
    display:flex;
    justify-content:center
`


