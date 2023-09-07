import React, { useEffect, useState } from 'react'
import axios from "axios"; //to handle http req from backend
import Spinner from '../components/spinner';
// import Backbutton from '../components/BackButton';
import { useParams } from 'react-router-dom';


const ShowBook = () => {
    const [books, setbooks] = useState([])
    const [loading, setloading] = useState([])
    const { id } = useParams();

    useEffect(() => {
        setloading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setbooks(response.data.data);
                // console.log(response)
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
                setloading(false);
            });
    }, [])
    return (
        // <div className='p-4'>
        //     {/* ShowBook */}
        //     {/* <Backbutton /> */}
        //     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        //         <p className="text-2xl font-semibold">Title : {books.title}</p>
        //         <p className="text-gray-600 text-sm">Author: {books.author}</p>
        //         <p className="text-gray-600 text-sm">Published Year: {books.publishyear}</p>
        //     </div>

        // </div>
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <div className="bg-purple-900 p-4 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="text-3xl my-4">Book Details</h1>
                    {/* {loading ? <Spinner /> : ''} */}
                </div>
                <div className="my-4">
                    {/* <label className="text-xl mr-4 text-white-400">Title</label> */}
                    <p className="text-1xl">Title : {books.title}</p>
                </div>
                <div className="my-4">
                    {/* <label className="text-xl mr-4 text-white-400">Author</label> */}
                    <p className=" text-1xl">Author: {books.author}</p>
                </div>
                <div className="my-4">
                    {/* <label className="text-xl mr-4 text-white-400">Publish Year</label> */}
                    <p className=" text-1xl">Published Year: {books.publishyear}</p>
                </div>
            </div>
        </div>

    )
}

export default ShowBook
