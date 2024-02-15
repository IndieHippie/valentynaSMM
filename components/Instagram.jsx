import React from "react";
import IgImg1 from "../public/ig-img-7.png";
import IgImg2 from "../public/ig-img-8.png";
import IgImg3 from "../public/ig-img-9.png";
import IgImg4 from "../public/ig-img-4.jpeg";
import IgImg5 from "../public/ig-img-5.jpeg";
import IgImg6 from "../public/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-18">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <div className="pb-4">
        <a
          href="https://www.instagram.com/v.slavinska?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <span className="hover:text-blue-500 duration-300"> @v.slavinska</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
