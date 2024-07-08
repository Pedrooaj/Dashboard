import { SignOutUser } from "../Services/useActions"

const HomePage = () => {
    return(
        <>
            <button onClick={() => SignOutUser()}>Logout</button>
        </>
    )

}

export default HomePage
