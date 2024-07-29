import styled from "styled-components";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";



const Container = styled.div`
    color: white;
    width: 90%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 50%;
    width: 70%;
    border-radius: 5px;
    border: 2px solid #000013;

    .Edit{
        width: 10%;
        height: 60%;
        cursor: pointer;
    }

    input{
        padding: 5px;
        width: 90%;
        background: transparent;
        z-index: 1;
        outline: none;
        border: none;
        color: white;
        font-weight: bold;
        letter-spacing: 1px;

    }

    input:disabled{
        cursor: not-allowed;
    }

`

const Referencia = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-start;

    h1{
        letter-spacing: 1px;
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
    }
`


const Input = ({ type, referencia }) => {
    const { user, setUser } = useContext(AuthContext);
    const [enable, setEnable] = useState(true);



    return (
        <Container>
            <Referencia>
                <h1>{referencia}</h1>
            </Referencia>
            <InputContainer>
                <input value={enable ? "" : user?.displayName} placeholder={user?.displayName} onChange={(e) => setUser({...user, displayName: e.target.value})} type={type} disabled={enable} />
                {enable ? <MdOutlineEditOff onClick={() => setEnable(false)} className="Edit" /> : <MdOutlineModeEdit onClick={() => setEnable(true)} className="Edit" />}
            </InputContainer>
        </Container>
    );
}

export default Input;