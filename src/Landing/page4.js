import React from 'react'
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
// import logos from "../../Images/Group 45.png";
// import vector from "../../Images/Vector 47.png";
const useStyles = makeStyles((theme) => ({
  Corp4: {
    width: '-webkit-fill-available',
    height: '70vh',
    padding: '40px',
    backgroundColor: '#FFFFFF',
    backgroundImage: `url('/Images/Vector 47.png')`,
  },
  boitep: {
    width: '90%',
    height: '40vh',
    margin: 'auto',
    padding: '30px',

    marginTop: '10vh',
  },
  boite: {
    width: '90%',
    height: '30vh',
    margin: 'auto',
    padding: '50px 20px',
  },
  dec: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '18px',
    color: 'red',
    fontWeight: 'bolder',
    textAlign: 'center',
    [theme.breakpoints.down(865)]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down(480)]: {
      fontSize: '11px',
    },
  },
  titre: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '55px',
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
    fontStyle: 'italic',
    [theme.breakpoints.down(865)]: {
      fontSize: '35px',
    },
    [theme.breakpoints.down(480)]: {
      fontSize: '25px',
    },
  },
}))
export default function LandingPage() {
  const classes = useStyles()
  //************************************************* */
  return (
    <div>
      <div className={classes.Corp4} id="4">
        <div className={classes.boitep}>
          <div className={classes.boite}>
            <Box className={classes.dec}>Coming Soon</Box>
            <Box className={classes.titre}>TAHADI WILL GUIDE YOU WITH FUN</Box>
          </div>
        </div>
      </div>
    </div>
  )
  //******************************************** */
}
