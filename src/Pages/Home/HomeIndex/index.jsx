import styled from "styled-components";
import Card from "../../../Components/Card";
import { auth } from "../../../Services/firebase";
import { IoLogoGithub } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiShareNetworkBold } from "react-icons/pi";

const HomeContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    @media (max-width: 580px) {
        gap: 40px;
    }
    h1{
        margin: 10px;
        padding: 0;
        color: white;
    }
`

const Title = styled.h1`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    height: 20%;
    width: 100%;
    `

const CardsContainer = styled.div`
    display: grid;
    height: 80%;
    width: 100%;
    align-items: start;
    justify-content: start;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;


    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr;
        grid-template-rows: 20% 20% 20%;
        gap: 150px;
    }
`



const Home = () => {
    return (
        <HomeContainer>
            <Title>Seja Bem Vindo <br /> {auth.currentUser.displayName}</Title>
            <h1>Minhas Redes</h1>
            <CardsContainer>
                <Card name="GitHub" info={<a href="https://github.com/Pedrooaj/">github.com/Pedrooaj</a>} color="black" footer="Projetos: 4" total={<IoLogoGithub />} description="" />
                <Card name="Linkedin" info={<a href="https://www.linkedin.com/in/pedro-antônio-l3m0z">linkedin.com/in/pedro-antônio-l3m0z</a>} color="#3b82f6" footer="Formações: 3" total={<SlSocialLinkedin />} description="" />
                <Card contact name="Contato" info={<>
                    Instagram:
                    <br />
                <a href="https://www.instagram.com/pedrooaj/">
                    instagram.com/pedrooaj
                </a>
                <br />
                WhatsApp:
                <br />
                <a href="https://wa.link/2kpl54">
                    https://wa.link/2kpl54
                </a>
                </>
                } color="white" footer="Instagram & Whatsapp" total={<PiShareNetworkBold />} description="" />
            </CardsContainer>
        </HomeContainer>

    );
}

export default Home;