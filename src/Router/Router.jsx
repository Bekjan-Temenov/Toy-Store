import { createBrowserRouter } from "react-router-dom"

import Layout from "../Components/Layout/Layot"
import NotFoundPage from "../pages/NotFoundPage"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import CatalogPage from "../pages/CatalogPage"
import ContactsPage from "../pages/ContactsPage"
import DeliverPage from "../pages/DeliverPage"


export const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<NotFoundPage/>,
    children:[
        {
            path:'/',
            element:<HomePage/>
        },
        {
            path:"/about",
            element:<AboutPage/>
        },
        {
            path:"catalog",
            element:<CatalogPage/>
        },
        {
            path:"contact",
            element:<ContactsPage/>
        },
        {
            path:"deliver",
            element:<DeliverPage/>
        }
    ]
}])