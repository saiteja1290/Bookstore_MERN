import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
const Backbutton = ({ destination = '/' }) => {
    return (
        <div>
            <Link to={destination}>
                <BsArrowLeft className='text-2xl' />
            </Link>
        </div>
    )
}

export default Backbutton
