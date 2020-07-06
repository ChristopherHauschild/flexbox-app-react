import React from 'react'

const Display = ({ quantity }) => {
  let squares = []

  for (let i=0; i<quantity; i++){
    squares.push(<div key={i}className='w-24 m-2 h-24 bg-red-600 rounded'></div>)
  }

  return (
    <div className='flex flex-col bg-gray-300 p-4 py-4 mt-5 mb-4 sm:mb-0 w-full h-full border rounded-sm border-gray-400 shadow-lg'>
      {squares}
    </div>
  )
}

export default Display