import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='flex flex-col box-border overflow-auto items-center px-4 py-4 mx-8 mt-20 sm:mt-24 mb-10 h-auto w-full shadow-xl rounded-sm bg-white border border-solid border-gray-200'>
      {children}
    </div>
  )
}

export default Card