import React from 'react'
import axios from 'axios'
import Meme from './Meme'

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

  addNewMeme = () => {
    axios.post(
      'http://localhost:3001/api/memes',
      { meme:
        {
          top_text: 't',
          img: 'i', 
          bottom_text: 'b'
        }
      }
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return(


      <div>

        <button className="newMemeButton"
          onClick={this.addNewMeme} >
          New Meme
        </button>

        {this.state.memes.map((meme) => {
          return(<Meme meme={meme} key={meme.id} />)
        })}
      </div>
      ) 
  }
}


export default MemesContainer