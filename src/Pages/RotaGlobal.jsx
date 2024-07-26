import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Background from "/background.svg";
import Background_2 from "/background-2.svg";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${props => props.$background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`


const GlobalRoute = () => {
    const { setLocate } = useContext(AuthContext);
    const location = useLocation();

    return (
        <Container $background={location.pathname == "/login"? Background: Background_2}>
            <Outlet />
        </Container>
    );
    
}
 
export default GlobalRoute;