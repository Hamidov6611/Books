import React from "react";
import "./auth.css";
import Header from '../header.js'
import Footer from '../footer.js'
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center text-[#52a713]">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to={'/'} href="" className="link_404 rounded-lg  text-[20px]">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default PageNotFound;
