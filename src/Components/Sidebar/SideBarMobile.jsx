import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { Link } from "react-router-dom";


const SideBarMobileContainer = styled.aside`
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #18283f;
    @media (min-width: 700px) {
        display: none;
    }

    ul{
        padding: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
  
    }
    .List-Mobile li a{
        cursor: pointer;
    }
    .List-Mobile .Logo{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 10px;
        background-color: #2196f3;
        border: solid 3px #000013;
    }

    .Logout-Mobile{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }


`

const SideBarMobile = ({ logout }) => {
    return (
        <SideBarMobileContainer className="Side-Mobile">

            <ul className="List-Mobile">
                <li className="Logo">
                    <IoLogoFirebase size={30} color="orange" />
                </li>
                <li className="Sla">
                    <Link to="/perfil">
                        <FaRegUserCircle size={30} color="aqua" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <IoMdInformationCircleOutline size={35} color="white" />
                    </Link>
                </li>

                <li>
                    <button className="Logout-Mobile" onClick={() => logout()}>
                        <RiLogoutBoxLine size={30} color="red" />
                    </button>
                </li>
            </ul>
        </SideBarMobileContainer>
    );
}

export default SideBarMobile;