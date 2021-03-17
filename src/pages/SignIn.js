
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import img from '../utils/img.png'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link as NewLink} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link'


const styles = (theme) => ({
    root: {
        margin: 'auto',
        background: '#FEDFDD',
        '& .ImgContainer':{
            display: 'flex',
            backgroundColor: '#fff',
            backgroundImage: `url(${img})`,
            diaplay: 'flex',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            width: '100%',
            height: '15em',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    contentContainer:{
        width: '100%',
        "& .contentStarted":{
            display: 'flex',
            justifyContent: 'center',
            padding: '1em',
        }
    },
    inputFormContainer:{
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        "& form":{
            width: '400px',
            [theme.breakpoints.down('xs')]:{
                width: '90%'
            },
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }
    },
    input:{
        background: '#fff'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.warning.light
      },
});

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <NewLink to="/">
        <Link component="span" color='textSecondary'>
          Your Website
        </Link>
        </NewLink>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

function SignIn(props) {
    const classes = props.classes;
    const [email,setEmail]= useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let object = {
            email: email,
            password: password,
        }
        console.log(object);
    }
    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <Grid container spacing={0} justify="center" className={classes.root}>
                <Grid container item sm={12} className="ImgContainer" spacing={0}>
                    <Typography variant="h3" component="div" >SuDoIt</Typography>
                </Grid>
                <Grid container item sm={12} className={classes.contentContainer}>
                    <Grid xs={12} item className="contentStarted" ><Typography variant="h4" style={{fontWeight: '600'}} >Get Started</Typography></Grid>
                    <Grid item xs={12} className={classes.inputFormContainer}>
                        <form onSubmit={handleSubmit} >
                            <TextField InputProps={{className: classes.input}} variant="filled" type="email" label="Email" name="email" autoFocus required color="primary" onChange={(e)=> setEmail(e.target.value)} />
                            <TextField InputProps={{className: classes.input}} variant="filled" type="password" label="Password" name="password" required color="primary" onChange={(e)=> setPassword(e.target.value)} />
                            <Button type="submit" className={classes.submit}>Login</Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Grid>
            </Container>
    )
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignIn)

