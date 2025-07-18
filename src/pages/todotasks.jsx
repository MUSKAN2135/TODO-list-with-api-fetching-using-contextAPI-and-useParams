import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Tasks() {
    const [todolist, setTodolist] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("todolist");
        if (saved) {
            try {
                setTodolist(JSON.parse(saved)); // safer and supports complex strings
            } catch (error) {
                console.error("JSON parse error:", error);
                setTodolist([]);
            }
        }
    }, []);

    const handleDelete = (index) => {
        const updated = todolist.filter((_, i) => i !== index);
        setTodolist(updated);
        localStorage.setItem("todolist", JSON.stringify(updated));
        // array to string
        toast.success("Task deleted successfully!");
    };

    return (
        <>
            <Link to="/todolist" className="back flex items-center m-5 cursor-pointer">
                <FaArrowLeft className='mx-2' />
                Back to home
            </Link>
            <div className="p-3 m-5 text-center">
                <h2 className="text-xl font-bold mb-4 ">All Tasks</h2>
                {todolist.length === 0 ? (
                    <p>No tasks found.</p>
                ) : (
                    <ul className="space-y-2 text-left">
                        {todolist.map((task, i) => (
                            <li key={i} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                                <span>{task}</span>
                                <button
                                    onClick={() => handleDelete(i)}
                                    className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    onClick={() => {
                        localStorage.removeItem("todolist");
                        setTodolist([]);
                        toast.success("All tasks cleared!");
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4"
                >
                    Clear All Tasks
                </button>
            </div>
        </>
    );
}
