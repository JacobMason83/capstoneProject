import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'
import SideBarFullScreen from '../Navigation/side-bar'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fb8122'
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    background: '#1D2228', 
    color: 'e1e2e2'
  }
}));

export default function ButtonAppBar(props) {
  const [username, setUserName ] = useState('')
  
  useEffect(() => {
        setUserName(props.username)
    }, [props.username])
  const classes = useStyles();


  return (
    <div className={classes.root} background={classes.root.background}>
      <AppBar position="static" className={classes.navBar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={() => <SideBarFullScreen open={{open: true}}/>} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Landlord Tenant App
          </Typography>
          {props.role ? (
              <Fragment>
                <Button color='inherit'>{username}</Button>
              </Fragment>
          ):(
              <Fragment>
          <Button color="inherit"><Link to='./'>Login</Link></Button>

              </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}