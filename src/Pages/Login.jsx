import Form from "../Components/Form"
import styled from "styled-components"
import Lottie from "lottie-react";
import Image from "../Lottie/Page.json"



const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
    }
`

const LottieContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;   
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        .Lottie-1{
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 600px) {
        display: none;
    }


`

const FormContainer = styled.div`
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: start;
    width: 50%;
    height: 100vh;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        margin: 0;
        padding: 0;
    }
`


const LoginPage = () => {

    return(
        <LoginContainer>
            <LottieContainer>
                <Lottie className="Lottie-1" animationData={Image} />
            </LottieContainer>
          <FormContainer>
            <Form />
        </FormContainer>
        </LoginContainer>
    )
}

export default LoginPage