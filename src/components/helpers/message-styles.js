import React, { Fragment, useEffect, useState } from 'react';


const Message = (props) => {
   const [messageData, setMessageData] = useState([])
    
   useEffect(() => {
        setMessageData(props.data)
    }, [props.data])
   return(``
       <Fragment>
           {messageData.map(data => {
               return(
   <div className='message-container'>
   <div className="image-container">
    <img src="https://source.unsplash.com/random" alt="img"/> 
    <h3>{data.from}</h3>
   </div>
   <div className="message-body">
        <p>{data.msg}</p>
   </div>
   <div className="time">
        {data.timestamps.createdAt}
   </div>

  </div>
               )
           })}
       </Fragment>
   )
}

export default Message 