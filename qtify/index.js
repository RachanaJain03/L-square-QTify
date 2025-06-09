import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App"
import Homepage from "./Pages/Homepage/Homepage"
import Albumpage from "./Pages/Albumpage/Albumpage"
//import { Children } from "react"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/album/:albumId",
                element: <Albumpage/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)