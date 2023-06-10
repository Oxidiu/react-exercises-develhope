import {useState, useEffect} from 'react'

export const GithubUser = ({username} ) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then ((response) => {
            return response.json()
        })
        .then (json => {
            console.log(json)
            setData(json)
        })
    },[username])
    return <div>
       { data && (<div>
        <h1>{`Username is: ${data.login}`}</h1>
        <h3>{`Id is: ${data.id}`}</h3>
        <h3>{`Company is: ${data.company}`}</h3>
        <h3>{`Location is: ${data.location}`}</h3>


       </div>)}
    </div>
}