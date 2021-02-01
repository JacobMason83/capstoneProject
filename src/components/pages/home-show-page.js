import React, { useEffect, useState } from 'react'
import axios from 'axios'
const HomeShowPage = () => {
    const [homes, setHomes] = useState([])

  //0: {id: "60171abd19459709748cc33a", propertyName: "Test Property", address: "123 test land ", value: 500000, renter: "Test dude ", …

    
    
     useEffect(() => {
        axios
        .get('http://localhost:4000/allHomes', { withCredentials: true })  
        .then(res => setHomes(res.data))
        .catch(err => console.error(err)) 
         
     }, [])
    return (
        
        <div className="show-page-properties">                
            {homes.map(home => {
               return (
             <div key={home.id}>
                <h1>{home.propertyName}</h1>    
                <h2>{home.address}</h2>
                <h2>{home.renter}</h2>
                <h2>{home.value}</h2>
                  </div>

               ) 

            })}
           
         

            
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