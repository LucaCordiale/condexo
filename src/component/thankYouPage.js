import React from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import img from '../img/thank_2.png'
import './thankYouPage.css';



function ThankYou(){
   

    return(
      <Container id='ct' maxWidth="xs" >
        <Card Container >
     
            <CardMedia
              component="img"
              alt="thankYouPage"
              height="250"
              width="50"
              image={img}
              title="Thanks"
            />
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Congratulazioni!!!!
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Registrazione avvenuta con succeso!
                </Typography>
          </CardContent>
            <Link to='/' id="btn">
                <Button size="small" color="primary" style={{color:'black'}}>
                    Torna alla Home
                </Button>
            </Link>
        </Card>

      </Container>
    )
}
export default ThankYou;