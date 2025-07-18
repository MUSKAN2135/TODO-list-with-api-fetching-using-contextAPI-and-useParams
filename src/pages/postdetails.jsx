import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function Postdetails() {
    let [postData, setpostData] = useState()
    let { id } = useParams();

    let fetchdata = async () => {
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setpostData(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }
    useEffect(() => {
        fetchdata();
    }, [id]);
    console.log(postData)
    return (
        <>
            <Link to="/home" className="back flex items-center cursor-pointer">
                <FaArrowLeft className='mx-2' />
                Back to home
            </Link>
            <div>
                <h1>Post Details</h1>
                {postData ? (
                    <div>
                        <h2>{postData.title}</h2>
                        <p>{postData.body}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

            </div>
        </>
    );
};