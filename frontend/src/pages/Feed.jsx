import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then(res=>{
            setPosts(res.data.posts);
        })
    },[]);

    return (
    <section className='min-h-screen bg-gray-100 px-4 py-8'>
        <div className='mx-auto flex max-w-2xl flex-col gap-6'>
            {
                posts.length>0 ? (
                    posts.map( (post) => (
                        <div key={post._id} className='overflow-hidden rounded-2xl bg-white shadow-md'>
                            <img src={post.image} alt={post.caption}  className='h-auto max-h-[600px] w-full object-cover'/>
                            <div className='px-5 py-4'>
                                <p className='text-base text-gray-800'>{post.caption}</p>
                            </div>
                        </div>
                    ) )
                ) : (
                    <div className='flex min-h-[300px] items-center justify-center'>
                        <h1 className='text-xl font-semibold text-gray-500'>No posts available</h1>
                    </div>
                )
            }
        </div>
    </section>
  );
};

export default Feed;