"use client";

import { useState } from "react";

const ServicesMainPage = () => {
  const [image, setImage] = useState("/img/1.jpg");

  return (
    <div className="bg-[#111111] text-white mt-24 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-semibold">Popular Services</h2>
        <div className="px-20 py-14 flex justify-center">
          <div className="flex gap-32 items-center">
            <ul>
              <li
                className="border-b border-[#2b2b2b] cursor-pointer group pb-5 pt-5"
                onMouseOver={() => setImage("/img/1.jpg")}
              >
                <p className="text-2xl group-hover:text-[#e1ae3e] duration-200 ease-in-out">
                  Nail Care Treatments
                </p>
                <span className="text-lg italic text-[#e1ae3e]">
                  Nail rejuvenation and strengthening for healthy, beautiful
                  nails.
                </span>
              </li>
              <li
                className="border-b border-[#2b2b2b] cursor-pointer group pb-5 pt-5"
                onMouseOver={() => setImage("/img/2.webp")}
              >
                <p className="text-2xl group-hover:text-[#e1ae3e] duration-200 ease-in-out">
                  Painted Nails
                </p>
                <span className="text-lg italic text-[#e1ae3e]">
                  Express your style with professionally painted nails.
                </span>
              </li>
              <li
                className="border-b border-[#2b2b2b] cursor-pointer group pb-5 pt-5"
                onMouseOver={() => setImage("/img/3.webp")}
              >
                <p className="text-2xl group-hover:text-[#e1ae3e] duration-200 ease-in-out">
                  Gel Polish / Shellac
                </p>
                <span className="text-lg italic text-[#e1ae3e]">
                  Long-lasting, glossy nails with gel polish or Shellac.
                </span>
              </li>
              <li
                className="cursor-pointer group pb-5 pt-5"
                onMouseOver={() => setImage("/img/4.jpg")}
              >
                <p className="text-2xl group-hover:text-[#e1ae3e] duration-200 ease-in-out">
                  Nail Designs and Nail Art
                </p>
                <span className="text-lg italic text-[#e1ae3e]">
                  Creative nail designs and artistic nail art expressions.
                </span>
              </li>
            </ul>
            <div className="w-80 h-[400px] rounded-xl overflow-hidden">
              <img
                src={image}
                alt="popolarimage"
                className="bg-cover h-full object-cover content-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // VER MAS...
  );
};

export default ServicesMainPage;
