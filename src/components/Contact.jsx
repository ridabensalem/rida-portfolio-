import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Social from './Social';

const Contact = () => {
  const [state, handleSubmit] = useForm('xzbwnnow');
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!state.submitting) {
      await handleSubmit(e);
      if (state.succeeded) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    }
  };

  return (
    
   <div>
        <h1 id='contact' className='text-3xl font-bold  font-title mb-10 text-white  text-center'>Contact</h1>
   
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
     
      <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="name" className="block text-gray-600">
            Name
            </label>
            <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
            <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
            />

        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="10"

            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Your message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>


     <div className='text-center'>
        <button
          type="submit"
          disabled={state.submitting}
          className=" bg-blue-500 w-32 text-white rounded-md py-2 px-4 "
        >
          Submit
        </button>
        </div>
      </form>
    </div>
    <div className='flex justify-center items-center'>
        <Social />

    </div>
    </div>
  );
};

export default Contact;
