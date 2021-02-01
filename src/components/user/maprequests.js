import React from 'react';


export default function ShowAllRequests(props) {
    const items = props.needToBeFixed

   return(
   <div className="request-wrapper"> 
        {items.map(item => {
            return(
                <div key={item.id} className='request-card'>
                    <div className="heading">
                    <h1>{item.renter}</h1>
                    <h2>{item.address}</h2>
                    </div>
                    <div className="content">
                    <p>{item.description}</p>
                    </div>
                </div>
            )
        })}
  </div>
   )
}