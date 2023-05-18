import React from "react";
import { skills } from "../data";
import { BiBadgeCheck, BiChip } from "react-icons/bi";
function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center  text-white mb-20">
                    <BiChip className="text-coding-color text-4xl inline-block mb-4" />
                    <h1 className=" skills-header sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="md:text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        My toolbox includes <span className="text-coding-color">React</span> , <span className="text-coding-color">Redux</span> ,
                        and <span className="text-coding-color">MySQL</span> for creating dynamic web applications. I also have a keen eye for <span className="text-coding-color">UI/UX</span> design, and experience with <span className="text-coding-color">Git</span> version control to keep projects on track. Let's build something <span className="text-coding-color" >great</span> together!
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                < BiBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills;