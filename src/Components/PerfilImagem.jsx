
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";

import { AuthContext } from "../Contexts/AuthContext";

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
    const { user } = useContext(AuthContext);
    return user?.photoURL ? <PerfilImage $Imagem={user?.photoURL} /> : <FaRegUserCircle size={200}  /> 

}

export default PerfilImagem;