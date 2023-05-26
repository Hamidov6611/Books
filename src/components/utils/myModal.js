import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "../../index.css";
const MyModal = ({
  category,
  nomi,
  davlat,
  tili,
  turi,
  sohasi,
  nashriyot,
  nashYili,
  mualliflar,
  jurnal,
  muaas,
  izoh,
  manba,
  image,
  setModal,
}) => {
  return (
    <div className="addModalWrap" onClick={() => setModal(false)}>
      <div
        className="w-[100%] mx-auto flex flex-col addModalWrapContent py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-2 text-[20px] font-[medium] text-limeGreen w-[100%] text-center my-2 ">
          Yangi{" "}
          <span className="text-limeGreen text-bold text-[20px] ">
            {category ? category : "Adabiyot"}
          </span>{" "}
          qo'shish
        </p>
        <div className="w-[90%] mx-auto flex justify-between flex-row flex-wrap">
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`${category ? category : "Adabiyot"} nomini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Davlat nomini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`${category ? category : "Adabiyot"} tilini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`${category ? category : "Adabiyot"} turini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`${
              category ? category : "Adabiyot"
            } sohasini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Nashriyot nomini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Nashriyot yilini kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Mualliflar`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Jurnalni kiriting:`}
          />
          <input
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[48%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Muassasa nomini kiriting:`}
          />
        </div>
        <div className="w-[90%] mx-auto">
          <textarea
            type="text"
            className="mb-2 w-[100%]   sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`${
              category ? category : "Adabiyot"
            } izohini kiriting:`}
          />

          <div className="flex flex-row w-[100%]  sm:w-[80%] lg:w-[100%] justify-start items-center lg:mr-[3%] border-2 border-limeGreen rounded-lg mb-4">
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
                Manba rasmini yuklang
              </p>
              <p className="text-lightGreey text-[12px] font-medium">
                Format: JPG, PNG, GIF
              </p>
              <p className="text-lightGreey text-[12px] font-medium">
                Faylning maksimal hajmi: 5MB
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[100%]  sm:w-[80%] lg:w-[100%] justify-start items-center lg:mr-[3%] border-2 border-limeGreen rounded-lg mb-4">
            <div class="image-upload">
              <label for="file-input">
                <img
                  src="data:image/png;base64,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"
                  className="bg-bgPrimary p-4 w-[73px] h-[73px] rounded-lg cursor-pointer"
                />
              </label>
              <input id="file-input" type="file" />
            </div>
            <div className="ml-[5%]">
              <p className="text-[#262A37] text-[15px] font-medium">
                Manbani yuklang
              </p>
              <p className="text-lightGreey text-[12px] font-medium">
                Format: PDF
              </p>
              <p className="text-lightGreey text-[12px] font-medium">
                Faylning maksimal hajmi: 100MB
              </p>
            </div>
          </div>
          <button className="bg-limeGreen text-white py-3 mb-2 w-[100%]   sm:w-[80%] lg:w-[100%] rounded-lg">
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
