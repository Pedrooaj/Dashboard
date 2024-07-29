import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import Input from "../../../Components/InputForm";
import Button from "../../../Components/Button";
import { Suspense, useContext, lazy } from "react";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";
import { storage } from "../../../Services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../../Contexts/AuthContext";

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

@media (max-width: 580px) {
    width: 80%;
    height: 60%;
}

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
    const { seturlImage } = useContext(AuthContext);


    function uploadImage(file) {
        if (!file) return;
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    seturlImage(url)
                })
            }
        )

    }


    function AtualizarPerfil(e) {
        e.preventDefault()
        const file = e.target[1].files[0];
        uploadImage(file)

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