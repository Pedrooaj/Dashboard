import Lottie from "lottie-react";
import styled from "styled-components";
import Image from "../Lottie/404.json"
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 10px;
    .Lottie{

        justify-self: start;
        height: 45%;
        width: 60%;

    }
    h1{
        font-size: 4rem;
        margin: 15px 0 0 0;
        padding: 0;
        color: azure;
        text-align: center;
    }
    p{
        font-size: 1.3rem;
        margin: 0;
        padding: 0;
        color: azure;
        text-align: center;
    }
`

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <h1>404</h1>
            <p>Ops Página não encontrada...</p>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Lottie className="Lottie" loop={true} animationData={Image} />

        </NotFoundContainer>
    )
}

export default NotFound;