import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" md:flex-row md:items-center">
                    <div className="experience-container  flex flex-row md:w-1/5 text-center  px-1 md:text-left ">
                        <FaBriefcase className=" w-10 h-10  text-coding-color mb-2" />
                        <h2 className="text-3xl font-extrabold text-white px-2 pt-1 ">Experience</h2>
                    </div>
                    <div className="md:w-4/5">
                        <div className="space-y-4 experience-1">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium text-gray-900">Self employed Full Stack Developer</h3>
                                    <p className="mt-1 text-gray-600 text-sm">June 2020 - Present</p>
                                    <ul className="list-disc list-inside mt-3 text-gray-600 text-sm">
                                        <li>Developed custom web solutions using a variety of programming languages and frameworks</li>
                                        <li>Created static and dynamic websites for clients that received positive feedback and improved their online presence.</li>
                                        <li>Fixed bugs and optimized website performance, resulting in faster loading times and better user experience.</li>
                                        <li>Integrated various API services, such as GitHub and others API, to display project details.</li>
                                        <li>Deployed and maintained websites on Netlify, ensuring high availability and fast loading times.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/5">
                        <div className="space-y-4 pt-4 experience-2">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium text-gray-900">Web Developer Intern at SmartSoluce</h3>
                                    <p className="mt-1 text-gray-600 text-sm">May 2022</p>
                                    <ul className="list-disc list-inside mt-3 text-gray-600 text-sm">
                                            <li>Designed and developed custom WordPress themes to match client specifications</li>
                                            <li>Built and maintained sites in WordPress CMS</li>
                                            <li>Collaborated with other developers and designers on project teams</li>
                                            <li>Communicated with clients and stakeholders to understand their needs and provide updates on the status of projects</li>
                                            <li>Provided technical support to clients as needed</li>
                                            <li>Ranked a customer website among the first pages on Google based on Agadir city</li>
                                            <li>Developed WordPress websites that kept clients always satisfied</li>
                                            <li>Created websites with great designs, making them competitive with other websites in the same field</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
