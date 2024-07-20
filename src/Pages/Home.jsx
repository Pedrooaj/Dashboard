import Sidebar from "../Components/Sidebar/Sidebar"
import { SignOutUser } from "../Services/useActions"

const HomePage = () => {
    return(
        <>
            <Sidebar logout={SignOutUser} />
        </>
    )

}

export default HomePage
