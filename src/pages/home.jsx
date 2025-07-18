import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
    const { theme, settheme } = useContext(ThemeContext);

    const toggletheme = () => {
        settheme(!theme)
    }
    const navigate = useNavigate()
    const handleuserdata = () => {
        navigate("/users")
    }
    const handlepostdata = () => {
        navigate("/post")
    }
    return (
        <div className={theme ? 'bg-purple-900 text-white min-h-screen px-44 py-5' : 'bg-white text-black min-h-screen px-44 py-5'}>
            <div className='flex flex-col items-center'>
                <button onClick={toggletheme} className="m-4 text-center cursor-pointer">
                    {theme ?
                        <FaSun />
                        :
                        <FaMoon />}
                </button>
                <div className="buttons flex">
                    <button
                        onClick={handleuserdata}
                        className="m-4 px-4 py-2 text-center bg-purple-700 text-white rounded hover:bg-purple-600"
                    >
                        Show Users
                    </button>
                    <button
                        onClick={handlepostdata}
                        className="m-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-400"
                    >
                        Show Posts
                    </button>
                    <Link to="/todolist"
                        className="m-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-400">
                        TODO List
                    </Link>
                </div>
            </div>
        </div>
    );
}
