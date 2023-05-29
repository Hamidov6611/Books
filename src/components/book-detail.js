import React, { useEffect, useState } from "react";
import Footer from "./footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import DownloadIcon from "@mui/icons-material/Download";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../index.css";
import Header from "./header";
import { useAuth } from "./context/auth";
import axios from "axios";
import { EmailOutlined } from "@mui/icons-material";
import Loader from "./utils/loader";
const BookDetail = () => {
  const { category, id } = useParams();
  const [auth, setAuth] = useAuth();
  const [bookData, setBookData] = useState([]);
  const [isDownload, setIsDownload] = useState(false)
  const navigate = useNavigate()
  const detailHandler = async (e) => {
    try {
      const { data } = await axios.get(
        `http://45.12.72.210:80/book/detail/${id}/`
      );
      console.log(data)
      setBookData(data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    detailHandler();
    
  }, [id]);


  const downloadHandler = () => {
    if(auth.isLogin) {
      setIsDownload(true)
    }else {
        navigate('/auth/login')
    }
  }

console.log(isDownload, auth)
  return (
    <div>
      <Header />
      <div className=" flex flex-col relative">
        <div className="w-[90%] md:w-[80%] min-h-[60vh] mx-auto  ">
          <Link to={"/"} className="flex flex-row py-4 items-center">
            <WestIcon className="mr-3" />
            <p className="text-darkGreey text-[24px] font-semibold">
              Bosh sahifaga
            </p>
          </Link>

          <div className="flex lg:flex-row justify-between flex-col">
            {bookData ?
              (
                <div className="w-[100%] lg:w-[30%] flex flex-col">
                <img
                  width={"360px"}
                  height={"260px"}
                  className="max-h-[260px] max-w-[360px] rounded-lg"
                  src={bookData?.image ? `http://45.12.72.210:80/${bookData.image}` : 'https://sciendo.com/product-not-found.png'}
                />
                <p className="my-3 text-[#74808C] bg-[#EEF1F3] rounded-2xl py-1 text-center">
                  Resurs statusi: <span className="text-black">To'liq ochiq</span>
                </p>
                <button className="flex my-3 bg-[#262A37] py-3 rounded-2xl justify-center" onClick={() => downloadHandler()}>
                  <DownloadIcon className="text-white ml-[10px]" />
                  <a
                    href={isDownload && `http://45.12.72.210:80${bookData.file}`}
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-white ml-[10px]">Download</button>
                  </a>
                </button>
              </div>
                )
              : <Loader />
            }
            <div className="w-[100%] lg:w-[65%] flex flex-col">
              <p className="flex flex-row mb-2">
                <p className="text-[15px] text-lightGreey font-semibold mr-2">
                  Mualliflar:
                </p>
                <p className="text-[15px] text-lightBlue font-roboto mr-2">
                  {bookData.author_book}
                </p>
              </p>

              <p className="flex flex-row mb-2">
                <p className="text-[15px] text-lightGreey font-semibold mr-2">
                  Jurnal:
                </p>
                <p className="text-[15px] text-lightBlue font-roboto mr-2">
                  {bookData?.magazine}
                </p>
              </p>

              <p className="flex flex-row mb-2">
                <p className="text-[15px] text-lightGreey font-semibold mr-2">
                  Maqolani qo'shgan muassasa:
                </p>
                <p className="text-[15px] text-lightBlue font-roboto mr-2">
                  {bookData.institution_that_added_resource}
                </p>
              </p>

              <div className="flex flex-wrap w-full">
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Resurs turi:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData?.resource_type_book?.name}
                  </p>
                </p>
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Resurs nomi:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData?.name_book}
                  </p>
                </p>
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Resurs tili:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData?.resource_language_book?.name}
                  </p>
                </p>
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Davlat:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData.city_name_of_book?.name}
                  </p>
                </p>
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Nashr yili:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData?.publisher_year}
                  </p>
                </p>
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Resurs sohasi:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData?.resource_field_book?.name}
                  </p>
                </p>
                <p className="min-w-[100px] rounded-md flex py-1 px-2 justify-center m-1 bg-[#EEF1F3]">
                  <p className="text-[#74808C] text-[12px] font-bold">
                    # Sahifa soni:
                  </p>
                  <p className="text-[#262A37] text-[12px] font-rovoto">
                    {bookData?.page_number}
                  </p>
                </p>
                
              </div>
              
              <p className="font-roboto text-[16px] my-4 min-h-[160px]">
                {bookData.description}
              </p>
              <div className="w-[100%] mb-6 flex flex-row justify-between">
                <Link className="flex justify-center text-blue-700 bg-sky-300 min-w-[50px] py-1 px-5 rounded-lg">
                  <TelegramIcon/>
                  <p className="text-white ml-[10px] text1 text-center">Telegram</p>
                </Link>

                <Link className="flex justify-center text-blue-700 bg-sky-300 min-w-[50px] py-1 px-5 rounded-lg">
                  <FacebookIcon />
                  <p className="text-white text1 ml-[10px]">Facebook</p>
                </Link>

                <Link className="flex justify-center text-blue-700 bg-sky-300 min-w-[50px] py-1 px-5 rounded-lg">
                  <LinkedInIcon />
                  <p className="text-white ml-[10px] text1">Linkedin</p>
                </Link>

                <Link className="flex justify-center text-red-700 bg-pink-300 min-w-[50px] py-1 px-5 rounded-lg">
                  <EmailOutlined />
                  <p className="text-white ml-[10px] text1">Email</p>
                </Link>

                <Link className="flex justify-center text-blue-700 bg-sky-300 min-w-[50px] py-1 px-5 rounded-lg">
                  <TwitterIcon />
                  <p className="text-white ml-[10px] text1">Twitter</p>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
