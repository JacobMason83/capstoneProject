import React, { Fragment, useEffect, useState } from 'react'
import { Stack, Badge } from 'react-bootstrap'
import homePic from '../../style/images/home.svg'

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
    <div className="dashboard">
    <h1>
      <Badge>
        {username  || 'Hi welcome to the Landlord tenant App'}
      </Badge>
    </h1>
    
      <Stack direction='horizontal' gap={4}>
        <h4 ms-auto> 
        <img src={homePic} alt="home" />
        You have insert property count here properties registered!</h4>

        <h3 ms-auto>Here are all of your properties:</h3>
     
    
        <h3 ms-auto>Here are the renters who have paid this month: </h3>

        <h3 ms-auto>hi im a message please read me </h3>
        </Stack>
      </div>
    </Fragment>
  )
}
export default DashBoard
