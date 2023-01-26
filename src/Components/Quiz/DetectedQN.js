import React, { useState } from 'react';

const DetectedQN = ({quiz}) => {
    const { question, options, id } = quiz;
    const [answer, setAnswer] = useState(0)
  const selected = (e) => {
    e.target.children[0].checked = true;

    if (e.target.textContent == quiz.correctAnswer) {
        setAnswer(1)
    } else {
        setAnswer(10)
    }
    };
    if (answer == 1) {
         alert("Right Answer")
    } else if (answer == 10) {
        alert("Worng Answer")
     }

  return (
    <div className="bg-gray-200 p-6 m-10 rounded-md">
      <div className="font-bold text-xl text-slate-600">{question}</div>
      <div className="grid grid-cols-2 mt-4">
        {options.map((option) => (
            <div className="border-2 border-solid border-gray-400 rounded  text-gray-500 m-1 ">
            <div className="flex cursor-pointer p-3" id={id} onClick={selected}>
              <input type="radio" className="mr-2" name="name" />
              {option}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectedQN;