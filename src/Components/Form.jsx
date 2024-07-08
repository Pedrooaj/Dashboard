import styled from "styled-components";
import InputFloatingLabel from "./InputFloatingLabel";
import { IoIosLogIn } from "react-icons/io";
import Button from "./Button";
import FirebaseLottie from "../Lottie/Firebase-lottie.json";
import Lottie from "lottie-react";
import Switch from "./Switch";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { SignInUser, RegisterUser } from "../Services/useActions"
import { useNavigate } from "react-router-dom";


const FormContainer = styled.form`
    flex-grow: 1;
    max-width: 70%;
    height: 60%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px){
        max-width: 70%;
    }

    .switch{
        font-size: 14px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 2px;
        width: 300px;
    }
`

const Titulo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    h1{
        margin: 0;
        padding: 0;
    }
  
    .firebase{
        width: 120px;
    }
`


const Form = () => {
    const { isChecked } = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    if (isChecked === true) {
        var title = "Registrar"
        var text = "Já tem conta?"
    } else {
        var title = "Login"
        var text = "Crie sua conta!"
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (title === "Login") {
            SignInUser(email, password)
            navigate("/")
        }
        if (title === "Registrar") {
            RegisterUser(email, password)
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Titulo><Lottie loop={true} className="firebase" animationData={FirebaseLottie} /><h1>{title}</h1></Titulo>
            <InputFloatingLabel onChange={(e) => setEmail(e.target.value)} label="Email" type="email" />
            <InputFloatingLabel  onChange={(e) => setPassword(e.target.value)} label="Senha" type="password" thisPassword />
            <span className="switch">{text}<Switch /></span>
            <Button type="submit">Entrar <IoIosLogIn size={25} /></Button>
        </FormContainer>
    )
}

export default Form;