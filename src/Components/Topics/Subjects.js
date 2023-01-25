import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Subjects = ({Topic}) => {
    const { name, id, logo, total } = Topic;
    const linkid = `/quiz/${id}`;
    return (
        <div className='bg-cyan-700 m-2 p-4 rounded-md'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='mt-5 flex justify-between items-center'>
                <h1 className='text-white font-bold text-xl'>{name}</h1>
                <div className='bg-gray-100 p-1 m-1 duration-500 rounded hover:bg-slate-400 hover:text-yellow-200'>
                    <Link to={linkid} state={{name,id}}> Practise <FontAwesomeIcon className='px-1' icon={faArrowRight } /></Link>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Subjects;