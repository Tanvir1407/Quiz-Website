import React from 'react';

const Subjects = ({Topic}) => {
    const {name, logo,total } = Topic;
    return (
        <div className='bg-cyan-700 m-2 p-4 rounded-md'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between'>
                <h1 className='text-white font-bold text-xl'>{name }</h1>
                <button>Practise </button>
            </div>
        </div>
    );
};

export default Subjects;