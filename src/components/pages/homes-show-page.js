import React, { useState } from 'react'
import axios from 'axios'
const HomeShowPage = (props) => {
    const [homes, setHomes] = useState([])

  

    const showHommes = () => {     
        axios
        .get('http://localhost:4000/allHomes', { withCredentials: true })  
        .then(res => res.json()) 
        .then(data => console.log(data))
        .catch(err => console.error(err))
    //     homes.map(home => {
    //         return (
    //             <div className="home-wrapper">
    //                 {home}
    //             </div>
    //         )
    //     }) 
     }
    return (
        <div className="show-page">
            <h1>Hi from home show page </h1>
            {showHommes()}
        </div>
    )
}

export default HomeShowPage




// TODO 
// create a class for the properties x

// create state for property items
// map the properites so that they can just be passed in and rendered to the screen
// create a  way to add / delete properties 
// add a way to update the list , change specific things ie tenants, new lease date etc4