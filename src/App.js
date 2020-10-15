import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import { Form } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { ThemeProvider, makeStyles, createMuiTheme,} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import MuiPhoneNumber from 'material-ui-phone-number';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '35ch',
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
      <label>Enter Name of Beneficiary:</label> <br />
      <TextField  InputLabelProps={{style: { color: '#fff' },}} id="outlined-basic" label="First Name" variant="outlined"/>
      <TextField  InputLabelProps={{style: { color: '#fff' },}} id="outlined-basic" label="Last Name" variant="outlined" />
    </form> */}

        <form className={classes.root} noValidate>
        <label>Enter Name of Beneficiary:</label>
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

            <label>Select a date and time:</label>
            <span>Select between 8:00am to 9:00pm</span>
            <TextField
              id="datetime-local"
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Select booking date"
              type="datetime-local"
              defaultValue=""
              variant="outlined"
              className={classes.margin}
              InputLabelProps={{
                shrink: true,
              }} 
            /> <br />

            <label>Enter Address:</label>
            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Address line 1"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Address line 2"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />

              <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="City"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Postal Code"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Province"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />

            <label>Offered By:</label>
            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />

            <MuiPhoneNumber 
              defaultCountry={'ca'} 
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey'}, }}
              label="Phone"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />

            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey' }, }}
              label="abc@email.com"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />


            <label>Additional Comments:</label>
            <TextField
              className={classes.margin}
              InputLabelProps={{ style: { color: 'grey' }, }}
              label="Comments"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              multiline
              rows={5}
            />
          </ThemeProvider>

          <Button variant="contained" color="secondary">
            Submit
          </Button>

          <br />

          

          

        </form>

      </Container>

    </div>
  );
}

export default App;
