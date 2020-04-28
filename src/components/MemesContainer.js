import React from 'react'
import axios from 'axios'

class MemesContainer extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      memes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/memes')
    .then(response => {
      console.log(response)
      this.setState({memes: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        {this.state.memes.map((meme) => {
          return(
            <div key={meme.id}> 
            <h4>{meme.top_text}</h4>
            <img src={meme.img} />
            <h4>{meme.bottom_text}</h4>
            </div>)
        })}
      </div>
      ) 
  }
}


export default MemesContainer