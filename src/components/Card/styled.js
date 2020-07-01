import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md'

export const divCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px 10px 20px 10px;
`
export const imgCard = styled.img`
    width: 100%;
`

export const cardDescription = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center
`
export const price = styled.strong`
    font-style: italic
`

export const cardBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center
`

export const cartIcon = styled(MdAddShoppingCart)`
    width:25px;
`

export const cardButton = styled.button`
    display:flex;
    align-items: center;
    padding:5px 3px;
    background-color: blue;
    border: none;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: red
    }
`
export const name = styled.strong`
    font-style:oblique
`