import { auth } from "../Services/firebase";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const PerfilImage = styled.div`
    position: absolute;
    width: 195px;
    height: 195px;
    border-radius: 50%;
    background-image: url(${props => props.$Imagem});
    background-size: cover;
    background-position: center;
    border: 4px solid black;
`

function PerfilImagem() {
    return auth.currentUser.photoURL ? <PerfilImage $Imagem={auth.currentUser.photoURL} /> : <FaRegUserCircle size={200}  />

}

export default PerfilImagem;