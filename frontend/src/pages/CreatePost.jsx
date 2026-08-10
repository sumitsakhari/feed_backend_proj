import React from 'react';

const CreatePost = () => {
  return (
    <div className=''>
        <section class='create-post-section' className=''>
          <h1 className='mt-2'>Create Post</h1>

          <form className='bg-gray-600 flex flex-col mt-2'>
              <input type="file" name='image' accept='image/*'/>
              <input type="text" name='caption' placeholder='give caption' required/>
              <button type="submit">Submit</button>
          </form>
      </section>
    </div>
  );
};

export default CreatePost;