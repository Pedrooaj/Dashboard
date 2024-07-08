import Form from "../Components/Form"
import styled from "styled-components"
import Lottie from "lottie-react";
import Image from "../Lottie/Page.json"


const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        gap: 100px;
    }
`

const LottieContainer = styled.div`
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: 40%;
    
    }


`

const FormContainer = styled.div`
    display: flex;
    background-color: azure;
    justify-content: center;
    align-items: start;
    width: 50%;
    height: 100vh;
    @media (max-width: 768px) {
        width: 100%;
        height: 40%;
    }
`


const LoginPage = () => {

    return(
        <LoginContainer>
            <LottieContainer>
                <Lottie animationData={Image} />
            </LottieContainer>

          <FormContainer>
            <Form />
        </FormContainer>
        </LoginContainer>
    )
}

export default LoginPage