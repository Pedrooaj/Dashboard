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
import { toast } from "react-toastify";
import { CgUserAdd } from "react-icons/cg";
import { auth } from "../Services/firebase";




const FormContainer = styled.form`



    .nome{
        transition: all 0.5s ease-in-out;
        visibility: ${props => props.$nome ? "visible" : "hidden"};
        opacity: ${props => props.$nome ? "1" : "0"};
    }

    flex-grow: 1;
    max-width: 70%;
    height: 60%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${props => props.$nome ? "32px" : "16px"};
    transition: all 0.5s ease-in-out;

    @media (max-width: 768px){
        max-width: 70%;
        display: flex;
       margin-bottom: 25px;
    }

    .switch{
        font-size: 14px;
        display: flex;
        flex-direction: column;
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
    const [ usuario, setUsuario] = useState({ nome: "", email: "", password: "" })
    const navigate = useNavigate();
    if (isChecked === true) {
        var title = "Registrar"
        var text = "Já tem conta?"
    } else {
        var title = "Login"
        var text = "Crie sua conta!"
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (title === "Login") {
            await SignInUser(usuario.email, usuario.password)
            navigate("/")
            toast.success(`Seja bem-vindo ${auth.currentUser.displayName}`, { position: "bottom-right", autoClose: 2000 })
        }
        if (title === "Registrar") {
            await RegisterUser(usuario.email, usuario.password, usuario.nome)
        }
    }

    return (
        <FormContainer $nome={isChecked} onSubmit={handleSubmit}>
            <Titulo><Lottie loop={true} className="firebase" animationData={FirebaseLottie} /><h1>{title}</h1></Titulo>
            <InputFloatingLabel onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })} className="nome" label="Nome" thisUser />
            <InputFloatingLabel onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} thisEmail label="Email" type="email" />
            <InputFloatingLabel onChange={(e) => setUsuario({ ...usuario, password: e.target.value })} label="Senha" type="password" thisPassword />
            <span className="switch">{text}<Switch /></span>
            <Button type="submit">{title == "Login"? <>Entrar <IoIosLogIn size={25} /></>:<>Registrar-se <CgUserAdd size={25} />
            </>}</Button>
        </FormContainer>
    )
}

export default Form;