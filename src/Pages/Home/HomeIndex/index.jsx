import styled from "styled-components";
import { auth } from "../../../Services/firebase";
import { updateProfile } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";



const Home = () => {

    // updateProfile(auth.currentUser, { displayName: "Pedrooaj", photoURL: "https://www.google.com.br" })

    const UserForm = styled.form`
        width: 50%;
        height: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #20354d;
        border-radius: 10px;
    `

    const UserImage = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: relative;
        display: flex;
    
        .Image{
            position: absolute;
            height: 95%;
            width: 100%;
        }

        .AdicionarDiv{

            width: 100%;
            display: flex;
            justify-content: end;
            align-items: end;
            position: absolute;
            bottom: 0;
        }
        .Adicionar{
            height: 100%;
            width: 20%;
            cursor: pointer;
            transition: 0.3s;
        }
        .Adicionar:hover{
            color: white;
        }
    `


    return (
        <UserForm>
            <h1>Olá {auth.currentUser.displayName}</h1>
            <UserImage>
                {auth.currentUser.photoURL ? <img className="Image" src={auth.currentUser.photoURL} alt="" /> : <FaRegUserCircle className="Image" size={200} />}
                <div className="AdicionarDiv">
                    <IoIosAddCircle className="Adicionar" />
                </div>
            </UserImage>
        </UserForm>
    );
}

export default Home;