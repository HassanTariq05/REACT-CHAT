import React from 'react'
import Drawing from './drawing/Drawing'
import Chat from './chat/Chat'
import '../dashboard/dashboard.css'
import Leaderboard from './leaderboard/leaderboard'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Leaderboard />
      <Drawing />
      <Chat />
    </div>
  )
}

export default Dashboard
