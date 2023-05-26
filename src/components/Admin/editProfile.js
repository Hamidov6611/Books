import React, { useState } from "react";
import Header from "../header";
import WestIcon from "@mui/icons-material/West";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";
import "../../index.css";

const EditProfile = () => {
  const [image, setImage] = useState("");
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
          <div className="w-[49%] bg-limeGreen py-2 text-center rounded-lg">
            <Link className="text-white text-[18px] font-roboto">
              Profilni o'zgartirish
            </Link>
          </div>
          <Link
            to={"/profile/edit-password"}
            className="w-[49%] bg-slate-300 py-2 text-center rounded-lg font-roboto text-[18px]"
          >
            <div>Parolni o'zgartirish</div>
          </Link>
        </div>

        <form className="my-6">
          <div className="my-6 border-2 border-limeGreen p-3 rounded-lg">
            <div className="flex flex-row w-[100%] lg:w-[47%] justify-start items-center lg:mr-[3%]">
              <div class="image-upload">
                <label for="file-input">
                  <img
                    src="https://unilibrary.uz/static/media/photo-upload.fd5e19b2.svg"
                    className="bg-bgPrimary p-4  rounded-lg cursor-pointer"
                  />
                </label>
                <input id="file-input" type="file" />
              </div>
              <div className="ml-[5%]">
                <p className="text-[#262A37] text-[15px] font-medium">
                  Rasmingizni yuklang
                </p>
                <p className="text-lightGreey text-[12px] font-medium">
                  Format: JPG, PNG, GIF
                </p>
                <p className="text-lightGreey text-[12px] font-medium">
                  Faylning maksimal hajmi: 5MB
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-limeGreen p-2 rounded-lg flex flex-wrap md:flex-row flex-col justify-center">
            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Ismi</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
              />
            </div>
            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Familyasi</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
              />
            </div>

            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Otasinig ismi</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
              />
            </div>

            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Tug'ulgan sana</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
              />
            </div>
            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Telefon</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
              />
            </div>

            <div className=" flex flex-col w-[100%] lg:w-[30%] justify-start lg:mr-[3%] lg:mb-[2%] items-center">
              <label className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto text-[18px] text-start font-roboto py-1 flex justify-between">
                <div className="flex [w-50%]">
                  <p className="text-red-600 mr-2">*</p>
                  <p>Email</p>
                </div>
              </label>
              <input
                type="text"
                className="w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
              />
            </div>
          </div>
          <textarea
            type="text"
            className="mb-2 w-[100%] my-6 sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder="Biografiyani kiriting"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
