import styled from  'styled-components'
import { FiGithub } from "react-icons/fi";

export const Header = styled.div`
    padding: 10px 0 10px 10px;
    display: flex;
    justify-content: space-around;
    background-color: #e64c3c;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
`
export const divSearch = styled.div`
    display: flex;
`
export const fiGithub = styled(FiGithub)`
    width: 40px;
    height:40px;
    border: 1px solid black;
    border-radius: 25px; 
    padding: 5px;
    color: black;
`

export const inputName = styled.input`
    outline: none;
    padding: 5px; 
    border-radius: 5px; 
    border: none;
`

export const buttonSearch = styled.button`
    align-items: center;
    display: flex;
    outline: none ;
    margin-left: 10px ;
    border: none;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    background-color: white
`