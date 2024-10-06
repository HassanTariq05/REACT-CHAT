import React from 'react'

function Drawing() {
  return (
    <div className="h-full w-3/4 bg-gray-900/80 border-r border-white/30 flex text-white">
      <div className="w-full h-16 border-b border-white/30 flex justify-center items-center">
        <p className="flex space-x-2 text-cyan-400 tracking-widest font-bold text-[38px] font-sans">
          {['C', 'h', 'e', 'r', 'r', 'y'].map((letter, index) => (
            <span
              key={index}
              className="border-b border-solid border-white inline-block"
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Drawing
