import React from 'react'
import Player from './Player'

const PlayerList = ({brobz}) => {
  return (
    <div>
        {brobz.map((p, index)=>  <Player adam2={p} />   )}
        
    
    </div>
  )
}

export default PlayerList