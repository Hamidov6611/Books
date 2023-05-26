import React, { useState } from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../index.css'
const CardBook = ({ img, lavozim, fio, like, id, likeHandler }) => {
    const [over, setOver] = useState(false)
    
  return (
    <div className="">
      <div onMouseMove={() => setOver(true)} onMouseOut={()=>setOver(false)} className=" w-[200px] relative md:border-2 md:border-r-slate-500 flex flex-col my-book-card items-center justify-center">
        <p className="py-1">{lavozim}</p>
        <p className="hover:text-lime-500 pb-1 text-[12px] text-center font-medium">{fio}</p>
        <div className="sm:w-[180px] w-[200px] h-[200px]">
          <img className="" src={img} alt="img" style={{widows: "180px", height: "200px"}}/>
        </div>
      </div>
      {over && (
            <div  className="w-[130px] flex flex-row justify-around relative mb-[-50px] bg-red-100 top-[-90px] py-2 rounded-lg  right-[-34px]" onMouseMove={()=>setOver(true)}>
            <button className="hover:text-lime-500" onMouseMove={()=>setOver(true)} onClick={() => likeHandler(id)}> 
                <FavoriteOutlinedIcon className={`${like &&  'text-lime-500'}`} />
            </button>
            <button className="hover:text-lime-500" onMouseMove={()=>setOver(true)}>
                <VisibilityIcon />
            </button>
          </div>
        )}
    </div>
  );
};

export default CardBook;
