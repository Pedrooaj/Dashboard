import styled from "styled-components";
import { auth } from "../../../Services/firebase";
import { updateProfile } from "firebase/auth";
import { IoIosAddCircle } from "react-icons/io";
import Input from "../../../Components/InputForm";
import Button from "../../../Components/Button";
import { Suspense, useContext, lazy } from "react";
import { PerfilContext } from "../../../Contexts/PerfilContext";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

const PerfilImagem = lazy(() => import("../../../Components/PerfilImagem"))




const UserForm = styled.form`
width: 50%;
height: 75%;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
background-color: #20354d;
border-radius: 10px;
padding: 10px;
`



const UserImage = styled.div`
width: 200px;
height: 210px;
border-radius: 50%;
position: relative;
display: flex;


.AdicionarDiv{
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    position: absolute;
    bottom: 0;
}



.Adicionar{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    transition: 0.3s;
    z-index: 0;

}

.Adicionar:hover{
    color: white;
}

.input-file{
    z-index: 1;
    width: 20%;
    height: 100%;
    position: absolute;
    opacity: 0;

}

.Adicionar-Icon{
    width: 100%;
    height: 100%;
    z-index: 0;
}
`





const Perfil = () => {
    const { name } = useContext(PerfilContext)

    function AtualizarPerfil(e) {
        e.preventDefault()
        updateProfile(auth.currentUser, { displayName: name, photoURL: null /* <= Url Image */ })
        toast.success("Perfil Atualizado com Sucesso", { autoClose: 2000, position: "bottom-right" })
    }




    return (
        <UserForm onSubmit={AtualizarPerfil}>
            <Input referencia="Nome:" type="text" />
            <UserImage>
                <Suspense fallback={<FaRegUserCircle size={200} color="white" />}>
                    <PerfilImagem />
                </Suspense>
                <div className="AdicionarDiv">
                    <div className="Adicionar">
                        <input className="input-file" accept="image/*" type="file" />
                        <IoIosAddCircle className="Adicionar-Icon" />
                    </div>
                </div>
            </UserImage>
            <Button type="submit">Atualizar Perfil</Button>
        </UserForm>
    );
}

export default Perfil;