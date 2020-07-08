import React from 'react'

const Text = ({ children }) => {
  return (
    <div className='m-3 flex items-center p-3 shadow-xl bg-gray-300 w-full h-auto border'>
    <p className='p-2 text-center sm:text-justify'>
      {children}
    </p>
  </div>
  )
}

export default Text