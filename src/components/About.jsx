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
            
            <div className="content pt-10 text-white w-1/2 flex ">
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