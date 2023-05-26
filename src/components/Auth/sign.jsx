import React, { useState } from "react";
import Footer from "../footer";
import { Link, useParams } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import ErrorIcon from "@mui/icons-material/Error";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../../index.css";
import Sponsr from "../data/sponsr";
import Header from "../header";
import axios from "axios";

const Sign = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const toogleHandler = () => setHide((prev) => !prev);
  const toogleHandler2 = () => setHide2((prev) => !prev);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // RegisterHandler

  const registerHandler = async (e) => {
    e.preventDefault()
    try {
      const userData = {
        first_name:firstName,
        last_name:lastName,
        username,
        password
      };
      const data = await axios.post("http://80.85.139.42:1000/auth/user_register/", userData);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col relative">
      <Header />
      <div className="w-[90%] min-h-[80vh] md:w-[80%]  mx-auto my-[40px] ">
        <Link to={"/"} className="flex flex-row py-4 items-center">
          <WestIcon className="mr-3" />
          <p className="text-darkGreey text-[24px] font-semibold">
            Ro'yhatdan o'tish
          </p>
        </Link>
        <div className="w-[100%] mx-auto flex flex-col my-[20px]  sm:flex-row sm:justify-around">
          <Link
            to={"/auth/login"}
            className="sm:w-[45%] w-[90%] my-2 mx-auto text-center py-3 rounded-xl  bg-bgPrimary text-[13px] font-roboto text-tableGreey"
          >
            Kirish
          </Link>
          <Link
            to={"/auth/register"}
            className="sm:w-[45%] w-[90%] my-2 mx-auto text-center py-3 rounded-xl bg-limeGreen text-[13px] font-roboto text-[#fff]"
          >
            Ro'yhatdan o'tish
          </Link>
        </div>

        <form onSubmit={registerHandler} className="w-[95%] mx-auto flex flex-col mb-[20px] ">
          <div className="w-[100%] p-4  flex flex-col justify-start lg:flex-row lg:flex-wrap mb-[3%] rounded-xl border-2 border-limeGreen">
            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Ismi</p>
                </div>
                <div className="flex [w-50%] ">
                  <p className="py-1 bg-red-600  rounded-lg text-white flex items-center text-[14px] px-2">
                    <p>
                      <ErrorIcon className="mr-1" />
                    </p>
                    <p>Majburiy</p>
                  </p>
                </div>
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Nomini kiriting"
              />
            </div>
            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Familyasi</p>
                </div>
                <div className="flex [w-50%] ">
                  <p className="py-1 bg-red-600  rounded-lg text-white flex items-center text-[14px] px-2">
                    <p>
                      <ErrorIcon className="mr-1" />
                    </p>
                    <p>Majburiy</p>
                  </p>
                </div>
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Familyasini kiriting"
              />
            </div>
            

            

            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Login</p>
                </div>
                <div className="flex [w-50%] ">
                  <p className="py-1 bg-red-600  rounded-lg text-white flex items-center text-[14px] px-2">
                    <p>
                      <ErrorIcon className="mr-1" />
                    </p>
                    <p>Majburiy</p>
                  </p>
                </div>
              </label>
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Emailni kiriting"
              />
            </div>
          </div>

          <div className="w-[100%] p-4  flex flex-col justify-start lg:flex-row lg:flex-wrap mb-[3%] rounded-xl border-2 border-limeGreen">
            <div className="flex flex-col w-[100%] lg:w-[47%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Parol</p>
                </div>
                <div className="flex [w-50%] ">
                  <p className="py-1 bg-red-600  rounded-lg text-white flex items-center text-[14px] px-2">
                    <p>
                      <ErrorIcon className="mr-1" />
                    </p>
                    <p>Majburiy</p>
                  </p>
                </div>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={hide ? "text" : "password"}
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Parolni kiriting"
              />
              <div
                className="relative bottom-10 left-[40%] sm:left-[36%] lg:left-[45%]"
                onClick={toogleHandler}
              >
                {hide ? (
                  <RemoveRedEyeIcon className="transparent cursor-pointer" />
                ) : (
                  <VisibilityOffIcon className=" cursor-pointer" />
                )}
              </div>
            </div>
            <div className="flex flex-col w-[100%] lg:w-[47%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Parol tasdig'i</p>
                </div>
                <div className="flex [w-50%] ">
                  <p className="py-1 bg-red-600  rounded-lg text-white flex items-center text-[14px] px-2">
                    <p>
                      <ErrorIcon className="mr-1" />
                    </p>
                    <p>Majburiy</p>
                  </p>
                </div>
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={hide2 ? "text" : "password"}
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
                placeholder="Parol tasdig'i"
              />
              <div
                className="relative bottom-10 left-[40%] sm:left-[36%] lg:left-[45%]"
                onClick={toogleHandler2}
              >
                {hide2 ? (
                  <RemoveRedEyeIcon className="transparent cursor-pointer" />
                ) : (
                  <VisibilityOffIcon className=" cursor-pointer" />
                )}
              </div>
            </div>
          </div>

          
          <div className="flex justify-center mt-8">
            <button type="submit" class="cssbuttons-io-button">
              {" "}
              Ro'yhatdan o'tish
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
