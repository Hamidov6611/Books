import React, { useState, useEffect } from "react";
import "../index.css";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SendIcon from "@mui/icons-material/Send";
import Header from "./header";
import { useAuth } from "./context/auth";
import axios from "axios";
import { EmailOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

const Main = ({ modal, setModal, like, setLike, authMenu, setAuthMenu }) => {
  const modalHandler = () => setModal(false);
  const [auth, setAuth] = useAuth();
  const [catData, setCatData] = useState([]);
  const [send1, setSend1] = useState(true);
  const [send2, setSend2] = useState(false);
  const [name, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const countHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://80.85.139.42:1000/book/count_cate/"
      );
      setCatData(data.count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    countHandler();
  }, []);
  console.log(catData);
  const sendMessageHandler = () => {
    setSend1(false);
    setSend2(true);
  };
  const sendMessageHandler2 = () => {
    setSend1(true);
    setSend2(false);
    if (name && message) {
      toast.success("Xabaringiz yetkazildi");
    } if(!name) {
      toast.error("Ism, familiya maydoni bo'sh");
    } else if(!message){
      toast.error("Xabar maydoni bo'sh")
    }
  };
  const toggleHandler = () => {
    setSend1(true);
    setSend2(false);
  };

  return (
    <div>
      <Header />
      <div className="wrap3 w-full h-[100vh]">
        <div className="md:w-[100%] lg:w-[90%]  flex flex-row  mx-auto justify-center md:items-center h-[80vh] main-menu p-3">
          <div className="flex flex-col md:w-[50%] md:mr-12  md:my-[36px] px-[40px] main-menu1">
            <img
              src="http://cdn.shopify.com/s/files/1/0070/8991/3908/files/logo_ca90e1e9-33da-4ed1-bcb0-19c471d50256.png?v=1613707406"
              alt="SmartBook - eBooks , Bookstore Shopify Theme"
              itemProp="logo"
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
              <Link
                to={`/catalog/${1}`}
                className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3 cursor-pointer"
              >
                <AutoStoriesOutlinedIcon className="h-[20px] w-[20px]" />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2 flex">
                  <p>{catData[0]?.count} </p>
                  <p className="ml-2">Adabiyotlar</p>
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha o'quv adabiyotlari
                  ro'yxati
                </p>
              </Link>
              <Link
                to={`/catalog/${2}`}
                className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 cursor-pointer"
              >
                <MenuBookOutlinedIcon />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2 flex">
                  <p>{catData[1]?.count} </p>
                  <p className="ml-2">Maqolalar</p>
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  O'qituvchilar va ilmiy tadqiqotchilarning barcha maqolalari
                  ro'yxati
                </p>
              </Link>
            </div>
            <div className="md:w-[50%] flex flex-col px-6 md:mb-6 ml-[25%] ss:mb-32">
              <Link
                to={`/catalog/${5}`}
                className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3 cursor-pointer"
              >
                <ReceiptIcon className="h-[20px] w-[20px]" />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2 flex">
                  {/* <p>{catData[0]?.count} </p> */}
                  <p>{catData[4]?.count} </p>
                  <p className="ml-2">Ilmiy ishlar</p>
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha ilmiy ishlar ro'yxati
                </p>
              </Link>
            </div>
            <div className="flex flex-row justify-around ">
              <Link
                to={`/catalog/${3}`}
                className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3 cursor-pointer"
              >
                <ArticleOutlinedIcon />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2 flex">
                  <p>{catData[3]?.count} </p>
                  <p className="ml-2">Monografiyalar</p>
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha monografiyalari ro'yxati
                </p>
              </Link>
              <Link
                to={`/catalog/${4}`}
                className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 cursor-pointer"
              >
                <ImportContactsOutlinedIcon />
                <p className="text-[14px] sm:text-[20px] font-semibold py-2 flex">
                  <p>{catData[2]?.count} </p>
                  <p className="ml-2">Dissertatsiyalar</p>
                </p>
                <p className="text-roboto text-[.75rem] text1">
                  Oliy ta'lim muassasalarining barcha dissertatsiyalari ro'yxati
                </p>
              </Link>
            </div>
            {send1 && (
              <div
                onClick={sendMessageHandler}
                className="py-3 bgMessage fixed bottom-0 right-12 w-[300px] rounded-tl-md rounded-tr-3xl flex flex-row cursor-pointer"
              >
                <EmailOutlined className="text-white ml-2" />
                <p className="text-white ml-3">Bizga xabar yuboring</p>
                <SendIcon className="ml-6 text-white" />
              </div>
            )}
            {send2 && (
              <div className="py-3  fixed bottom-0 right-12 w-[300px]  flex flex-col cursor-pointer">
                <div
                  onClick={toggleHandler}
                  className=" flex py-3 bgMessage rounded-bt-md rounded-tl-md rounded-tr-3xl"
                >
                  <EmailOutlined className="text-white ml-2" />
                  <p className="text-white ml-3">Bizga xabar yuboring</p>
                </div>
                <div className="w-[300px]">
                  <div className="bg-slate-200 min-h-[100px] flex flex-col">
                    <input
                      value={name}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Ism, familiyangizni kiriting"
                      className="w-[90%] mx-auto my-2 p-1 border-0 outline-0 focus:border-2 focus:border-limeGreen rounded-lg"
                    />
                    
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px] w-[90%] mx-auto my-2 rounded-lg  bg-white outline-none border-0 p-2 font-medium  resize-none"
                    />
                    <button
                      onClick={sendMessageHandler2}
                      className="bg-limeGreen w-[40%] py-1 mb-2 rounded-lg text-white mx-auto flex justify-center items-center"
                    >
                      <p className="mr-1">Yuborish</p>
                      <button>
                        <SendIcon />
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
