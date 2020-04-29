import React from 'react'
import axios from 'axios'
import Meme from './Meme'
import update from 'immutability-helper'
import MemeForm from './MemeForm'

class MemesContainer extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      memes: [],
      editingMemeId: null
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
          top_text: '',
          img: '', 
          bottom_text: ''
        }
      }
    )
    .then(response => {
      console.log(response.data)
      const memes = update(this.state.memes, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        memes: memes,
        editingMemeId: response.data.id
      })
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
          if(this.state.editingMemeId === meme.id) {
            return(<MemeForm meme={meme} key={meme.id} />)
          } else {
          return(<Meme meme={meme} key={meme.id} />)
          }
        })}
      </div>
    ) 
  }
}


export default MemesContainer