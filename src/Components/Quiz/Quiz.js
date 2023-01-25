import React from 'react';
import { useLocation } from 'react-router-dom';

const Quiz = () => {

    const location = useLocation();
    console.log(location.state.name);
    return (
        <div>
            <h1>Quiz of {location.state.name}</h1>
        </div>
    );
};

export default Quiz;