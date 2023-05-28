import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Catalog from "./components/catalog";

import BookDetail from "./components/book-detail";
import { ForgotPassword, Login, PageNotFound, Sign } from "./components/Auth";
import AdminPage from "./components/Admin/AdminPage";
import Profile from "./components/Admin/profile";
import EditProfile from "./components/Admin/editProfile";
import EditPassword from "./components/Admin/editPassword";
import Loader1 from "./components/utils/loader";
import { CircularProgress } from "@mui/material";

function App() {
  const [modal, setModal] = useState(false);
  const [like, setLike] = useState(false);
  const [authMenu, setAuthMenu] = useState(false);

  return (
    <div className="flex flex-col">
      
      {/* <Header modal={modal} setModal={setModal} authMenu={authMenu} setAuthMenu={setAuthMenu}/> */}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              modal={modal}
              setModal={setModal}
              authMenu={authMenu}
              setAuthMenu={setAuthMenu}
            />
          }
        />
        <Route path="/catalog/:slug" element={<Catalog />} />
        <Route
          path="/book/:id"
          element={<BookDetail like={like} setLike={setLike} />}
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Sign />} />
        <Route path="/auth/restore" element={<ForgotPassword />} />
        <Route path="/dashboard1/admin1" element={<AdminPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="/profile/edit-password" element={<EditPassword />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
