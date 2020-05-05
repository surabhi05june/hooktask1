import React from "react";
import Users from "./components/User";
import Contact from "./components/Contact";
import About from "./components/About";

const routes = {
  "/user": () => <Users />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};


export default routes;