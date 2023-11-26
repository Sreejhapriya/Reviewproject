import React from 'react'
import AppBar from '@mui/material/AppBar';
import {  Toolbar, Button,Typography} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
  <AppBar sx={{backgroundColor:'white', position:'fixed'}}>
  <Toolbar>
    <AutoStoriesIcon color='primary'/>
    <Link to={'/signin'}>
    <Button  sx={{marginLeft:'500%'}}variant='outlined'>Logout</Button>
    </Link>
   </Toolbar>
  </AppBar>
    </>
  )
}

export default NavBar
