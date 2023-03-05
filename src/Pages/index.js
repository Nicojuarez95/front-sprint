import Hero1 from "./Hero1/Hero1";
import Hero2Register from "./Hero2Register/Hero2Register";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import MainLayouts from '../Layouts/MainLayouts/MainLayouts'
import CreateManga from '../Components/CreateManga/CreateManga'
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import Auth from "./Auth/Auth";
import MainLayout from '../Layouts/MainLayouts/MainLayouts'


import { createBrowserRouter } from "react-router-dom";


/**
<<<<<<< HEAD
 * @createBrouserRouter recibe un array de objetos cada objeto tiene 2 propiedades
=======
 * @createBrouserRouter recibe un array de objetos cada objeto tiene 2 propiedades..
>>>>>>> b2217f8eae3c7e580cb2168133db6252429604ef
 * @path la ruta
 * @element el elemento (componenete de pagina q se renderizara en esa ruta)
 */
export const router = createBrowserRouter([
    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
<<<<<<< HEAD
            {path: "/", element:<Index/>},
            {path: "/hero", element:<Hero1/>},
            {path: "/signup", element:<Hero2Register/>},
        ]},
        {
        path: '/',
        element: <MainLayouts/> ,
        children: [

            {path: "/CreateManga", element:<CreateManga/>},
        ]
    },
        
        
        {path: "/*", element:<NotFound/>}

])
=======
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



>>>>>>> b2217f8eae3c7e580cb2168133db6252429604ef
