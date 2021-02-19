import React, {useEffect, useState} from 'react'


// TODO
// add to show properties, and any messages that came in 

const DashBoard = props => {
  const [username, setUsername] = useState('')

  useEffect(()=> {
    setUsername(props.username)
    }, [props.username] )

  return (
    <div className='dashboard-container'>
    <div className="personal-header">
      <div className="property-count">
      {username}
        <h4>You have insert property count here  properties registered!</h4>
      </div>
      </div>
      <div className="property-name">
        <h3>Here are all of your properties:</h3>
      </div>
    
      <div className="property-content">
        <div className="card">
          <div className="card-wrapper">
            <h3>Here are the renters who have paid this month: </h3>
          </div>
        </div>
      </div>
      <div className="message-content">
      <h3>hi im a message please read me </h3>
      </div>
    </div>
  )
}
export default DashBoard
