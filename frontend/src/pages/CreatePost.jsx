import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post",formData)
    .then(res => {
      navigate("/feed");
    })
    .catch(err => {
      console.log(err);
      alert("Error creating post");
    });

  };

  return (
      <section className='min-h-screen bg-gray-100 flex justify-center items-center px-4'>
        <div className='w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg'>

          {/* heading */}
          <h1 className='mb-6 text-2xl font-bold text-gray-800'>Create Post</h1>

          {/* form */}
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

              {/* choose file */}
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>
                  Upload Image
                </label>
                <input type="file" name='image' accept='image/*'
                className='w-full cursor-pointer rounded-lg 
                border border-gray-300 bg-gray-50 text-sm text-gray-600 file:mr-4 flie:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700'
                />
              </div>

              {/* caption */}
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>
                  Caption
                </label>
                <input type="text" name='caption' placeholder='give caption' required
                className='w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'/>
              </div>

              {/* submit button */}
              <button type="submit" className='mt-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]'>Submit</button>
          </form>
        </div>
    </section>
  );
};

export default CreatePost;