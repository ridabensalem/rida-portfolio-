import React from "react";
function About (){
    return(
        <div className="about-container content-center flex-col p-36" id="about">
            <h1 className="text-header-color font-main-font text-4xl">
                <span className="font-coding-font text-coding-color">  1.</span> About</h1>
            <hr  className="w-1/4  border-t-1 border-separator my-4 opacity-50 border-thin"/>        
            <div className="content pt-10 text-white w-1/2 ">
                <p>
                Hello, my name is Rida and I am a  <span className="text-coding-color"> full-stack developer </span> with expertise in JavaScript, React, Redux, and Rails.
                I am a self employed developer and tech enthusiast who is passionate about building scalable and efficient web applications.
                I am currently working on a few personal projects, I am looking for a full time jon as a <span className="text-coding-color">full stack developer</span>
                I love to contribute to  <span className="text-coding-color"> open source projects</span> .
                </p>
                
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
    <img src="https://via.placeholder.com/dog"  class="w-full h-48 object-cover"  alt="" />
  <div class="p-4">
    <h3 class="text-2xl font-semibold mb-2">Portfolio Title</h3>
    <p class="text-gray-600">This is a brief description of my portfolio project. It includes details about the technologies used, challenges faced, and the solution provided.</p>
    <div class="mt-4">
      <a href="#" class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out">View Project</a>
    </div>
  </div>
  <div class="bg-indigo-500 text-white text-center px-4 py-2">
    <p class="text-sm">Created with Tailwind CSS</p>
  </div>
</div>

        </div>

    )
}
export default About;