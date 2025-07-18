import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Todo() {
    const [todolist, setTodolist] = useState([]);
    const [formdata, setformdata] = useState("");

    useEffect(() => {
        const savedData = localStorage.getItem("todolist");
        if (savedData) {
            try {
                setTodolist(JSON.parse(savedData)); 
            } catch (error) {
                console.error("JSON parse error:", error);
                setTodolist([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todolist));
    }, [todolist]);

    const handleAdd = () => {
        if (formdata === "") {
            toast.error("Please enter a task");
            return;
        }

        setTodolist([...todolist, formdata]);
        setformdata("");
        toast.success("Task added successfully");
    };

    return (
        <div>
            <Link to="/home" className="back flex items-center cursor-pointer m-5">
                <FaArrowLeft className='mx-2' />
                Back to home
            </Link>
            <div className='flex flex-col items-center p-5'>
                <h2 className='px-6 py-3 text-2xl m-3'>Todo List</h2>
                <div className="todo-button flex items-center">
                    <input
                        placeholder='Enter task over here'
                        type='text'
                        className="pl-4 pr-18 py-[10px] border border-gray-400 rounded-l-md outline-0"
                        value={formdata}
                        onChange={(e) => setformdata(e.target.value)}
                        required
                    />
                    <button
                        onClick={handleAdd}
                        className="addtask bg-violet-400 hover:bg-violet-500 px-8 py-[10.5px] rounded-r-md cursor-pointer"
                    >
                        Add Task
                    </button>
                </div>
                <Link to="/todotasks" className='m-4 bg-purple-200 py-3 px-6'>
                    View All Tasks
                </Link>
            </div>
        </div>
    )
}
