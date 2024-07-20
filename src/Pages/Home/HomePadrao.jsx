import Sidebar from "../../Components/Sidebar/Sidebar"
import { SignOutUser } from "../../Services/useActions"
import styled from "styled-components"
import { Outlet } from "react-router-dom"

const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background: linear-gradient(90deg, rgba(32,47,90,1) 0%, rgba(56,68,112,1) 100%);
    gap: 50px;
`
const HomeMain = styled.main`
    z-index: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const HomePage = () => {
    return(
        <HomeContainer>
            <Sidebar logout={SignOutUser} />
            <HomeMain>
                <Outlet />
            </HomeMain>
        </HomeContainer>
    )

}

export default HomePage
