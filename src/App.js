import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import { Form } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, makeStyles, createMuiTheme,} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '25ch',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  const classes = useStyles();
  return (

    <div>
      <Navbar/>
      < br />
    <Container maxWidth="sm" className="Container-one rounded" >

    {/* <form className={classes.root} noValidate autoComplete="off">
      <label>Enter Name of of Beneficiary:</label> <br />
      <TextField  InputLabelProps={{style: { color: '#fff' },}} id="outlined-basic" label="First Name" variant="outlined"/>
      <TextField  InputLabelProps={{style: { color: '#fff' },}} id="outlined-basic" label="Last Name" variant="outlined" />
    </form> */}

        <form className={classes.root} noValidate>
        <label>Enter Name of of Beneficiary:</label>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.margin}
              InputLabelProps={{style: { color: 'grey' },}}
              label="First Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            

            <TextField
              className={classes.margin}
              InputLabelProps={{style: { color: 'grey' },}}
              label="Last Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
          </ThemeProvider>

        </form>

      </Container>

    </div>
  );
}

export default App;
