import React, { useState, useEffect } from "react";
import "../index.css";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import Carusel from "./carusel";
import { imgData, imgData2 } from "./data/data";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Car1 from "./car";
import Category from "./carusel";
import ProductCard from "./product-card";

import Header from "./header";
import Loader from "./utils/loader";
import { useAuth } from "./context/auth";
import axios from "axios";

const Main = ({ modal, setModal, like, setLike, authMenu, setAuthMenu }) => {
  const modalHandler = () => setModal(false);
  const [auth, setAuth] = useAuth()
  const [catData, setCatData] = useState([])
  const navigate = useNavigate()

  const countHandler = async () => {
    try {
      const {data} = await axios.get("http://80.85.139.42:1000/book/count_cate/")
      
      setCatData(data)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(() => {
  countHandler()
},[])
  return  (
    <div>
      <Header />
      <div className="wrap3 w-full h-[100vh]">
        <div className="md:w-[100%] lg:w-[90%]  flex flex-row  mx-auto justify-center md:items-center h-[80vh] main-menu p-3">
          <div className="flex flex-col md:w-[50%] md:mr-12  md:my-[36px] px-[40px] main-menu1">
            <img
              src="//cdn.shopify.com/s/files/1/0070/8991/3908/files/logo_ca90e1e9-33da-4ed1-bcb0-19c471d50256.png?v=1613707406"
              alt="SmartBook - eBooks , Bookstore Shopify Theme"
              itemprop="logo"
              width={"200px"}
            />
            <p className="font-roboto text-[14px] sm:text-[20px] mt-12 text-lightGreey">
              O'zbekiston Respublikasi oliy ta'lim va ilmiy tadqiqot
              muassasalarining yagona elektron kutubxona axborot tizimi
            </p>
            <div className="py-3">
              <button className="py-3 px-2 bg-limeGreen text-white lg:w-[100px] w-[100%] rounded-lg">
                Batafsil
              </button>
            </div>
            <div className="h-[40px] w-full mt-12">
              <input
                className="h-full border-2 w-full rounded-lg px-10 focus:border-blue-800 outline-0"
                placeholder="Search for books"
              />
              <SearchIcon className="relative top-[-32px] left-[10px] text-blue-800" />
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col px-6 md:mb-0 ss:mb-32  ">
            <div className=" flex flex-row mb-3 xl:mb-6 justify-around ">
              <Link className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3 cursor-pointer" >
                <AutoStoriesOutlinedIcon className="h-[20px] w-[20px]" />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                  {/* {`${catData?.count[0]?.count}`} */} 0
                    Adabiyotlar
                </p>
                <p class="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha o'quv adabiyotlari
                  ro'yxati
                </p>
              </Link>
              <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 cursor-pointer" onClick={() => navigate('/catalog/2')}>
                <MenuBookOutlinedIcon />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                {/* {`${catData?.count[1]?.count}`} */}4
                  Maqolalar
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  O'qituvchilar va ilmiy tadqiqotchilarning barcha maqolalari
                  ro'yxati
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around " >
              <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3 cursor-pointer" onClick={() => navigate('/catalog/3')}>
                <ArticleOutlinedIcon />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                  8252 monografiyalar
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha monografiyalari ro'yxati
                </p>
              </div>
              <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 cursor-pointer" onClick={() => navigate('/catalog/4')}>
                <ImportContactsOutlinedIcon />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                  20896 dissertatsiyalar
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha dissertatsiyalari ro'yxati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
