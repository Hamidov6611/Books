import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Sponsr from "./data/sponsr";
const Footer = () => {
  return (
    <div className="w-[90%]  relative mx-auto flex flex-col md:flex-row bor-top py-6 justify-between">
      
      <div className="flex flex-col w-[90%] md:w-[20%]">
        <Link to={'/'} className="flex flex-col items-center cursor-pointer mr-2">
          <img
            src="//cdn.shopify.com/s/files/1/0070/8991/3908/files/logo_ca90e1e9-33da-4ed1-bcb0-19c471d50256.png?v=1613707406"
            alt="SmartBook - eBooks , Bookstore Shopify Theme"
            itemProp="logo"
            width={"130px"}
            className="mb-4"
          />
        </Link>
        <p className="text-[14px] font-roboto text-lightGreey">
          O'zbekiston Respublikasi oliy ta'lim va ilmiy tadqiqot
          muassasalarining yagona elektron kutubxona axborot tizimi
        </p>
        <p className="text-[16px] text-gray-900 font-medium">
          Скачай наше приложение
        </p>
        <div className="flex flex-row py-4">
          <a className="mr-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png" />
          </a>
          <a>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"
              height={"20px"}
            />
          </a>
        </div>
      </div>

      <div className="flex md:flex-row md:justify-between justify-center w-[90%] md:w-[40%]">
        <div className="w-[50%] md:[25%] flex flex-col">
          <a className="text-[18px] text-gray-900 font-medium pb-2">MENU</a>
          <a className="text-[14px] text-lightGreey font-roboto mb-2">
            Adabiyotlar
          </a>

          <a className="text-[14px] text-lightGreey font-roboto mb-2">
            Maqolalar
          </a>
          <a className="text-[14px] text-lightGreey font-roboto mb-2">
            Dissertatsiyalar
          </a>
          <a className="text-[14px] text-lightGreey font-roboto mb-2">
            Monografiyalar
          </a>
        </div>

        <div className="flex flex-col w-[50%] md:w-[25%]">
          <a className="text-[18px] text-gray-900 font-medium pb-2">
            ADABIYOTLAR
          </a>
          <a className="text-[14px] text-lightGreey font-roboto mb-2">Ilmiy</a>
          <a className="text-[14px] text-lightGreey font-roboto mb-2">
            Akademik
          </a>

          <a className="text-[14px] text-lightGreey font-roboto mb-2">Roman</a>
          <a className="text-[14px] text-lightGreey font-roboto mb-2">Drama</a>
        </div>
      </div>

      <div className="flex flex-col w-[90%] md:w-[20%]">
        <a className="text-[18px] text-gray-900 font-medium pb-2">Bog'lanish</a>
        <a className="text-[14px] fill-transparent flex items-center text-lightGreey font-roboto mb-2">
          <svg class="sc-bczRLJ FmYnn" height="48" width="48">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.93 34.1089L35.584 31.7629C34.412 30.5909 32.512 30.5909 31.342 31.7629L29.498 33.6069C29.086 34.0189 28.462 34.1569 27.93 33.9229C25.258 32.7529 22.618 30.9789 20.264 28.6249C17.92 26.2809 16.152 23.6529 14.98 20.9909C14.736 20.4409 14.878 19.7949 15.304 19.3689L16.956 17.7169C18.298 16.3749 18.298 14.4769 17.126 13.3049L14.78 10.9589C13.218 9.39685 10.686 9.39685 9.124 10.9589L7.82 12.2609C6.338 13.7429 5.72 15.8809 6.12 18.0009C7.108 23.2269 10.144 28.9489 15.042 33.8469C19.94 38.7449 25.662 41.7809 30.888 42.7689C33.008 43.1689 35.146 42.5509 36.628 41.0689L37.93 39.7669C39.492 38.2049 39.492 35.6729 37.93 34.1089V34.1089Z"
              stroke="#AAB6BD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M26 14.8709C28.062 14.8429 30.134 15.6069 31.708 17.1809"
              stroke="#AAB6BD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M37.364 11.5249C34.226 8.38689 30.112 6.81689 26 6.81689"
              stroke="#AAB6BD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M34.018 22.8889C34.046 20.8269 33.282 18.7549 31.708 17.1809"
              stroke="#AAB6BD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M37.364 11.5249C40.502 14.6629 42.072 18.7769 42.072 22.8889"
              stroke="#AAB6BD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>(+998 71) 426-10-81</p>
        </a>
        <a className="text-[14px] flex items-center text-lightGreey font-roboto mb-2">
          <svg class="sc-bczRLJ FmYnn" height="48" width="48">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 24.8889C32 29.3069 28.418 32.8889 24 32.8889C19.582 32.8889 16 29.3069 16 24.8889C16 20.4709 19.582 16.8889 24 16.8889V16.8889C28.418 16.8889 32 20.4709 32 24.8889V27.8889C32 30.6509 34.238 32.8889 37 32.8889C39.762 32.8889 42 30.6509 42 27.8889V24.8889C42 14.9469 33.942 6.88892 24 6.88892C14.058 6.88892 6 14.9469 6 24.8889C6 34.8309 14.058 42.8889 24 42.8889C26.298 42.8889 28.634 42.4529 30.888 41.5189C32.104 41.0149 33.228 40.3829 34.266 39.6609"
                stroke="#AAB6BD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </svg>
          <p>example@example.com</p>
        </a>
        <a className="text-[14px] flex items-center text-lightGreey font-roboto mb-2">
          <svg class="sc-bczRLJ mr-3 FmYnn" height="48" width="48">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0009 24.8889C10.0942 24.8893 8.4528 26.2352 8.07894 28.1049L6.07904 38.1045C5.84402 39.2796 6.14824 40.4981 6.90799 41.4249C7.66775 42.3516 8.80299 42.8889 10.0014 42.8889H37.9986C39.197 42.8889 40.3322 42.3516 41.092 41.4249C41.8518 40.4981 42.156 39.2796 41.921 38.1045L39.921 28.1049C39.5471 26.2353 37.9057 24.8893 35.9991 24.8889"
                  stroke="#AAB6BD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 34.8889H31"
                  stroke="#AAB6BD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 15.8889V15.8889C15 10.9184 19.0294 6.88892 24 6.88892V6.88892C28.9706 6.88892 33 10.9184 33 15.8889V15.8889C33 19.8622 28.5197 24.1031 25.8793 26.2567C24.7669 27.1 23.2291 27.0996 22.1171 26.2558C19.479 24.1019 15 19.8617 15 15.8889Z"
                  stroke="#AAB6BD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M23.9981 15.3889C23.7222 15.39 23.4993 15.6143 23.5 15.8902C23.5007 16.1661 23.7247 16.3893 24.0006 16.3889C24.2765 16.3886 24.5 16.1648 24.5 15.8889C24.5007 15.7558 24.448 15.6279 24.3537 15.5339C24.2593 15.4399 24.1312 15.3877 23.9981 15.3889"
                  stroke="#AAB6BD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </svg>
          </svg>
          <p>100095, Toshkent shahri, 2-Chimboy ko'chasi, 96-uy</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
