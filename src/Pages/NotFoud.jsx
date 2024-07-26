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
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .Lottie{
        height: 60%;
        width: 60%;
    }
    h1{
        color: azure;
        text-align: center;
    }
`

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <h1>Ops Página não encontrada...</h1>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Lottie className="Lottie" loop={true} animationData={Image} />
        </NotFoundContainer>
 )
}

export default NotFound;