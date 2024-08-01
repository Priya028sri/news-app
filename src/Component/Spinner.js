import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{fontSize:`30px`,color:`#38a3a5`}}>
       News<img src={loading} alt="Loading" style={{height:`10vh`, width:`10vh`}}/>UB
      </div>
    )
  }
}

export default Spinner
