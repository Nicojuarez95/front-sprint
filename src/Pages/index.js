import Hero1 from "./Hero1/Hero1";
import Hero2Register from "./Hero2Register/Hero2Register";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"

import { createBrowserRouter } from "react-router-dom";
import NewChapter from "./NewChapter/NewChapter";


/**
 * @createBrouserRouter recibve un array de objetos cada objeto tiene 2 propiedades
 * @path la ruta
 * @element el elemento (componenete de pagina q se renderizara en esa ruta)
 */
export const router = createBrowserRouter([
    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
            {path: "/", element:<Index/>},
            {path: "/hero", element:<Hero1/>},
            {path: "/signup", element:<Hero2Register/>},
            {path: "/chapters-form", element:<NewChapter/>},
            {path: "/*", element:<NotFound/>}
        ]}
])
