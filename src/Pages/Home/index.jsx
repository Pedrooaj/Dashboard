import Sidebar from "../../Components/Sidebar/Sidebar"
import { SignOutUser } from "../../Services/useActions"
import styled from "styled-components"
import { Outlet } from "react-router-dom"

const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: transparent;
    gap: 20px;
`
const HomeMain = styled.main`
    margin-left: 5px;
    z-index: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`



const Home = () => {
    return (
            <HomeContainer>
                <Sidebar logout={SignOutUser} />
                <HomeMain>
                    <Outlet />
                </HomeMain>
            </HomeContainer>

    )

}

export default Home
