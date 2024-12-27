import styled from "styled-components";
import InputFloatingLabel from "./InputFloatingLabel";
import { IoIosLogIn } from "react-icons/io";
import Button from "./Button";
import ReactLottie from "../Lottie/React.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { SignInUser, RegisterUser } from "../Services/useActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgUserAdd } from "react-icons/cg";
import { auth } from "../Services/firebase";

const FormContainer = styled.form`
  .Register-Login {
    width: 100%;
    display: flex;
    justify-content: center;

    position: relative;
    & p {
      top: -25px;
      position: absolute;
      padding: 0;
      cursor: pointer;
      color: blue;
    }
    & p:hover {
      opacity: 0.7;
    }
  }

  .nome {
    transition: all 0.7s ease-in-out;
    visibility: ${(props) => (props.$nome ? "visible" : "hidden")};
    opacity: ${(props) => (props.$nome ? "1" : "0")};
    position: ${(props) => (props.$nome ? "relative" : "static")};
    transform: ${(props) =>
      props.$nome ? "translateY(0)" : "translateY(150%)"};
  }
  position: relative;
  flex-grow: 1;
  max-width: 75%;
  height: fit-content;
  padding: 0 0 25px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.$nome ? "26px" : "16px")};
  transition: all 0.5s ease-in-out;
  background-color: #ffffff97;
  border-radius: 20px;

  @media (max-width: 600px) {
    max-width: 90%;
    margin: 10px;
  }

  .switch {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 300px;
  }
`;

const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h1 {
    color: orange;
    margin: 0;
    padding: 0;
  }

  .Title-Div {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: ${(props) => (props.$check ? "0" : "50px")};
    transition: all 0.7s ease-in-out;
  }

  .lottie {
    width: 120px;
  }
`;

const Form = () => {
  const { isChecked, setIsChecked } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({ nome: "", email: "", password: "" });
  const navigate = useNavigate();
  if (isChecked === true) {
    var title = "Registrar";
  } else {
    var title = "Login";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (title === "Login") {
        const res = await SignInUser(usuario.email, usuario.password);
        if(res){
            navigate(res);
            toast.success(`Seja bem-vindo ${auth.currentUser.displayName}`, {
                position: "bottom-right",
                autoClose: 2000,
              });
        }
        
      }
      if (title === "Registrar") {
        await RegisterUser(usuario.email, usuario.password, usuario.nome);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <FormContainer $nome={isChecked} onSubmit={handleSubmit}>
      <Titulo $check={isChecked}>
        <div className="Title-Div">
          <Lottie loop={false} className="lottie" animationData={ReactLottie} />
          <h1>{title}</h1>
        </div>
      </Titulo>
      <InputFloatingLabel
        onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
        className="nome"
        label="Nome"
        thisUser
      />
      <InputFloatingLabel
        onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        thisEmail
        label="Email"
        type="email"
      />
      <InputFloatingLabel
        onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
        label="Senha"
        type="password"
        thisPassword
      />
      <div className="Register-Login">
        <p onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? "Já tem conta?" : "Crie sua conta!"}
        </p>
      </div>
      <Button type="submit">
        {title == "Login" ? (
          <>
            Entrar <IoIosLogIn size={25} />
          </>
        ) : (
          <>
            Registrar-se <CgUserAdd size={25} />
          </>
        )}
      </Button>
    </FormContainer>
  );
};

export default Form;
