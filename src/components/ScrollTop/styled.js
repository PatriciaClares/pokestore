import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'


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
export const scrollTop = styled.div`
display:flex;
justify-content:flex-end;
margin-right:10px;
`
