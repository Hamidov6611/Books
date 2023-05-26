import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import '../../index.css'
import AddCircleIcon from "@mui/icons-material/AddCircle";
const AdminMenu = ({
  data,
  adabiyotHandler,
  addCategoryHandler,
  deleteCategory
}) => {
  return (
    <div className="flex md:flex-col flex-row justify-between">
      <div className="inline-flex flex-col md:w-[100%] w-[100%]">
        <button
          onClick={() => addCategoryHandler()}
          className="bg-limeGreen py-4 text-white font-roboto rounded-lg mb-6 mt-6 text-[12px] md:text-[18px] flex justify-center items-center "
        >
          <p className="mr-3">Yangi kategoriya qo'shish</p>
          <button class="icon-btn add-btn">
    <div class="add-icon"></div>
    <div class="btn-txt text-limeGreen">category</div>
</button>
        </button>
        {data?.map((item) => (
          // <button
          //   key={item?.id}
            
          //   className="w-[100%] bg-limeGreen py-4 text-white font-roboto rounded-lg mb-6 mt-6 text-[12px] md:text-[18px] flex justify-center items-center"
          // >
          //  <div className="w-[80%] "> <p onClick={() => adabiyotHandler(item.id)} className="h-full mr-3">{item.title}</p></div>
          //   <div className="w-[20%]"><DeleteIcon onClick={() => deleteCategory(item.id)} className="h-full bg-red-600"/></div>
          // </button>
          <div key={item.id} className="mb-3" >
            <button className="rounded-lg text-white text-[18px] w-[80%] bg-limeGreen py-4" onClick={() => adabiyotHandler(item.id)}>{item.title}</button>
            <button className="w-[20%] rounded-lg text-white text-[18px] bg-red-600 py-4 text-bold" onClick={() => deleteCategory(item.id)}>x</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AdminMenu;
