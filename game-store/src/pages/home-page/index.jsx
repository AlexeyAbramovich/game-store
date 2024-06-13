import React from 'react'
import GAMES from '../../data'
import './home-page.css'
import { GameItem } from '../../components/game-item'

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  )
}
