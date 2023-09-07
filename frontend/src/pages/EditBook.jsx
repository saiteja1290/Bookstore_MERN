// import React from 'react';
import React, { useEffect, useState } from 'react';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditBook = () => {
    // const [books, setbooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishyear, setpublishyear] = useState('');
    const [loading, setloading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        setloading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                // setbooks(response.data.data)
                // console.log(response.data)
                setAuthor(response.data.data.author)
                setTitle(response.data.data.title)
                setpublishyear(response.data.data.publishyear)
                setloading(false)
            })
            .catch((error) => {
                alert("There has been a error, please check console")
                console.log("Error :", error)
            })
    }, [])
    const editbook = () => {
        const data = {
            title,
            author,
            publishyear
        };
        setloading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setloading(false);
                navigate('/');
            })
            .catch((error) => {
                setloading(false);
                console.log("Error:", error)
            })
    }
    // const prevtitle = title
    return (
        // <div className='p-4'>
        //     {/* <BackButton /> */}
        //     <h1 className='text-3xl my-4'>Edit Book</h1>
        //     {loading ? <Spinner /> : ''}
        //     <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        //         <div className='my-4'>
        //             <label className='text-xl mr-4 text-gray-500'>Title</label>
        //             <input
        //                 type='text'
        //                 value={title}
        //                 onChange={(e) => setTitle(e.target.value)}
        //                 className='border-2 border-gray-500 px-4 py-2 w-full'
        //             />
        //         </div>
        //         <div className='my-4'>
        //             <label className='text-xl mr-4 text-gray-500'>Author</label>
        //             <input
        //                 type='text'
        //                 value={author}
        //                 onChange={(e) => setAuthor(e.target.value)}
        //                 className='border-2 border-gray-500 px-4 py-2  w-full '
        //             />
        //         </div>
        //         <div className='my-4'>
        //             <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
        //             <input
        //                 type='number'
        //                 value={publishyear}
        //                 onChange={(e) => setpublishyear(e.target.value)}
        //                 className='border-2 border-gray-500 px-4 py-2  w-full '
        //             />
        //         </div>
        //         <button className='p-2 bg-sky-300 m-8' onClick={editbook}>
        //             Save
        //         </button>
        //         {/* <Link to={`/books`} >Home Page</Link> */}
        //     </div>
        // </div >
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <div className="bg-purple-900 p-4 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="text-3xl my-4">Edit Book</h1>
                    {/* {loading ? <Spinner /> : ''} */}
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-white-400">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-white-400 px-4 py-2 w-full focus:outline-none focus:border-purple-600 rounded text-black"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-white-400">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border-2 border-white-400 px-4 py-2 w-full focus:outline-none focus:border-purple-600 rounded text-black"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-white-400">Publish Year</label>
                    <input
                        type="number"
                        value={publishyear}
                        onChange={(e) => setpublishyear(e.target.value)}
                        className="border-2 border-white-400 px-4 py-2 w-full focus:outline-none focus:border-purple-600 rounded text-black"
                    />
                </div>
                <button
                    className="p-2 bg-purple-600 hover:bg-purple-700 text-white m-8 rounded"
                    onClick={editbook}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditBook
