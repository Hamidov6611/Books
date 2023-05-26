import React, { useState } from "react";
import Footer from "../footer";
import { Link, useParams } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import SendIcon from "@mui/icons-material/Send";
import ErrorIcon from "@mui/icons-material/Error";

const ForgotPasword = () => {
  return (
    <div className=" flex flex-col relative">
      <div className="w-[90%] min-h-[60vh] md:w-[80%] mx-auto my-[40px] ">
        <Link to={"/"} className="flex flex-row py-4 items-center">
          <WestIcon className="mr-3" />
          <p className="text-darkGreey text-[24px] font-semibold">
            Parolni tiklash
          </p>
        </Link>
        <div className="w-[100%] mx-auto flex flex-col my-[20px]  sm:flex-row sm:justify-between">
          <Link
            to={"/auth/login"}
            className="sm:w-[33%] w-[90%] my-2 mx-auto text-center py-3 rounded-xl bg-bgPrimary text-[13px] font-roboto text-tableGreey"
          >
            Kirish
          </Link>
          <Link
            to={"/auth/register"}
            className="sm:w-[33%] w-[90%] my-2 mx-auto text-center py-3 rounded-xl bg-bgPrimary text-[13px] font-roboto text-tableGreey"
          >
            Ro'yhatdan o'tish
          </Link>
          <Link
            to={"/auth/restore"}
            className="sm:w-[33%] w-[90%] my-2 mx-auto text-center py-3 rounded-xl bg-[#1181D9] text-[13px] font-roboto text-[#fff]"
          >
            Parolni tiklash
          </Link>
        </div>

        <div className="w-[90%] mx-auto flex mb-[20px] ">
          <form className="w-[100%] h-[25vh] sm:h-[30vh] flex flex-col items-center rounded-xl border-2 border-lightGreey">
            <div className="flex flex-col mt-6 w-[100%] justify-start items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Email</p>
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
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[60%] py-3 rounded-lg pl-2 border-2 border-lightGreey"
                placeholder="Emailni kiriting"
              />
            </div>
            <button
              type="submit"
              className="w-[45%]  sm:w-[40%] lg:w-[30%] mt-4 text-white rounded-xl mx-auto bg-slate-950 py-3 flex justify-center items-center"
            >
              <SendIcon className="mr-2" />
              <p className="font-roboto text-[14px]">Yuborish</p>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPasword;
