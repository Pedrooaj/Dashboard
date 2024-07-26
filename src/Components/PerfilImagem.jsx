
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { PerfilContext } from "../Contexts/PerfilContext";
import { toast } from "react-toastify";

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
    const { urlImage } = useContext(PerfilContext);
    return urlImage ? <PerfilImage $Imagem={urlImage} /> : <FaRegUserCircle size={200}  /> 

}

export default PerfilImagem;