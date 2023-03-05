import Hero1 from "./Hero1/Hero1";
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
        element: <IndexLayout />,
        children: [
            { path: "/", element: <Index /> },
            { path: "/hero", element: <Hero1 /> },
            { path: "/signup", element: <Hero2Register /> },
        ]
    },
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/signup",
                element: <Hero2Register />
            },
            {
                path: "/signin",
                element: <Auth />
            },
            { path: "/CreateManga", element: <CreateManga /> },

            {
                path: "/*",
                element: <NotFound />
            },
        ]
    }
]);





