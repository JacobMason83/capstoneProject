import React, { Fragment } from 'react';


export default function ShowAllRequests(props) {
    const items = props.needToBeFixed

   return(
   <Fragment>
        {items.map(item => {
           
            return(
                <tr key={item.id}>
                    <td>{item.renter}</td>
                    <td>{item.address}</td>
                    <td>{item.description}</td>
                </tr>
            )
        })}
  </Fragment>
   )
}