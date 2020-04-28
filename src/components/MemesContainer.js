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
    axios.get('http://localhost3001/api/memes.json')
    .then(response => {
      console.log(response)
      this.setState({memes: response.data})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return(
      <div>
        <h1>Memes </h1>
      </div>
      ) 
  }
}


export default MemesContainer