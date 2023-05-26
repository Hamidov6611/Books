import React from "react";
import Header from "../header";
import WestIcon from "@mui/icons-material/West";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";

const EditPassword = () => {
  return (
    <div>
      <Header />
      <div className="w-[86%] mx-auto my-6">
        <div className="w-[100%] flex justify-between items-center flex-col md:flex-row">
          <Link to={"/profile"} className="flex items-center my-6">
            <WestIcon />
            <p className="text-darkGreey ml-3 md:text-[24px] text-[20px]">
              Profilni o'zgartirish
            </p>
          </Link>
          <div className="flex">
            <button className="flex bg-slate-200 p-2 rounded-lg">
              <HighlightOffIcon />
              <p className="ml-2">Bekor qilish</p>
            </button>
            <button className="flex bg-limeGreen text-white p-2 rounded-lg ml-2">
              <CheckIcon />
              <p className="ml-2">Saqlash</p>
            </button>
          </div>
        </div>
        <div className="flex flex-row w-[100%] mx-auto justify-between items-center bg-slate-100 p-2 rounded-lg">
          <Link
            to={"/profile/edit-profile"}
            className="w-[49%] bg-slate-300 py-2 text-center rounded-lg"
          >
            <div className="text-black text-[18px] font-roboto">
              Profilni o'zgartirish
            </div>
          </Link>
          <div className="w-[49%] bg-limeGreen py-2 text-center rounded-lg font-roboto text-white text-[18px]">
            <Link>Parolni o'zgartirish</Link>
          </div>
        </div>
      </div>

      <form className="flex w-[86%] mx-auto border-2 border-limeGreen p-3 rounded-lg">
        <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center ml-[2%]">
          <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
            <div className="flex [w-50%]">
              <p className="text-red-600 mr-2">*</p>
              <p>Joriy parol</p>
            </div>
          </label>
          <input
            type="text"
            className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder="Parolni kiriting"
          />
        </div>
        <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
          <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
            <div className="flex [w-50%]">
              <p className="text-red-600 mr-2">*</p>
              <p>Parol</p>
            </div>
          </label>
          <input
            type="text"
            className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder="Parolni kiriting"
          />
        </div>
        <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
          <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
            <div className="flex [w-50%]">
              <p className="text-red-600 mr-2">*</p>
              <p>Parol tasdig'i</p>
            </div>
          </label>
          <input
            type="text"
            className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder="Parol tasdig'i"
          />
        </div>
      </form>
    </div>
  );
};

export default EditPassword;
