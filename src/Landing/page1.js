import React from 'react'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Nav from '../components/Navbar.jsx'

const useStyles = makeStyles((theme) => ({
  Corp1: {
    width: '100%',
    height: '100vh',
    minHeight: 625,
    backgroundColor: '#D5F2F6',
    [theme.breakpoints.down(965)]: {
      height: '200vh',
    },
  },
  content: {
    height: '90%',
    width: '100%',
  },
  blocs: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down(965)]: {
      width: '60%',
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  Gauche: {
    height: '100%',
    width: '55%',
    [theme.breakpoints.down(965)]: {
      width: '100%',
    },
  },
  Droite: {
    height: '100%',
    width: '45%',
    [theme.breakpoints.down(965)]: {
      width: '100%',
    },
  },
  BlocEcris: {
    height: '45%',
    width: '50%',
    margin: 'auto',
    marginTop: '20vh',
    marginBottom: 'auto',
  },
  titre: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '37px',
    color: 'black',
    fontWeight: 'bolder',
  },
  desc: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '14px',
    color: 'black',
    fontWeight: '600',
  },
  Bouton: {
    width: '50%',
    backgroundColor: '#2AB7CA',
  },
  icon: { color: '#2AB7CA' },
  BlocImage: {
    height: '420px',
    width: '400px',
    marginLeft: '0',
    marginRight: 'auto',
    marginTop: '10vh',
    marginBottom: 'auto',
    [theme.breakpoints.down(965)]: {
      width: '80%',
      marginTop: '20px',
      margin: 'auto',
    },
  },
  bas: {
    height: '70px',
    width: '70%',
    margin: 'auto',
    marginTop: '7vh',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(965)]: {
      width: '80%',
      marginTop: '20px',
      margin: 'auto',
    },
  },
  foot: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '14px',
    color: '#42828A',
    fontWeight: 'bold',
  },
}))
const Buttone2 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  width: '243px',
  height: '50px',

  padding: '6px 12px',
  lineHeight: 1.5,
  marginTop: '30px',
  borderRadius: '5px',
  //boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',
  backgroundColor: '#2AB7CA',
  color: 'white',
  fontFamily: " 'Inter', sans-serif",
  fontSize: '16px',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#2AB7CA',
  },
})

export default function LandingPage() {
  const classes = useStyles()

  //************************************************* */
  return (
    <div className={classes.Corp1}>
      <Nav page="user" />
      <div className={classes.content}>
        <div className={classes.blocs}>
          <div className={classes.Gauche}>
            <div className={classes.BlocEcris}>
              <Box className={classes.titre}>Explore Best Places in Tahadi</Box>
              <Box className={classes.desc}>
                Join us building the Leading Traveling Guide, get early access
                to our coming soon Challenges and Games and enjoy discovering
                new places to visit now.
              </Box>

              <Buttone2
                variant="contained"
                endIcon={<ArrowForwardIosIcon style={{ fill: '#FFFFFF' }} />}
                className={classes.Bouton}
                onClick={() =>
                  (window.location.href = '/places/All Categories')
                }
              >
                Let’s Discover
              </Buttone2>
            </div>
          </div>
          <div className={classes.Droite}>
            <img src="/dashboard.png" alt="pic" className={classes.BlocImage} />
          </div>
        </div>
      </div>
    </div>
  )

  //******************************************** */
}
