import Hero2Register from "./Hero2Register/Hero2Register";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import Auth from "./Auth/Auth";
import MainLayout from '../Layouts/MainLayouts/MainLayouts'
import MangaForm from '../Components/Mangaform/MangaForm'
import NewChapter from "./NewChapter/NewChapter";
import PagesChapter from "./PagesChapters/Page"
import Mangas from "../Pages/Mangas/Mangas"
import { createBrowserRouter } from "react-router-dom";
import AuthorForm from "./AuthorFrom/AuthorForm";
import MangaDetails from "./MangaDetails/MangaDetails";
import MyMangas from "./MyMangas/MyMangas";

/**
 * @createBrouserRouter recibe un array de objetos cada objeto tiene 2 propiedades..
 * @path la ruta
 * @element el elemento (componente de página que se renderizará en esa ruta)
 */
export const router = createBrowserRouter([
    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
            {
                index: true, 
                element: <Index/>
            },
            {
                path: "/*",
                element: <NotFound/>
            }
        ]
    },
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/signup", 
                element: <Hero2Register/>
            },
            {
                path: "/signin",
                element: <Auth/>
            },
            {
                path: "/mangas-form",
                element: <MangaForm/>
            },
            {
                path: "/mangas",
                element: <Mangas/>
            },
            {
                path: "/mymangas",
                element: <MyMangas/>
            },
            {
                path: "/chapters-form", 
                element: <NewChapter/>
            },
            {
                path: "/chapters/:id/:page",
                element: <PagesChapter/>
            },
            {
                path: "/author",
                element: <AuthorForm/>
            },
            {
                path: "/manga/:id/:page",
                element: <MangaDetails/>
            },
            {
                path:"/*",
                element:<NotFound/>  
            }             
        ]
    },
    {
        path: "/*", 
        element: <NotFound/>
    }
]);

