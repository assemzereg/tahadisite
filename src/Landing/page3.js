import React from 'react'
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'

// const Buttone2 = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   width: '360px',
//   height: '50px',
//   fontSize: '20px',
//   padding: '6px 12px',
//   lineHeight: 1.5,
//   marginTop: '50px',
//   borderRadius: '5px',
//   boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',
//   backgroundColor: '#1F1614',
//   color: 'white',
//   fontFamily: '',
//   '&:hover': {
//     backgroundColor: '#1F1614',
//     boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',
//   },
// })
const useStyles = makeStyles((theme) => ({
  Corp3: {
    width: '100%',
    height: '80vh',
    backgroundColor: '#DCEFE4',
    [theme.breakpoints.down(965)]: {
      height: '160vh',
    },
  },
  BlocTitre: {
    height: '160px',
    alignItems: 'center',
    margin: 'auto',
  },
  titre: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '37px',
    marginTop: '50px',
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  BlocImg: {
    height: '300px',
    marginTop: '50px',
    width: '70%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(965)]: {
      flexDirection: 'column',
    },
  },
  BlocContent: {
    height: '300px',
    width: '25%',
    [theme.breakpoints.down(965)]: {
      width: '65%',
    },
  },
  blocSup: {
    height: '60%',
    backgroundColor: '#FFFFFF',
    boxShadow: ' 0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
  },
  blocInf: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  boite: {
    fontFamily: " 'Inter', sans-serif",
    width: '70%',
    fontSize: '16px',
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'left',
    margin: 'auto',
  },
  Avatar: {
    marginTop: '20px',
  },
  nom: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '14px',
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  descri: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '10px',
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
}))

export default function LandingPage() {
  const classes = useStyles()
  const Boite = (props) => {
    return (
      <div className={classes.BlocContent}>
        <div className={classes.blocSup}>
          <div style={{ height: '40px' }}></div>
          <Box className={classes.boite}>{props.text}</Box>
        </div>
        <div className={classes.blocInf}>
          <Avatar className={classes.Avatar} alt="Remy Sharp" src={props.src} />
          <Box className={classes.nom}>{props.name}</Box>
          <Box className={classes.descri}>{props.Company}</Box>
        </div>
      </div>
    )
  }
  //************************************************* */
  return (
    <div>
      <div className={classes.Corp3} id="4">
        <div id="Popular Cities">
          <div className={classes.BlocTitre}>
            <div style={{ height: '20px' }}></div>
            <Box className={classes.titre}>Words from Partners</Box>
          </div>
          <div className={classes.BlocImg}>
            <Boite
              text={
                'Here’s we find a review from our partners, and a text support from them.'
              }
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU'
              }
              name={'First Name'}
              Company={'Company'}
            />
            <Boite
              text={
                'Here’s we find a review from our partners, and a text support from them.'
              }
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU'
              }
              name={'First Name'}
              Company={'Company'}
            />
            <Boite
              text={
                'Here’s we find a review from our partners, and a text support from them.'
              }
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU'
              }
              name={'First Name'}
              Company={'Company'}
            />
          </div>
        </div>
      </div>
    </div>
  )

  //******************************************** */
}
