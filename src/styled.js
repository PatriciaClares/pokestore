import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'

export const divMap = styled.div`
    display:flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    margin: 10px 0 ;
    align-items: end;
`

export const divCards = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width: 750px;
    
`

export const shoppingCart = styled.div`
    overflow-Y: scroll;
    scrollbar-color: yellow;
    max-width:300px;
    max-height:150px;
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
export const scrollTop = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right:10px;
`

export const scrollTopIcone = styled(FaArrowUp)`
    display:flex;
    position:fixed;
    background-color:yellow;
    border-radius:15px;
    width:35px;
    padding:5px;
    bottom: 50px;
    height: 30px;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;   

    &:hover{
        background-color: red
    }
    
`


