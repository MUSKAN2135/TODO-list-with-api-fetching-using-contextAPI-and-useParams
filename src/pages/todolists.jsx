import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Todolist() {
    const [todolist, setTodolist] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("todolist");
        if (saved) {
            try {
                setTodolist(JSON.parse(saved));
            } catch (error) {
                console.error("JSON parse error:", error);
            }
        }
    }, []);

    const handleDelete = (index) => {
        const updated = todolist.filter((_, i) => i !== index);
        setTodolist(updated);
        localStorage.setItem("todolist", JSON.stringify(updated));
        toast.success("Task deleted successfully!");
    };

    const handleUpdate = (index) => {
        if (editValue.trim() === "") {
            toast.error("Task cannot be empty");
            return;
        }
        const updatedList = [...todolist];
        updatedList[index] = editValue;
        setTodolist(updatedList);
        localStorage.setItem("todolist", JSON.stringify(updatedList));
        setEditIndex(null);
        setEditValue("");
        toast.success("Task updated successfully");
    };

    return (
        <>
            <Link to="/todo" className="back flex items-center m-5 cursor-pointer">
                <FaArrowLeft className="mx-2" />
                Back to home
            </Link>
            <div className="p-3 m-5 text-center">
                <h2 className="text-xl font-bold mb-4">All Tasks</h2>
                {todolist.length === 0 ? (
                    <p>No tasks found.</p>
                ) : (
                    <ul className="space-y-2 text-left max-w-md mx-auto">
                        {todolist.map((task, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                                {editIndex === index ? (
                                    <>
                                        <ul
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            className="border px-2 py-1 w-full mr-2">
                                        </ul>
                                        <button
                                            onClick={() => handleUpdate(index)}
                                            className="bg-green-600 text-white px-2 py-1 rounded mr-1"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditIndex(null)}
                                            className="bg-gray-400 text-white px-2 py-1 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <span className="flex-1">{task}</span>
                                        <button
                                            onClick={() => {
                                                setEditIndex(index);
                                                setEditValue(task);
                                            }}
                                            className="bg-blue-500 text-white px-2 py-1 rounded mr-1"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-600 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
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
