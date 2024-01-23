import React from "react";
import BuyPage from "../pages/BuyPage";
import SellPage from "../pages/SellPage";
import HomePage from "../pages/HomePage";

export const Links = [
    {
        name: "Home",
        path: "/",
        element: <HomePage />,
        showInNavigation: true,
    },
    {
        name: "Buy",
        path: "/buy",
        element: <BuyPage />,
        showInNavigation: true,
    },
     {
        name: "Sell",
        path: "/sell",
        element: <SellPage />,
        showInNavigation: true,
    },

]