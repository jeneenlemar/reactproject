import React from 'react'

const Meme = ({meme}) =>
  <div className="tile" key={meme.id}>
    <h4>{meme.top_text}</h4>
    <img src={meme.img} width='300px' />
    <h4>{meme.bottom_text}</h4>
  </div>

export default Meme