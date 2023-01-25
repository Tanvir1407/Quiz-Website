import React from 'react';
import feature from '../assest/quiz__feature.png';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <>
        <div className='flex justify-around items-center bg-gray-200 p-10'>
            <div>
                <h1 className='text-6xl font-bold text-slate-700'>Test Your Level </h1>
            </div>
            <div>
                <img src={feature} alt="features_photo" />
            </div>
        </div>
        <Topics></Topics>    
        </>
    );
};

export default Home;