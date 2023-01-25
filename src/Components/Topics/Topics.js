import React, { useEffect, useState } from 'react';
import Subjects from './Subjects';

const Topics = () => {
    const [Topics, setTopic] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setTopic(data.data));
    }, [])
    
    return (
        <div>
            <h1>This is Topics </h1>
            <div className='flex mx-40 my-10'>
                {
                Topics.map(Topic => <Subjects key={Topic.id} Topic={Topic}></Subjects>)
            }
            </div>
        </div>
    );
};

export default Topics;