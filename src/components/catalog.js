import React, { useEffect, useState } from "react";
import Footer from "./footer";
import { Link, useParams } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { ClearOutlined } from "@mui/icons-material";

import "../index.css";
import Header from "./header";
import axios from "axios";
import { useAuth } from "./context/auth";
import { CircularProgress, Pagination } from "@mui/material";
import { toast } from "react-toastify";
const Catalog = () => {
  const { slug } = useParams();

  const [bookTitle, setBookTitle] = useState("");
  const [authorName, SetAuthorName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [filter, setFilter] = useState(true);
  const [catalogName, setCatalogName] = useState("");
  const [catalog, setCatalog] = useState([]);
  const [auth, setAuth] = useAuth();
  const [data, setData] = useState([]);
  const [soha, setSoha] = useState("");
  const [pageApi, setPageApi] = useState(1);
  console.log(auth);
  console.log(pageApi);
  const catalogHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://80.85.139.42:1000/book/${slug}/?page=${pageApi}`
      );
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    catalogHandler();
  }, [pageApi, slug]);

  return (
    <div className=" flex flex-col relative">
      <Header />
      <div className="w-[90%] md:w-[80%] mx-auto pb-[40px] ">
        <Link to={"/"} className="flex flex-row py-4 items-center">
          <WestIcon className="mr-3" />
          <p className="text-darkGreey text-[24px] font-semibold">
            Bosh sahifaga
          </p>
        </Link>
        {filter ? (
          <div className="flex flex-wrap w-[100%] md:flex-row flex-col justify-center  border-2 md:justify-between rounded-xl border-lightGreey mb-4">
            <div className="ss:w-[100%] md:w-[60%] flex md:flex-row flex-col justify-around h-full py-4 items-center">
              <div className="w-[90%] md:w-[45%] flex flex-col">
                <label className="text-[18px] font-roboto py-1 ">
                  Adabiyot nomi
                </label>
                <input
                  type="text"
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                  placeholder="Adabiyot nomini kiriting"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                />
              </div>
              <div className="w-[90%] md:w-[45%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Muallif ismi sharifi
                </label>
                <input
                  type="text"
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                  placeholder="Muallif ismini kiriting"
                  value={authorName}
                  onChange={(e) => SetAuthorName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-[100%] md:w-[40%] flex flex-row  justify-around h-[100%] py-4 md:py-0 md:pt-12 items-end ">
              <button className="py-3 w-[40%] md:w-[45%] rounded-xl bg-limeGreen text-white ">
                <div className="flex justify-center">
                  <ContentPasteSearchIcon />
                  <p className="font-roboto ml-2">Qidiruv</p>
                </div>
              </button>
              <button
                className="py-3 w-[40%] md:w-[45%] rounded-xl bg-bgPrimary text-center text-[#000]"
                onClick={() => setFilter(false)}
              >
                <div className="flex justify-center">
                  <FilterAltOutlinedIcon />
                  <p className="font-roboto ml-2">Qidiruv filtri</p>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col   border-2 justify-between rounded-xl border-lightGreey">
            <div className="w-[100%] flex  flex-wrap flex-row  justify-around h-full py-4 items-center">
              <div className="w-[90%] sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1 ">
                  Adabiyot nomi
                </label>
                <input
                  type="text"
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                  placeholder="Adabiyot nomini kiriting"
                />
              </div>
              <div className="w-[90%] sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Muallif ismi sharifi
                </label>
                <input
                  type="text"
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                  placeholder="Muallif ismini kiriting"
                />
              </div>
              <div className="w-[90%] sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Davlat nomi
                </label>
                <select className="py-3 rounded-lg pl-2 border-2 border-lightGreey">
                  <option default className="p-4">
                    Davlat nomini kiriting
                  </option>

                  <option className="m-2 text-[14px]">Uzbekistan</option>
                </select>
              </div>

              <div className="w-[90%] sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Resurs tili
                </label>
                <select className="py-3 rounded-lg pl-2 border-2 border-lightGreey">
                  <option value="" className="p-4">
                    Resurs tilini kiriting
                  </option>
                  <option default className="p-4">
                    Grek
                  </option>
                </select>
              </div>

              <div className="w-[90%] sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Resurs turi
                </label>
                <select className="py-3 rounded-lg pl-2 border-2 border-lightGreey">
                  <option value="" className="p-4">
                    Resurs turini kiriting
                  </option>
                  <option default className="p-4">
                    Darslik
                  </option>
                </select>
              </div>

              <div className="w-[90%] sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Resurs sohasi
                </label>
                <select
                  onChange={(e) => setSoha(e.target.value)}
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                >
                  <option default className="p-4">
                    Davlat nomini kiriting
                  </option>
                  <option default className="p-4">
                    Arxeologiya
                  </option>
                </select>
              </div>

              <div className="w-[90%]  sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1 ">
                  Nashriyot nomi
                </label>
                <input
                  type="text"
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                  placeholder="Nashriyot nomini kiriting"
                />
              </div>
              <div className="w-[90%] mb-4 sm:mb-0 sm:w-[40%] md:w-[30%] flex flex-col">
                <label className="text-[18px] font-roboto py-1">
                  Nashriyot yili
                </label>
                <input
                  type="text"
                  className="py-3 rounded-lg pl-2 border-2 border-lightGreey"
                  placeholder="Nashriyot yilini kiriting"
                />
              </div>

              <div className="w-[90%] mt-4 ms:mt-0 lg:mt-8 sm:justify-between md:w-[30%] flex flex-row  ">
                <button className="py-3 w-[90%] sm:w-[45%] rounded-xl bg-limeGreen text-white ">
                  <div className="flex justify-center">
                    <ContentPasteSearchIcon />
                    <p className="font-roboto">Qidiruv</p>
                  </div>
                </button>
                <button
                  className="py-3 ml-8 w-[90%] sm:w-[45%] rounded-xl bg-bgPrimary text-center text-[#000]"
                  onClick={() => setFilter(true)}
                >
                  <div className="flex justify-center">
                    <ClearOutlined />
                    <p className="font-roboto">Filtrni yopish</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[80%] mx-auto flex flex-col min-h-[60vh]">
        <div className="w-[100%] head lg:flex ">
          <div className="w-[100%] lg:flex md:flex-row hidden bor-bot">
            <div className="w-[50%] flex">
              <p className="w-[10%] text-[20px] text-tableGreey">№</p>
              <p className="w-[90%] text-[20px] text-tableGreey">Maqola</p>
            </div>
            <div className="md:w-[50%] flex">
              <p className="w-[25%] text-[20px] text-tableGreey">Turi</p>
              <p className="w-[25%] text-[20px] text-tableGreey">Yil</p>
              <p className="w-[25%] text-[20px] text-tableGreey">Davlat</p>
              <p className="w-[25%] text-[20px] text-tableGreey">Til</p>
            </div>
          </div>
        </div>

        <div className="w-[100%] head flex flex-col py-4">
          {data?.results?.map((item) => (
            <section key={item?.id}>
              <div
                className="w-[100%] lg:flex lg:flex-row flex-col 
              even:bg-slate-200 odd:bg-slate-50 p-2 rounded-md "
              >
                <div className="lg:w-[50%] w-[100%] lg:flex  ">
                  <p className="w-[10%] lg:flex hidden text-[20px] text-tableGreey">
                    {item.id}
                  </p>
                  <p className="w-[90%] text-[20px] text-tableGreey flex flex-col">
                    <Link
                      to={`/book/${item.id}`}
                      className="text-black hover:underline text-[16px] font-bold pr-3"
                    >
                      <p>{item.description.slice(0, 50)}...</p>
                    </Link>
                    <p className="flex">
                      <span className="text-[13px] text-lightGreey font-bold mr-2">
                        Mualliflar:
                      </span>
                      <span className="text-[13px] text-blue-500">
                        {item.author_book}
                      </span>
                    </p>
                  </p>
                </div>
                <div className="md:w-[50%] flex flex-row ">
                  <p className=" w-[70%] lg:w-[25%] text-[16px] text-[#262A37] font-medium">
                    {item.resource_type_book.name}
                  </p>
                  <p className="w-[30%] lg:w-[25%] text-[16px] text-[#262A37] font-medium">
                    {item.publisher_year}
                  </p>
                  <p className="w-[70%] lg:w-[25%] text-[16px] text-[#262A37] font-medium">
                    {item.city_name_of_book.name}
                  </p>
                  <p className="w-[30%] lg:w-[25%] text-16px] text-[#262A37] font-medium">
                    {item.resource_language_book.name}
                  </p>
                </div>
              </div>
              <div className="w-[100%] mx-auto flex justify-center">
                <Pagination
                  count={10}
                  onChange={(e, value) => setPageApi(value)}
                  color="primary"
                  className="relative my-9 bottom-0"
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
