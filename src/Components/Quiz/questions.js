import React from 'react'

const questions = (props) => {
    const { question, options } = props.quiz
    
  return (
      <div className='bg-gray-200 p-6 m-10 rounded-md'>
          <div className='font-bold text-xl text-slate-600'>
              {question}
          </div>
          <div className='grid grid-cols-2 mt-4'>
              {options.map(option => <div className='border-2 border-solid border-gray-400 rounded p-3 text-gray-500 m-1'>{option}</div>)}
          </div>
     </div>
  )
}

export default questions