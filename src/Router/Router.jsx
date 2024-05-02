import { createBrowserRouter } from "react-router-dom"

import Layout from "../Components/Layout/Layot"
import NotFoundPage from "../pages/NotFoundPage"
import HomePage from "../pages/HomePage"
import CatalogPage from "../pages/CatalogPage"
import ContactsPage from "../pages/ContactsPage"
import DeliverPage from "../pages/DeliverPage"
import ProductPage from "../pages/ProductPage"

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
            path:"/products",
            element:<ProductPage/>
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