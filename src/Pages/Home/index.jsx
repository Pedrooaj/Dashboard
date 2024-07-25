import Sidebar from "../../Components/Sidebar/Sidebar"
import { SignOutUser } from "../../Services/useActions"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { PerfilProvider } from "../../Contexts/PerfilContext"

const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: #000013;
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
    return (
        <PerfilProvider>
            <HomeContainer>
                <Sidebar logout={SignOutUser} />
                <HomeMain>
                    <Outlet />
                </HomeMain>
            </HomeContainer>
        </PerfilProvider>
    )

}

export default HomePage
