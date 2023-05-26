import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "../footer.js";
import MyModal from "../utils/myModal";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useParams } from "react-router-dom";
import CategoryModal from "./categoryModal";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminPage = () => {
  const [adabiyotlar, setAdabiyotlar] = useState(false);
  // const [maqolalar, setMaqolalar] = useState(false);
  // const [dissertatsiyar, setDissertatsiyalar] = useState(false);
  // const [monografiyalar, setMonografiyalar] = useState(false);
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [posts, setPosts] = useState([
  ]);
  const [catName, setCatName] = useState("");


  const addCategoryHandler = () => {
    setModal1(true);
  };
  //add new Category to Cookie
  const addNewCat = () => {
    const newItem = { id: uuidv4(), title: catName };
    const newArr = [...posts, newItem];
    Cookies.set("posts", JSON.stringify(newArr), {
      expires: new Date(9999, 0, 1),
    });
  
    setModal1(false);

    getData();
    setCatName("");
  };

  // get data from Cookie
  const getData = () => {
    let name = Cookies.get("posts");
    if(name != null) {
      name = JSON.parse(name);
      setPosts(name);
    }
  };

  // delete Category from Cookie
  const deleteCategory = (id) => {
    setPosts(posts.filter(c => c.id !== id))
   
  }

  useEffect(() => {
    getData();
  }, []);
  const adabiyotHandler = (id) => {
    setAdabiyotlar(true);
    posts.map((item) => {
      if (item.id == id) {
        setCategory(item.title);
      }
    });
  };

  // const showModal = ()

  return (
    <div className="w-[100%]">
      <div className="w-[90%] mx-auto flex md:flex-row flex-col justify-between">
        <div className="md:w-[30%] w-[90%] mx-auto">
          <AdminMenu
            data={posts}
            addCategoryHandler={addCategoryHandler}
            adabiyotHandler={adabiyotHandler}
            deleteCategory={deleteCategory}
          />
        </div>
        <div className="md:w-[60%] w-[90%] mx-auto flex flex-col">
          {!adabiyotlar ? (
            <div className="md:w-[100%] flex flex-col px-6 md:mb-0 ss:mb-32  ">
              <p className="text-[14px] md:text-[24px] font-medium">
                Bu yerda siz yangi adabiyotlar qo'shishingiz mumkin
              </p>
              <div className="flex flex-row mb-3 xl:mb-6 justify-around ">
                <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3">
                  <AutoStoriesOutlinedIcon className="h-[20px] w-[20px]" />
                  <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                    186974 adabiyotlar
                  </p>
                  <p class="text-roboto text-[.75rem] text1">
                    Oliy ta'lim muassasalarining barcha o'quv adabiyotlari
                    ro'yxati
                  </p>
                </div>
                <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1">
                  <MenuBookOutlinedIcon />
                  <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                    26078 maqolalar
                  </p>
                  <p class="text-roboto text-[.75rem] text1">
                    O'qituvchilar va ilmiy tadqiqotchilarning barcha maqolalari
                    ro'yxati
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-around">
                <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1 mr-3">
                  <ArticleOutlinedIcon />
                  <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                    8252 monografiyalar
                  </p>
                  <p class="text-roboto text-[.75rem] text1">
                    Oliy ta'lim muassasalarining barcha monografiyalari ro'yxati
                  </p>
                </div>
                <div className="bg-white w-[280px] py-[30px] px-[26px] rounded-md box1">
                  <ImportContactsOutlinedIcon />
                  <p className="text-[14px] sm:text-[20px] font-semibold py-2">
                    20896 dissertatsiyalar
                  </p>
                  <p className="text-roboto text-[.75rem] text1">
                    Oliy ta'lim muassasalarining barcha dissertatsiyalari
                    ro'yxati
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:w-[100%] flex flex-row justify-between items-center md:mt-6 border-2 border-limeGreen p-3 rounded-lg ">
              <div className="w-[90%]">
                <p className="flex flex-row text-limeGreen font-bold text-[18px] md:text-[24px]">
                  {category}
                </p>
              </div>
              <div className="w-[10%] flex justify-between">
                <AddCircleIcon className=" cursor-pointer" onClick={() => setModal(true)} />
                <EditIcon className=" cursor-pointer"/>
               
              </div>
              {modal && (
                <MyModal category={category} setModal={setModal}/>
              )}
            </div>
          )}
        </div>
      </div>
      <CategoryModal modal1={modal1} setModal1={setModal1}>
        <div className="w-[90%] mx-auto my-4 flex flex-col justify-center items-center">
          <input
            type="text"
            className="mb-2 w-[90%]  sm:w-[80%] lg:w-[100%] py-3 rounded-lg pl-2 border-2 border-limeGreen"
            placeholder={`Categoriya nomini kiriting:`}
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <button
            onClick={addNewCat}
            className="bg-limeGreen w-[200px] my-4 py-2 rounded-lg text-white hover:bg-white hover:text-limeGreen border-2 hover:border-limeGreen"
          >
            Qo'shish
          </button>
        </div>
      </CategoryModal>
    </div>
  );
};

export default AdminPage;
