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
                    <div className="renter-content">
                    <h1>Renter: {item.renter}</h1>
                    </div>
                    <div className="address-content">
                    <h2>address: {item.address}</h2>
                    </div>
                   <div className="issues">
                   <p>Issue: {item.description}</p>
                   </div>
                    </div>                 
                </div>
            )
        })}
  </Fragment>
   )
}