import React, { Component } from 'react'

import loading from '../items/loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>

            <img src={loading} alt="" />

      </div>
    )
  }
}

export default spinner