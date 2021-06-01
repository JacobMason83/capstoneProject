import React, { Fragment, useEffect, useState } from 'react'

// TODO
// add to show properties, and any messages that came in

const DashBoard = props => {
  const [username, setUsername] = useState('')
  const page = 'dashboard'

  useEffect(() => {
    setUsername(props.username)
  }, [props.username])

  return (
    <Fragment>
      <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
          <div className='personal-header'>
            <div className='property-count'>
              {username}
              <h4>
                You have insert property count here properties registered!
              </h4>
            </div>
          </div>
          <div className='property-name'>
            <h3>Here are all of your properties:</h3>
          </div>

          <div className='card'>
            <div className='card-wrapper'>
              <h3>Here are the renters who have paid this month: </h3>
            </div>
          </div>
          <div className='message-content'>
            <h3>hi im a message please read me </h3>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default DashBoard
