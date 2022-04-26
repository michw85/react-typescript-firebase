import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Auth from "../pages/auth/Auth";
import Error404 from "../pages/home/Error404";
import { useAuth } from "../providers/useAuth";
import { routes } from "./list";

const Routers: React.FC = () => {
  const {user} = useAuth()
  
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={
                <Layout>
                   {route.auth && !user ? <Auth /> :
                  <route.element />}
                </Layout>
              }
            />
            //   <Layout>
            //     <route.element />
            //   </Layout>
            // </Route>
          );
        })}
        {/* <Route path="/home" element={<Home />}/> */}
        <Route path="/error404" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Routers;
