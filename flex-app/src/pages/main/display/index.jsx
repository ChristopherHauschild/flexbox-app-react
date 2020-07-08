import React from 'react'

import background from './background.svg'

const Display = props => {
  const { quantity, display, flexDirection, flexWrap, justifyContent,
    alignContent, alignItems, alignSelf, selectedBlock } = props

  let alContent = ''

  if(alignItems !== 'none' || alignSelf !== 'none' ) {
    alContent = ''
  } else {
    alContent = alignContent
  }

  let blocks = []
  let alSelf = ''
  let bg = ''

  for (let i=0; i<quantity; i++){
    if(i + 1 === selectedBlock) {
      alSelf = `${alignSelf}`
      bg = 'bg-teal-600'
    }
    if(i + 1 !== selectedBlock) {
      bg = 'bg-teal-400'
      alSelf = ''
    }

    blocks.push(<div key={i} className={`flex ${bg} m-2 w-auto px-10 border-b border-r-2 border-gray-600 rounded shadow-lg justify-center items-center`}
      style={{ minWidth: '96px', minHeight: '96px', alignSelf: `${alSelf}` }}>
      <span className='text-lg font-semibold text-gray-100'>{i + 1}</span>
    </div>)
  }

  return (
    <div className='p-4 py-4 mt-6 mb-4 sm:mb-0 w-full h-full border rounded-sm border-gray-300 shadow-lg'
      style={{ backgroundImage: `url(${background})`, minHeight: '218px' }}
    >
      <div className='flex h-full' style={{ display: `${display}`, flexDirection: `${flexDirection}`,
        flexWrap: `${flexWrap}`, justifyContent: `${justifyContent}`,
        alignContent: `${alContent}`, alignItems: `${alignItems}`}}>
        {blocks}
      </div>
    </div>
  )
}

export default Display