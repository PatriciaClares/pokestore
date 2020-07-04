import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md'

export const divCard = styled.div`
    transition: 0.3s;
    margin: 0px 10px 20px 10px;
    width:150px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);

`
export const imgCard = styled.img`
`

export const cardDescription = styled.div`
    display:flex;
    font-size: 10px;
    flex-direction: column-reverse;
    align-items: center
`
export const price = styled.strong`
    font-style: italic;
    font-size: 15px;
    color: red;
    margin: 3px;
`

export const cardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center
`

export const cartIcon = styled(MdAddShoppingCart)`
    width:30px;
`

export const cardButton = styled.button`
    width:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    padding:5px 3px;
    background-color: #040404;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;

    &:hover{
        background-color: red
    }
`
export const name = styled.strong`
    font-style:oblique;
    font-size: 15px
`