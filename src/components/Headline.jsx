import React from "react";
import "./Headline.css";
import heroImage from '../assets/Jan_Bihl_Foto_03.png';

const Headline = () => {
  return (
    <div className="mx-auto md:mt-12 flex items-center justify-center flex-wrap max-w-[1200px]">
      <div class="container-typewriter flex-1/12">
        <div class="typewriter">
          <div className=" flex flex-col justify-start items-start">
            <h2 className="text-4xl text-prime">
              JAN BIHL
            </h2>
            <h2 className="md:text-8xl text-prime font-bold" contenteditable="true">
              WEB<span>DEVELOPER</span> 
            </h2>
            <a className="text-prime border-2 border-solid border-prime py-4 px-6 text-semibold rounded-md mt-4 hover:bg-third hover:scale-105 transition-all duration-500" href="#work">My Work</a>
          </div>
        </div>
      </div>
      <div className="">
        <img className="md:w-[90%] w-[60%] min-w-[200px] mx-auto pb-20" src={heroImage} alt="" />
        </div>
    </div>

    
  );
};

export default Headline;
