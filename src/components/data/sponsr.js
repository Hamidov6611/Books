import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sponsr = () => {
  const [rek, useRek] = useState([
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0070/8991/3908/files/br1-170x58.jpg?v=1613707467",
    },
    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/0070/8991/3908/files/br2-170x58.jpg?v=1613707467",
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0070/8991/3908/files/br3-170x58.jpg?v=1613707467",
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0070/8991/3908/files/br4-170x58.jpg?v=1613707467",
    },
    {
      id: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0070/8991/3908/files/br5-170x58.jpg?v=1613707467",
    },
    {
      id: 6,
      image:
        "https://cdn.shopify.com/s/files/1/0070/8991/3908/files/br6-170x58.jpg?v=1613707467",
    },
  ]);

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
      <Carousel responsive={responsive}>
        {rek.map((item) => (
          <img src={item.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Sponsr;
