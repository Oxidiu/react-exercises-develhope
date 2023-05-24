import React from 'react'

export class Welcome extends React.Component{
  static defaultProps = {
    name: 'Radu'
  }
  render(){
    return (
      <div>
        <p> Hello {this.props.name}</p>
      </div>
    )
  }
}