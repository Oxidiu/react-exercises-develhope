import React from 'react'
import { Age } from './Age'

export class Welcome extends React.Component{
  static defaultProps = {
    name: 'Radu'
  }
  
  render(){
    return (
      <div>
        <p> Hello {this.props.name}</p>
        <div><Age age={this.props.age}/></div>
      </div>
    )
  }
}