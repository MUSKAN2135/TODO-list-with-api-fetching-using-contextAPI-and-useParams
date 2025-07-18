import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function Userdetails() {
    let [userData, setuserData] = useState()
    let { id } = useParams();

    let fetchdata = async () => {
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setuserData(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }
    useEffect(() => {
        fetchdata();
    }, [id]);
    console.log(userData)
    return (
        <>
            <Link to="/home" className="back flex items-center cursor-pointer">
                <FaArrowLeft className='mx-2' />
                Back to home
            </Link>
            <div>
                <h1>User Details</h1>
                {userData ? (
                    <div>
                        <h2>username:{userData.username}</h2>
                        <h3>Email:{userData.email}</h3>
                        <p>City:{userData.address?.city}, street:{userData.address?.street}, Zipcode{userData.address?.zipcode}</p>
                        <p>Phone:{userData.phone}</p>
                        <p>Website:{userData.website}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

            </div>
        </>
    );
};