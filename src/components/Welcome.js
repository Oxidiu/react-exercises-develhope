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
            <div>{this.props.age && this.props.name === "John" && <p>{this.props.age > 18 && this.props.age < 65 ?  <Age age={this.props.age}/> : "Please enter a valid age"}</p>}</div>
        </div>
      )
    }
}