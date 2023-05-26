import React, { useState } from "react";
import "../index.css";
import { imgData } from "./data/data";
import FmdGoodIcon from "@mui/icons-material/FmdGood";


const Category = () => {
  const [active, setActive] = useState({
    active1: true,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
  });
  
  return (
    <div className="w-[80%] mx-auto py-3 flex flex-col">
      
      <div className=" flex justify-between bottom-2 bottom-lightGreey py-3 bor-bot">
        <a
          className={`text-[12px] sm:text-[18px] rounded-md text-lightGreey font-semibold cursor-pointer bottom-2 hover:bottom-limeGreen ${
            active.active1 && "bg-limeGreen text-white p-1"
          }`}
          onClick={() =>
            setActive({
              ...active,
              active1: (prev) => !prev,
              active2: false,
              active3: false,
              active4: false,
              active5: false,
              active6: false,
            })
          }
        >
          Hammasi
        </a>
        <a
          className={`text-[12px] sm:text-[18px] rounded-md text-lightGreey font-semibold cursor-pointer boreder-2 hover:bottom-limeGreen ${
            active.active2 && "bg-limeGreen text-white p-1"
          }`}
          onClick={() =>
            setActive({
              ...active,
              active2: (prev) => !prev,
              active1: false,
              active3: false,
              active4: false,
              active5: false,
              active6: false,
            })
          }
        >
          Ilmiy
        </a>
        <a
          className={`text-[12px] sm:text-[18px] rounded-md text-lightGreey font-semibold cursor-pointer bottom-2 hover:bottom-limeGreen ${
            active.active3 && "bg-limeGreen text-white p-1"
          }`}
          onClick={() =>
            setActive({
              ...active,
              active3: (prev) => !prev,
              active2: false,
              active1: false,
              active4: false,
              active5: false,
              active6: false,
            })
          }
        >
          Akademik
        </a>
        <a
          className={`text-[12px] sm:text-[18px] rounded-md text-lightGreey font-semibold cursor-pointer bottom-2 hover:bottom-limeGreen ${
            active.active4 && "bg-limeGreen text-white p-1"
          }`}
          onClick={() =>
            setActive({
              ...active,
              active4: (prev) => !prev,
              active2: false,
              active3: false,
              active1: false,
              active5: false,
              active6: false,
            })
          }
        >
          Roman
        </a>
        <a
          className={`text-[12px] sm:text-[18px] rounded-md text-lightGreey font-semibold cursor-pointer bottom-2 hover:bottom-limeGreen ${
            active.active5 && "bg-limeGreen text-white p-1"
          }`}
          onClick={() =>
            setActive({
              ...active,
              active5: (prev) => !prev,
              active2: false,
              active3: false,
              active4: false,
              active1: false,
              active6: false,
            })
          }
        >
          Drama
        </a>
        
      </div>
      
      <div className="mt-12"></div>
    </div>
  );
};

export default Category;
