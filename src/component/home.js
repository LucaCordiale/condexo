import React from 'react';
import './home.css';
import { Container, Typography } from '@material-ui/core';
import images from '../img/home_';
import { Link } from 'react-router-dom';


function Home(){
    return(
       
            <Container  id='container' align='center'>
                    <img id='img' alt='Home' src={images}></img>
                <Link to='/signUp'id='title'>
                    <Typography  variant='h5' id='title'>
                        Registrati Qui!
                    </Typography>
                </Link>
               
            </Container>

        
    )
}
export default Home;