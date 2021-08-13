import { useEffect } from "react";
const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('jwt_token');

    }, [])
    localStorage.removeItem('jwt_token');
    return (
        <>
            <h1> LOgout page</h1>

        </>

    )
}


export default Logout;