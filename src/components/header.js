import React, { useEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./productCard.css";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
const Header = ({ modal, setModal, authMenu, setAuthMenu }) => {
  const [menu, setMenu] = useState(false);
  const [auth, setAuth] = useAuth();
  const [profile, setProfile] = useState(false);
  const menuHandler = () => setMenu((prev) => !prev);
  const [catId, setCatId] = useState(1);
  const [catData, setCatData] = [
    { id: 1, name: "Adabiyotlar" },
    { id: 2, name: "Maqolalar" },
    { id: 3, name: "Dissertatsiyalar" },
    { id: 4, name: "Monografiyalar" },
  ];
  const authMenuHandler = () => setAuthMenu((prev) => !prev);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      setAuth({
        user: null,
        token: "",
        isLogin: false,
      });
      Cookies.remove("token");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    setAuth({
      ...auth,
      catData: catId,
    });
  }, [catId]);

  return (
    <div className="">
      <div className="md:w-[100%] lg:w-[86%]  h-[70px] mx-auto wrap1 z-100 ">
        <div className="h-[70px] w-full items-center flex ">
          {!auth.isLogin ? (
            <div className=" w-[10%] flex mx-8 lg:mx-0 items-center">
              <button className="text-limeGreen underline text-[14px] flex text-center">
                <div class="zoom-animation-div  ">
                  <Link
                    to={"/auth/register"}
                    className="text-white no-underline"
                  >
                    Register
                  </Link>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Link
                to={"/profile"}
                className="flex items-center h-[45px] w-[45px] rounded-3xl cursor-pointer"
              >
               
                <p className="ml-[5px] bg-limeGreen text-white p-2 rounded-3xl">
                  {auth.user.username}
                </p>
              </Link>
              <div></div>
            </div>
          )}
          <div className="w-[90%] flex items-center justify-around lg:mr-[7%] lg:ml-[7%]">
            <Link to={`/catalog/${catId}`} onClick={() => setCatId(1)}>
              <div className="flex items-center">
                <p className="cursor-pointer font-roboto text-[14px] text-lightGreey">
                  ADABIYOTLAR
                </p>
              </div>
            </Link>
            <Link to={`/catalog/${catId}`} onClick={() => setCatId(2)}>
              <div className="flex items-center">
                <p className="cursor-pointer font-roboto text-[14px] text-lightGreey">
                  MAQOLALAR
                </p>
              </div>
            </Link>
            <Link
              to={"/"}
              className="flex flex-col items-center cursor-pointer mr-2"
            >
              <img
                src="//cdn.shopify.com/s/files/1/0070/8991/3908/files/logo_ca90e1e9-33da-4ed1-bcb0-19c471d50256.png?v=1613707406"
                alt="SmartBook - eBooks , Bookstore Shopify Theme"
                itemprop="logo"
                width={"130px"}
              />
            </Link>
            <Link to={`/catalog/${catId}`} onClick={() => setCatId(3)}>
              <div className="flex items-center">
                <p className="cursor-pointer font-roboto text-[14px] text-lightGreey">
                  DISSERTATSIYALAR
                </p>
              </div>
            </Link>

            <Link
              to={`/catalog/${catId}`}
              onClick={() => setCatId(4)}
              className="mr-3"
            >
              <div className="flex items-center">
                <p className="cursor-pointer font-roboto text-[14px] text-lightGreey">
                  MONOGRAFIYALAR
                </p>
              </div>
            </Link>
          </div>
          <div className="w-[10%] md:w-[20%] flex items-center md:pr-[20px]">
            <Link className=" font-roboto bg-limeGreen p-1 mr-8 w-[40px] rounded-lg text-[white] text-center cursor-pointer">
              Uz
            </Link>
            {auth.isLogin ? (
              <Link to={"/auth/login"} className="cursor-pointer mr-[5%]">
                <button className="sign" onClick={logoutHandler}>
                  Chiqish
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </Link>
            ) : (
              <Link to={"/auth/login"} className="cursor-pointer">
                <button className="sign">
                  Kirish
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={`mx-auto    wrap2`}>
        <div className={`h-[70px] w-full flex  items-center  `}>
          <div className="flex items-center w-[50%] justify-start">
            {menu ? (
              <ClearIcon className="ml-[5%] mr-[5%]" onClick={menuHandler} />
            ) : (
              <DehazeOutlinedIcon
                className="ml-[5%] mr-[5%]"
                onClick={menuHandler}
              />
            )}

            <Link
              to={"/"}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src="//cdn.shopify.com/s/files/1/0070/8991/3908/files/logo_ca90e1e9-33da-4ed1-bcb0-19c471d50256.png?v=1613707406"
                alt="SmartBook - eBooks , Bookstore Shopify Theme"
                itemprop="logo"
                width={"100px"}
              />
            </Link>
          </div>
          <div className="w-[50%] flex items-center justify-end">
            <Link className="mr-2 font-roboto bg-limeGreen p-1 w-[40px] rounded-lg text-[white] text-center cursor-pointer">
              Uz
            </Link>

            {auth.isLogin ? (
              <Link to={"/auth/login"} className="cursor-pointer mr-[5%]">
                <button className="sign">
                  Chiqish
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </Link>
            ) : (
              <Link to={"/auth/login"} className="cursor-pointer mr-[5%]">
                <button className="sign">
                  Kirish
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
        {menu && (
          <div className="menu-bar w-[100%] mx-auto flex flex-col sm:flex-row sm:justify-between py-2 bg-limeGreen absolute top-16 z-20">
            <div className="sm:w-[50%] flex justify-around">
              <Link
                to={`/catalog/${catId}`} onClick={() => setCatId(1)}
                className="text-white font-roboto text-[20px]"
              >
                Adabiyotlar
              </Link>
              <Link
                to={`/catalog/${catId}`} onClick={() => setCatId(2)}
                className="text-white font-roboto text-[20px]"
              >
                Maqolalar
              </Link>
            </div>
            <div className="sm:w-[50%] flex justify-around">
              <Link
                to={`/catalog/${catId}`} onClick={() => setCatId(3)}
                className="text-white font-roboto text-[20px]"
              >
                Dissertatsiyalar
              </Link>
              <Link
                to={`/catalog/${catId}`} onClick={() => setCatId(4)}
                className="text-white font-roboto text-[20px]"
              >
                Monografiyalar
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
