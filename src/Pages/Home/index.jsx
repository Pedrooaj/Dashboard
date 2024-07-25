import Sidebar from "../../Components/Sidebar/Sidebar"
import { SignOutUser } from "../../Services/useActions"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { PerfilProvider } from "../../Contexts/PerfilContext"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "../Loading"


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
    const [loading, setLoading] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [location])
    
    return (
        <PerfilProvider>
            <HomeContainer>
                <Sidebar logout={SignOutUser} />
                <HomeMain>
                    {loading ? <Loading /> : <Outlet />}
                </HomeMain>
            </HomeContainer>
        </PerfilProvider>
    )

}

export default HomePage
