import React from "react";
import path from "../Images/rida-picture.jpeg";

function About (){
    return(
        <div className="about-container content-center flex flex-col p-36" id="about">
            <h1 className="text-header-color font-main-font text-3xl font-bold">
                <span className="font-coding-font text-coding-color font-normal ">  1.</span> About</h1>
            <hr  className="w-1/4  border-t-1 border-separator my-4 opacity-50 border-thin"/>  
            <div className="content-container  flex flex-row  justify-between">
            
            <div className="content pt-10 text-white w-1/2 flex">
                <p>
                Hello, my name is Rida and I am a  <span className="text-coding-color"> full-stack developer </span> with expertise in JavaScript, React, Redux, and Rails.
                I am a self employed developer and tech enthusiast who is passionate about building scalable and efficient web applications.
                I am currently working on a few personal projects, I am looking for a full time jon as a <span className="text-coding-color">full stack developer</span>
                I love to contribute to  <span className="text-coding-color"> open source projects</span> .
                </p>
               
            </div>
            <div className="persona-image">
                <img src={path} alt="image" className="rounded-full w-3/4"/>
           </div>
           </div>    
        </div>

    )
}
export default About;