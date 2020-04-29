import React, { Component } from 'react'
import axios from 'axios'

class MemeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="tile">
        <form>
          <input className='input' type="text"
            name="top_text" placeholder='Enter a Top Text' />

          <input className='input' type="text"
            name="bottom_text" placeholder='Enter a Bottom Text' />

          <input className='input' type="text"
            name="img" placeholder='Enter an Image URL' />
        </form>
      </div>
    );
  }
}

export default MemeForm