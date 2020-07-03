import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md'

export const divCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(230,0,0,0.2);
    transition: 0.3s;
    margin: 0px 10px 20px 10px;
    width:150px
`
export const imgCard = styled.img`
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

    &:hover{
        background-color: red
    }
`
export const name = styled.strong`
    font-style:oblique
`