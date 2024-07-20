import styled from "styled-components";

const ButtonContainer = styled.button`
    display: flex;
    flex-wrap: nowrap;
    min-width: 150px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 7px;
    padding: 10px 45px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s ease all;
    &:hover{
        background-color: #0d8bf2;
    }
`

const Button = ({children, onClick, type}) => {
    return(
        <ButtonContainer type={type} onClick={onClick}>{children} </ButtonContainer>
    )
}

export default Button;