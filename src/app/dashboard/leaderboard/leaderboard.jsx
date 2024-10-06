import React from 'react'
import { AlarmClock } from 'lucide-react'

function Leaderboard() {
  return (
    <div className="h-full w-1/5 bg-gray-900/75 border-r border-white/30 rounded-l-xl flex text-white">
      <div className="w-full h-16 border-b border-white/30 rounded-tl-xl flex justify-around items-center text-slate-400 text-lg">
        <div className="flex flex-row items-center text-2xl">
          <AlarmClock color="yellowgreen" size={32} />
          <p className="ml-1 text-yellowgreen">30s</p>
        </div>
        <p>Round 1 of 3</p>
      </div>
    </div>
  )
}

export default Leaderboard
