import React, { Fragment } from 'react';


export default function ShowAllRequests(props) {
    const items = props.needToBeFixed

   return(
   <Fragment>
        {items.map(item => {
           
            return(
                <div key={item.id} className='request-card' >
                        <h1>Maintanence Requests </h1>
                    <div className="card-content">
                    <h1>Renter <br /><hr></hr> Name: {item.renter}</h1>
                    
                    <h2>address <br /><hr></hr>{item.address}</h2>
                   
                    <p>Problem: <br />{item.description}</p>
                    </div>                 
                </div>
            )
        })}
  </Fragment>
   )
}