import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Form } from './component/form';
import Home from './component/home';
import ThankYou from './component/thankYouPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
  
}));

function App() {
  const classes = useStyles();

  return (
   
  <Router>
    <div className={classes.root}>
          <AppBar position="sticky">
            <Toolbar>
              
             
                <Typography variant="h6" className={classes.title}>
                 <Link to='/' style={{textDecoration:'none', color:'white'}}> CordApp</Link>
                </Typography>
             
              <IconButton
                  edge="end"
                  aria-label="home"
                  aria-haspopup="true"
                  color="inherit"
                >
                 <Link to='/' style={{textDecoration:'none', color:'white'}}> <HomeIcon /></Link>
                </IconButton>
              <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Link to='/signUp' style={{textDecoration:'none', color:'white'}}><AccountCircle /></Link>
                </IconButton>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/signUp'>
            <Form/>
            </Route>
            <Route path='/thankPage'>
            <ThankYou/>
            </Route>
          </Switch>
         
        </div>
  </Router>


   
  
  );
}

export default App;
