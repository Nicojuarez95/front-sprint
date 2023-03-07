import Hero2Register from "./Hero2Register/Hero2Register";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import Auth from "./Auth/Auth";
import MainLayout from '../Layouts/MainLayouts/MainLayouts'


import { createBrowserRouter } from "react-router-dom";


/**
 * @createBrouserRouter recibe un array de objetos cada objeto tiene 2 propiedades..
 * @path la ruta
 * @element el elemento (componenete de pagina q se renderizara en esa ruta)
 */
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
        element:<MainLayout/>,
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



