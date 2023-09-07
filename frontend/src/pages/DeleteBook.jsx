// import React from 'react';
import React, { useEffect, useState } from 'react';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const DeleteBook = () => {
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const deletebookfn = () => {
        setloading(true)
        axios.delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                alert("Book Deleted");
                navigate('/')
            })
            .catch((error) => {
                alert('Error check console')
                console.log(error)
            })
    }
    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <div className="bg-purple-900 p-4 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="text-3xl my-4">Delete Book</h1>
                    {loading ? <Spinner /> : ''}
                </div>
                <p className="text-white-400 my-4 text-center">
                    Are you sure you want to delete this book?
                </p>
                <div className="flex justify-center">
                    <button
                        className="p-2 bg-red-600 hover:bg-red-700 text-white m-4 rounded"
                        onClick={deletebookfn}
                    >
                        Delete
                    </button>
                    <button
                        className="p-2 bg-purple-600 hover:bg-purple-700 text-white m-4 rounded"
                        onClick={navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </div>

        </div>
    )
}



export default DeleteBook
