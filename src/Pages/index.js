import Hero2Register from "./Hero2Register/Hero2Register";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import MainLayouts from '../Layouts/MainLayouts/MainLayouts'
import CreateManga from '../Components/CreateManga/CreateManga'
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import Auth from "./Auth/Auth";



import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([

    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
        {
            index: true, 
            element:<Index/>
        },
        {
            path: "/*",
            element: <NotFound/>
        },
        ]
    },
    {
        path: "/",
        element:<MainLayouts/>,
        children: [
            {
                path: "/signup", 
                element: <Hero2Register/>
            },
            {
                path:"/signin",
                element:<Auth/>
            },
            {
                path: '/createmanga',
                element:<CreateManga/>,
            },
            {
                path:"/*",
                element:<NotFound/>  
            },             
        ],
    },
    {
        path: "/*", 
        element:<NotFound/>
    },
]);



