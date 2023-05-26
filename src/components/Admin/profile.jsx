import React, { useState } from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MyModal from "../utils/myModal";

const Profile = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col">
      <Header />
      <div className="w-[86%] mx-auto">
        <p className="text-[24px] py-4 font-bold">Mening profilim</p>
        <div className="border-2 border-limeGreen h-[350px] md:h-[250px] rounded-lg flex md:flex-row flex-col">
          <div className="w-[100%] md:w-[20%] h-[200px] md:mt-5">
            <img className="md:w-[200px] w-[90%] mt-3 md:mt-0 h-[100%] ml-3 rounded-[100%]" src='data:image/jpeg;base64,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' />
          </div>
          <div className="md:w-[50%] w-[100%] my-4 md:my-0 flex flex-col md:mt-5">
            <div className="flex flex-row justify-around mb-3 my-8 md:my-3">
              <p className="text-[20px] font-bold text-lightGreey">
                Tug'ulgan sana
              </p>
              <p className="text-[20px] font-roboto">14.12.2003</p>
            </div>
            <div className="flex flex-row justify-around">
              <p className="text-[20px] font-bold text-lightGreey">Email</p>
              <p className="text-[18px] font-roboto">example@example.com</p>
            </div>
          </div>
        </div>
        <div className="flex my-4 justify-between items-center">
          <p className="text-lightGreey font-roboto text-[24px]">
            Mening nashrlarim
          </p>
          <button
            onClick={() => setModal(true)}
            className="flex bg-limeGreen text-white items-center p-4 rounded-lg"
          >
            <AddCircleOutlineIcon />
            <p className="text-[16px] ml-2">Nashr qo'shish</p>
          </button>
          {modal && <MyModal setModal={setModal} />}
        </div>
        
        <div className="w-[100%] flex justify-center flex-wrap bg-slate-200 p-4 rounded-lg items-center">
          <Link className="w-[50%] md:w-[25%] my-2 md:my-0 flex justify-center focus:bg-sky-600 focus:py-2 focus:rounded-lg focus:text-white ">
            <p className="mr-3">O'quv adabiyotlar</p>
            <p className="bg-white rounded-md px-2 text-black">0</p>
          </Link>
          <Link className="w-[50%] md:w-[25%] my-2 md:my-0 flex justify-center focus:bg-sky-600 focus:py-2 focus:rounded-lg focus:text-white">
            <p className="mr-3">Maqolalar</p>
            <p className="bg-white rounded-md px-2 text-black">0</p>
          </Link>
          <Link className="w-[50%] md:w-[25%] my-2 md:my-0 flex justify-center focus:bg-sky-600 focus:py-2 focus:rounded-lg focus:text-white">
            <p className="mr-3">Dissertatsiyalar</p>
            <p className="bg-white rounded-md px-2 text-black">0</p>
          </Link>
          <Link className="w-[50%] md:w-[25%] my-2 md:my-0 flex justify-center focus:bg-sky-600 focus:py-2 focus:rounded-lg focus:text-white">
            <p className="mr-3">Monografiyalar</p>
            <p className="bg-white rounded-md px-2 text-black">0</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
