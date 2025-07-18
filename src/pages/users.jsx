import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext, UsersContext } from '../context';
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';

export default function Users() {
    const { user, setusers } = useContext(UsersContext);
    const [showUsers, setShowUsers] = useState(false);
    const { theme, settheme } = useContext(ThemeContext);

    const toggletheme = () => {
        settheme(!theme)
    }
    const navigate = useNavigate()
    const handlepostdata = () => {
        navigate("/post")
    }
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userresponse = await axios.get('https://jsonplaceholder.typicode.com/users');
                setusers(userresponse.data);
                setShowUsers(true);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, [setusers])
    return (
        <div className={theme ? 'bg-purple-900 text-white min-h-screen px-44 py-5' : 'bg-white text-black min-h-screen px-44 py-5'}>
            <Link to="/home" className="back flex items-center cursor-pointer">
                <FaArrowLeft className='mx-2' />
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
                    onClick={handlepostdata}
                    className="m-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-400"
                >
                    Show Posts
                </button>
            </div>
            {showUsers && (
                <div>
                    <h1 className="text-2xl font-bold text-center">Users</h1>
                    <div className="mt-4">
                        {user && user.length > 0 ? (
                            user.map((u) => (
                                <div key={u.id} className="mb-2 border-b pb-2">
                                    <h2 className="text-lg font-semibold">Name:{u.name}</h2>
                                    <Link to={`/user/${u.id}`} className="text-blue-600 hover:underline">
                                        <p className="text-blue-600">Username:{u.username}</p>
                                    </Link>
                                    <label>Email:{u.email}</label>
                                    <p className="">
                                        Address: {u.address?.city}, {u.address?.street}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">Loading users...</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
