import React from 'react'

import background from './background.svg'

const Display = props => {
  const { quantity, display, flexDirection, flexWrap, justifyContent,
    alignContent, alignItems } = props

  let squares = []

  for (let i=0; i<quantity; i++){
    squares.push(<div key={i}className='flex w-24 m-2 h-24 bg-teal-300 border-b border-r-2 border-gray-600 rounded shadow-lg justify-center items-center'>
      <span className='text-lg font-semibold text-gray-100'>{i + 1}</span>
    </div>)
  }

  return (
    <div className='p-4 py-4 mt-6 mb-4 sm:mb-0 w-full border rounded-sm border-gray-300 shadow-lg'
      style={{ backgroundImage: `url(${background})`, minHeight: '218px' }}
    >
      <div style={{ display: `${display}`, flexDirection: `${flexDirection}`,
        flexWrap: `${flexWrap}`, justifyContent: `${justifyContent}`,
        alignContent: `${alignContent}`, alignItems: `${alignItems}` }}>
        {squares}
      </div>
    </div>
  )
}

export default Display