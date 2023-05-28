import React, { useState } from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MyModal from "../utils/myModal";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    const data = Cookies.get("auth")
  if(data) {
    const profil = JSON.parse(data)
    setUser(profil.message)
    console.log(user)
  }
  },[])
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col">
      <Header />
      <div className="w-[86%] mx-auto">
        <p className="text-[24px] py-4 font-bold">Mening profilim</p>
        <div className="border-2 border-limeGreen h-[350px] md:h-[250px] rounded-lg flex md:flex-row flex-col">
          <div className="w-[100%] md:w-[20%] h-[200px] md:mt-5">
            <img className="md:w-[200px] w-[90%] mt-3 md:mt-0 h-[100%] ml-3 rounded-[100%]" src='https://upload.wikimedia.org/wikipedia/commons/b/b8/Chandler_Riggs_-_2018077122146_2018-03-18_Walker_Stalker_Con_-_Sven_-_1D_X_MK_II_-_605_-_AK8I9646_%28cropped%29.jpg' />
          </div>
          <div className="md:w-[50%] w-[100%] my-4 md:my-0 flex flex-col md:mt-5">
            <div className="flex flex-row justify-around mb-3 my-8 md:my-3">
              <p className="text-[20px] font-bold text-lightGreey">
                Foydalanuvchi nomi
              </p>
              <p className="text-[20px] font-roboto">{user.username}</p>
            </div>
            <div className="flex flex-row justify-around">
              <p className="text-[20px] font-bold text-lightGreey">Email</p>
              <p className="text-[18px] font-roboto">example@example.com</p>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Profile;
