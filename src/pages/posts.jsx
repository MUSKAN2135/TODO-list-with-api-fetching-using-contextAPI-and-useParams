import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PostsContext, ThemeContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';

export default function Post() {
    const { post, setpost } = useContext(PostsContext);
    const { theme, settheme } = useContext(ThemeContext);

    const toggletheme = () => {
        settheme(!theme)
    }
    const navigate = useNavigate()
    const handleuserdata = () => {
        navigate("/users")
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postresponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setpost(postresponse.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, [setpost])
    return (
        <div className={theme ? 'bg-purple-900 text-white min-h-screen px-44 py-5' : 'bg-white text-black min-h-screen px-44 py-5'}>
            <Link to="/home" className="back flex items-center cursor-pointer">
                <FaArrowLeft className='mx-2'/>
                Back to home
            </Link>
            <div className='flex flex-col items-center'>
                <button onClick={toggletheme} className="m-4 text-center cursor-pointer">
                    {theme ?
                        <FaSun />
                        :
                        <FaMoon />}
                </button>
                <button
                    onClick={handleuserdata}
                    className="m-4 px-4 py-2 text-center bg-purple-700 text-white rounded hover:bg-purple-600"
                >
                    Show Users
                </button>
            </div>
            <div className="mb-10">
                <h1 className="text-2xl font-bold text-center">Posts</h1>
                <div className="mt-4">
                    {post && post.length > 0 ? (
                        post.map((p) => (
                            <div key={p.id} className="mb-2 border-b pb-2">
                                <Link to={`/post/${p.id}`} className="text-blue-600 hover:underline">
                                    <h2 className="text-lg font-semibold">{p.title}</h2></Link>
                                <p className="">{p.body}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Loading posts...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
