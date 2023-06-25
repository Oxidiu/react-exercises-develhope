import React from "react"
import { Link } from "react-router-dom"

export const Welcome = () => {
    return (
        <div>
            <div>Welcome</div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/users/oxidiu">User</Link>
            <br />
            <Link to="/counter">Counter</Link>
            <br />
            <Link to="/universalTruth">Universal Truth</Link>
        </div>
    )
        
    
}

