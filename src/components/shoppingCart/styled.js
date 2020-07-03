import styled from 'styled-components'

export const containerCart = styled.div`
    border: 1px solid #040404;
`
export const title = styled.h2`
    background-color: #e64c3c; 
    display: flex;
    justify-content: center;
    padding: 5px;
`

export const listShoppingCart = styled.div`
    overflow-Y: scroll;
    scrollbar-color: yellow;
    max-width: 300px;
    max-height: 150px;
`
export const listItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

export const info = styled.div`
    display: flex;
    align-items: center;
`
export const img = styled.img`
    width: 50px;
`
export const total = styled.div`
    display: flex,;
    justify-content: space-between; 
    background-color: #e0e4e8;
    padding: 5px;
`
export const button = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 5px;
    background-color: #040404;
    color: white;
`

/*
export const total = styled.img`
`
*/