import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetectedQN from './DetectedQN';

const Quiz = () => {

    const location = useLocation();
    const {name, id} = location.state
    const [Quiz, setQuiz] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
            .then(data => setQuiz(data.data.questions))
    }, []);

    
    return (
        <div className='mt-10'>
            <h1 className='text-center text-bold text-2xl text-cyan-700'>Quiz of {name}</h1>

            <div className='w-1/2 m-auto '>
                {
                    Quiz.map(quiz => <DetectedQN key={quiz.id} quiz={quiz}> </DetectedQN>)
                }
            </div>
        </div>
    );
};

export default Quiz;