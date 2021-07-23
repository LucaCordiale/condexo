import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControlLabel, FormLabel, RadioGroup, Radio, Button, TextField, Select, Paper, Typography } from '@material-ui/core';





//Class
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      marginTop: 20,
    },
    btn:{
    marginTop: 20,
    },
    RadioGroup:{
      marginTop:10,
    },
    title:{
      marginTop:20,
      color:'grey',
    },
    
  }));

export function Form(){
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-07-25'));
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    // Campi Input
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [answer, setAnswer] = useState('')
    
   
    // Campi Input con Error
    const [nomeError, setNomeError] = useState(false)
    const [cognomeError, setCognomeError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [answerError, setAnswerError] = useState(false)
    

    const handleSubmit =(e) => {
        e.preventDefault()
        setNomeError(false)
        setCognomeError(false)
        setEmailError(false)
        setUsernameError(false)
        setPasswordError(false)
        setCountryError(false)
        setPhoneError(false)
        setAnswerError(false)

        if(nome==='' && cognome==='' && email===''&& username==='' && password==='' && country==='' && phone==='' && answer===''){
          setNomeError(true)
          setCognomeError(true)
          setEmailError(true)
          setUsernameError(true)
          setPasswordError(true)
          setCountryError(true)
          setPhoneError(true)
          setAnswerError(true)
        }

       
        if(nome && cognome && email && password && country && username && phone && answer ){
         window.location.replace('/thankPage')
        }else{
          alert('Compila tutti i campi')
        }
    }

   

    //Gender
    const [value, setValue] = React.useState('female');

  const hChange = (event) => {
    setValue(event.target.value);
  };

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const questionChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
    return(
         
         <Container maxWidth="xs">
            <Typography className={classes.title}
            variant='h2'
            align='center'
            >
             Registrati qui:
            </Typography>
       <Paper elevation='10'>

          <form className={classes.root} noValidate onSubmit={handleSubmit}>
  
              <Grid container spacing={2}>
                  <Grid item xs={6} sm={12}>
                      <TextField 
                      onChange={(e) => setNome(e.target.value)}
                      fullWidth  
                      label="Nome" 
                      placeholder="Nome" 
                      variant="outlined"
                      required
                      error={nomeError}
                      />
                  </Grid> 
  
                  <Grid item xs={6} sm={12}>
                      <TextField 
                        onChange={(e) => setCognome(e.target.value)}
                        fullWidth 
                        label="Cognome"
                        placeholder="Cognome" 
                        variant="outlined"
                        required
                        error={cognomeError}
                      />
                  </Grid> 
              </Grid>
  
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                      'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
  
                  <Grid item xs={6} sm={12}>
                    <TextField 
                    onChange={(e) => setCountry(e.target.value)}
                      fullWidth
                      label="Luogo di Nascita" 
                      placeholder="es.Roma" 
                      variant="outlined"
                      required
                      error={countryError}
                    />
                  </Grid> 
              </Grid>
  
              <Grid item xs={6} sm={12}>
                <FormControl className={classes.RadioGroup} component="fieldset">
                    <FormLabel component="legend">Sesso</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={hChange}>
                    <FormControlLabel value="female" control={<Radio />} label="F" />
                    <FormControlLabel value="male" control={<Radio />} label="M" />
                  </RadioGroup>
                </FormControl>
            </Grid>
  
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12}>
                    <TextField 
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      label="Email" 
                      placeholder="@email" 
                      variant="outlined"
                      required
                      error={emailError}
                    />
                </Grid>
  
                <Grid item xs={6} sm={12}>
                    <TextField 
                      onChange={(e) => setUsername(e.target.value)}
                      fullWidth
                      label="Username" 
                      placeholder="username" 
                      variant="outlined"
                      required
                      error={usernameError}
                    />
                </Grid>
              </Grid>
  
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12}>
                  <FormControl fullWidth  variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                          id="password"
                          type='password'
                         
                          onChange={setPassword}
                          required
                          placeholder="Password" 
                          error={passwordError}
                         
                      />
                    </FormControl>
                </Grid>
  
                <Grid item xs={6} sm={12}>
                    <TextField 
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                      type='number'
                      label="Telefono" 
                      placeholder="Numero di telefono" 
                      variant="outlined"
                      required
                      error={phoneError}
                    />
                </Grid>
              </Grid>
  
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12}>
                  <FormControl fullWidth variant="outlined" className={classes.formControl}>
                      <InputLabel htmlFor="outlined-age-native-simple">Domanda Sicurezza</InputLabel>
                          <Select
                            native
                            value={state.age}
                            onChange={questionChange}
                            label="Age"
                            inputProps={{
                              name: 'age',
                              id: 'outlined-age-native-simple',
                            }}
                            >
                            <option aria-label="None" value="" />
                            <option value={1}>Qual'è il tuo colore preferito?</option>
                            <option value={2}>Qual'è il tuo animale preferito?</option>
                            <option value={3}>Come ti chiamano i tuoi amici?</option>
                          </Select>
                    </FormControl>
                </Grid>
                      <Grid item xs={6} sm={12}>
                      <TextField 
                      onChange={(e) => setAnswer(e.target.value)}
                      fullWidth
                      label="Risposta" 
                      placeholder="Risposta" 
                      variant="outlined"
                      required
                      error={answerError}
                    />
                      </Grid>
              </Grid>
              
              <Button 
                className={classes.btn}
                variant="contained" 
                color="primary"
                type="submit"
                >
                Sign Up
              </Button>
          </form>
          </Paper>
        </Container>
      
    );
}

export default Form;