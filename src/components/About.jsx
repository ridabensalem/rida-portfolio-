import React from "react";
import path from "../Images/rida-picture.jpeg";
import {BsFillPersonFill} from "react-icons/bs";

function About (){
    return(
        <div className="about-container content-center flex flex-col p-36" id="about">
            <div className="icon-container flex justify-center text-4xl pb-3">
                <BsFillPersonFill className="text-coding-color"/>
                </div>
            <h1 className="text-header-color font-title text-3xl font-bold text-center">
                
                About</h1>
            <div className="content-container  flex flex-row  justify-between">
            
            <div className="content py-20 md:text-2xl text-white w-1/2 flex ">
                <p>
                I am a <span color="text-coding-color">full-stack developer</span>  who builds sleek and responsive web applications
c               currently, I am working as a self-employed developer and I am looking for a full-time job as a <span color="text-coding-color">full-stack developer </span> .
                </p>
               
            </div>
            <div className="personal-image py-7 ">
                <img src={path} alt="image" className="rounded-full w-3/4"/>
           </div>
           </div>    
           <div className="mobile-image  flex place-content-center md:hidden">
           <img src={path} alt="image" className="rounded-full w-3/4 p-8"/>

           </div>

        </div>

    )
}
export default About;