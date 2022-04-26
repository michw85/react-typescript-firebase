import { Grid } from "@mui/material";
import React from "react";
import { useAuth } from "../providers/useAuth";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC = ({ children }) => {
  const {user} = useAuth()
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && 
        <Grid item md={2}>
          <Sidebar />
        </Grid>}
        <Grid item md={user ? 10 : 12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
