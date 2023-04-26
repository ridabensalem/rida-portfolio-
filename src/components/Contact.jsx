import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <div className="pt-10  py-10 mx-auto">
            <div className="header sm:text-4xl text-3xl font-medium title-font text-white text-center">
                <h1>Get in Touch </h1>
            </div>
            <div className="contact text-white w-1/2 text-center mx-auto pt-10">
                <p>I am currently open to new work opportunities and I welcome collaboration with other developers. If you are looking for a skilled full stack developer, please feel free to reach out to me.
                     I am passionate about creating innovative solutions and would be honored to contribute to your project. </p>
                     <div className="about-buttons mx-auto w-1/4 pt-9 text-gray-light">
          <button className="bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white rounded text-lg">Say Hello  </button>
        </div>
            </div>

        </div>

    );
}
export default Contact;