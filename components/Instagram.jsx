import React from "react";
import IgImg1 from "../public/ig-img-7.png";
import IgImg2 from "../public/ig-img-8.png";
import IgImg3 from "../public/ig-img-9.png";
import IgImg4 from "../public/ig-img-4.jpeg";
import IgImg5 from "../public/ig-img-5.jpeg";
import IgImg6 from "../public/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";
import Link from "next/link";

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
          <span className="hover:text-blue-500 duration-300">
            {" "}
            @v.slavinska
          </span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <a
          href="https://www.instagram.com/p/C3CXgAqNjop/?utm_source=ig_web_copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramImg socialImg={IgImg1} />
        </a>
        <a
          href="https://www.instagram.com/p/C2nAmn3N14e/?utm_source=ig_web_copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramImg socialImg={IgImg2} />
        </a>
        <a
          href="https://www.instagram.com/p/Cys95jEt_ww/?utm_source=ig_web_copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramImg socialImg={IgImg3} />
        </a>
        <a
          href="link_to_instagram_post_4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramImg socialImg={IgImg4} />
        </a>
        <a
          href="link_to_instagram_post_5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramImg socialImg={IgImg5} />
        </a>
        <a
          href="link_to_instagram_post_6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramImg socialImg={IgImg6} />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
