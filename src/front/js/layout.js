import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//IMPORT PAGES

//control-panel
import { BrandingCP } from "./pages/controlpanel/cp_branding";
import { HomeCP } from "./pages/controlpanel/cp_home";
import { MenuCP } from "./pages/controlpanel/cp_menu";

//landing-page
import { CreateRestaurantLP } from "./pages/landing/landing_createRestaurant";
import { LoginLP } from "./pages/landing/landing_login";
import { RegisterLP } from "./pages/landing/landing_register";
import { RestManagerLP } from "./pages/landing/landing_restManager";

//template
import { ContactTEMP } from "./pages/template/template_contact";
import { HomeTEMP } from "./pages/template/template_home";
import { MenuTEMP } from "./pages/template/template_menu";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  //const basename = process.env.BASENAME || "";

return (
    <div>
    <BrowserRouter>
            <Routes>
                <Route element={<LoginLP />} path="/" />
                <Route element={<RegisterLP />} path="/register" />
                <Route element={<RestManagerLP />} path="/rest-manager" />
                <Route element={<CreateRestaurantLP />} path="/create-restaurant" />
                <Route element={<ContactTEMP />} path="/:web-name/contact" />
                <Route element={<HomeTEMP />} path="/:web-name/home" />
                <Route element={<MenuTEMP />} path="/:web-name/menu" />
                <Route element={<BrandingCP />}path="/controlpanel/branding/:web-name" />
                <Route element={<HomeCP />} path="/controlpanel/home/:web-name" />
                <Route element={<MenuCP />} path="/controlpanel/menu/:web-name" />
                <Route element={<h1>Not found!</h1>} />
            </Routes>
    </BrowserRouter>
    </div>
);
};

export default injectContext(Layout);
