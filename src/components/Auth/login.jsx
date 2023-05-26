import React, { useEffect, useState } from "react";
import Footer from "../footer";
import { Link, useParams } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import "../../index.css";
import axios from "axios";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
const Login = () => {
  const [hide, setHide] = useState(false);
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const toogleHandler = () => setHide((prev) => !prev);
  //loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const loginData = { username, password };
      const { data } = await axios.post(
        "http://80.85.139.42:1000/auth/user_login/",
        loginData
      );
      let config = {
        headers: {
          Authorization: "Bearer " + data.token.accsess,
        },
      };
      const group = await axios.get(
        "http://80.85.139.42:1000/auth/user_profile/",
        config
      );
      if (data.token) {
        Cookies.set("token", JSON.stringify("Bearer" + data?.token?.accsess));
        setAuth({
          ...auth,
          user: data.message,
          token: data.token,
          isLogin: true,
        });
      }
      if (group.data.groups[0].name == "Student") {
        toast.success("Muvaffaqiyatli kirdingiz");
        navigate("/");
      } else {
        toast.error("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col relative">
      <Header />
      <div className="w-[90%] min-h-[80vh] md:w-[80%] mx-auto my-[40px] ">
        <Link to={"/"} className="flex flex-row py-4 items-center">
          <WestIcon className="mr-3" />
          <p className="text-darkGreey text-[24px] font-semibold">Kirish</p>
        </Link>
        <div className="w-[100%] mx-auto flex flex-col my-[20px]  sm:flex-row sm:justify-around">
          <Link
            to={"/auth/login"}
            className="sm:w-[45%] w-[100%] my-2 sm:my-0 text-center py-3 rounded-xl bg-limeGreen text-[13px] font-roboto text-[#fff]"
          >
            Kirish
          </Link>
          <Link
            to={"/auth/register"}
            className="sm:w-[45%] w-[100%] my-2 sm:my-0 text-center py-3 rounded-xl bg-bgPrimary text-[13px] font-roboto text-tableGreey"
          >
            Ro'yhatdan o'tish
          </Link>
        </div>

        <div className="w-[90%] mx-auto flex mb-[20px] ">
          <form
            onSubmit={loginHandler}
            className="w-[100%] py-2 min-h-[40vh] flex flex-col justify-center rounded-xl border-2 border-limeGreen"
          >
            <div className="flex flex-col w-[100%] justify-start items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Login</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[60%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Emailni kiriting"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[100%] justify-center items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Parol</p>
                </div>
              </label>
              <input
                type={hide ? "text" : "password"}
                className="w-[90%]  sm:w-[80%] lg:w-[60%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Parolni kiriting"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="relative bottom-10 left-[40%] sm:left-[36%] lg:left-[28%]"
                onClick={toogleHandler}
              >
                {hide ? (
                  <RemoveRedEyeIcon className="transparent cursor-pointer" />
                ) : (
                  <VisibilityOffIcon className=" cursor-pointer" />
                )}
              </div>
            </div>
            <button
              type="submit"
              class="cssbuttons-io-button w-[40%] md:w-[30%] ml-[30%] md:ml-[35%]"
            >
              {" "}
              Kirish
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
