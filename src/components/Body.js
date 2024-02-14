import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
const Body = ()=>{
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        }
    ])
    return(
        <RouterProvider router = {router} />
    )
}



export default Body