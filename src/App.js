import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Catalog from "./components/catalog";

import BookDetail from "./components/book-detail";
import { ForgotPassword, Login, PageNotFound, Sign } from "./components/Auth";
import Profile from "./components/Admin/profile";

function App() {

  return (
    <div className="flex flex-col">
      
      <Routes>
        <Route
          path="/"
          element={
            <Main
            />
          }
        />
        <Route path="/catalog/:slug" element={<Catalog />} />
        <Route
          path="/book/:id"
          element={<BookDetail  />}
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Sign />} />
        <Route path="/auth/restore" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
