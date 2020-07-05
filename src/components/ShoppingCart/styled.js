import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const containerCart = styled.div`
    border: 1px solid #040404;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 10px;
    @media(min-width:1000px){
        position: fixed;
        right: 0;
        margin: 30px ;
        margin-top: 0;
        float: right;
    }
    
`

export const p = styled.p`
    display:flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
`
export const title = styled.h2`
    border-radius: 5px;
    background-color: #e64c3c; 
    display: flex;
    justify-content: center;
    padding: 5px;
    text-shadow: rgba(0, 0, 0, 0.15) 1.5px 1.5px 2px;`

export const listShoppingCart = styled.div`
    overflow-Y: scroll;
    scrollbar-color: yellow;
    min-width: 250px;
    max-height: 150px;
`
export const listItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 1px groove  rgba(0, 0, 0, 0.15); 
`

export const info = styled.div`
    display: flex;
    align-items: center;
`
export const closeIcon = styled(MdClose)`
    margin-left: 2px;
    color: white;
    background-color: #e64c3c;
    cursor: pointer;
`

export const img = styled.img`
    width: 35px;
    margin-right: 3px
`
export const total = styled.div`
    display: flex,;
    justify-content: space-between; 
    background-color: #e0e4e8;
    padding: 5px;
`
export const button = styled.button`
    border-radius: 5px;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 5px;
    background-color: #040404;
    color: white;
`
