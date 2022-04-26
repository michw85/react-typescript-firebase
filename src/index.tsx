import React from "react";
import ReactDOM from "react-dom";
import Routers from "./components/routes/Routers";
import "./index.css";

import * as firebase from "firebase/app";
import { AuthProvider } from "./components/providers/AuthProvider";
// import { initializeApp } from "firebase/app";

// const app = initializeApp({
firebase.initializeApp({
  apiKey: "AIzaSyDUeh6oW2Mvl2rzaPHJ3TM9hZfzUbxX73k",
  authDomain: "mw-network.firebaseapp.com",
  projectId: "mw-network",
  storageBucket: "mw-network.appspot.com",
  messagingSenderId: "1028417985126",
  appId: "1:1028417985126:web:1326dca507c82dc3b5aba7",
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routers />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
