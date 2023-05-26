import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBook from "./card";
import ProductCard from "./product-card";
import {Link, useNavigate} from 'react-router-dom'
const Car1 = ({arr, like, setLike}) => {
  const likeHandler = (res) => {
    arr.filter(item => {
      if(item.id === res) {
        setLike(prev => !prev)
        console.log(item.id, res)
      }
    })
  }
  const navigate = useNavigate()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel  responsive={responsive}>
      {arr.map((item) => (
          // <CardBook likeHandler={likeHandler} id={item.id} like={like} setLike={setLike} img={item.image} lavozim={item.lavozim} fio={item.fio.slice(0,20)} />
          <Link to='/book/id'>
            <ProductCard img={item.image} lavozim={item.lavozim} fio={item.fio} />
          </Link>
          
        ))}
       

      </Carousel>

    </div>
  );
};

export default Car1;
