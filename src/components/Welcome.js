import React from 'react'

export class Welcome extends React.Component{
  render(){
    return (
      <div>
        <p> Hello {this.props.name}</p>
      </div>
    )
  }
}