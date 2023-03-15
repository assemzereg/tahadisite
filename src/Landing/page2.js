import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import CategSlide from '../components/CategSlide'

const useStyles = makeStyles((theme) => ({
  Corp2: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: 'white',
    [theme.breakpoints.down('965')]: {
      height: '300vh',
    },
  },
  BlocTitre: {
    height: 'fit-content',
    marginBottom: 20,
    alignItems: 'center',
    margin: 'auto',
  },
  titre: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '37px',
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
    marginBottom: 18,
  },
  titre2: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '18px',
    color: 'white',
    fontWeight: 'bolder',
    textAlign: 'left',
  },
  desc2: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '12px',
    marginTop: '8px',
    color: 'white',
    fontWeight: '600',
  },
  Deux: {
    height: '240px',
    width: '75%',
    margin: 'auto',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.down(1200)]: {
      flexDirection: 'column',
      height: '390px',
    },
  },
  Bl: {
    display: 'flex',
    flexDirection: 'row',
  },
  Bloc: {
    height: '170px',
    width: '500px',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 40px #B4E2E8',
    borderRadius: '10px',
    [theme.breakpoints.down(1415)]: {
      width: '400px',
    },
    [theme.breakpoints.down(440)]: {
      width: '300px',
    },
  },
  ImageBoite: {
    marginTop: '45px',
    marginLeft: '45px',
    width: 80,
    height: 80,
  },
  img: {
    width: 80,
    height: 80,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titrea: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '22px',
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
    [theme.breakpoints.down(1415)]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down(730)]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down(570)]: {
      fontSize: '10px',
    },
  },
  desc: {
    fontFamily: " 'Inter', sans-serif",
    fontSize: '12px',
    marginTop: '8px',
    color: 'black',
    fontWeight: '600',
    [theme.breakpoints.down(1415)]: {
      fontSize: '11px',
    },
    [theme.breakpoints.down(730)]: {
      fontSize: '10px',
    },
    [theme.breakpoints.down(570)]: {
      fontSize: '8px',
    },
  },
  EcrisBoite: {
    marginLeft: '20px',
    marginTop: '45px',
    width: 270,
    height: 70,
    [theme.breakpoints.down(965)]: {
      flexDirection: 'column',
    },
  },
  BlocImgCities: {
    height: '50vh',
    width: '70%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(965)]: {
      flexDirection: 'column',
      height: '140vh',
      width: '100%',
    },
  },
  ImageCitites: {
    height: '80%',
    width: '30%',
    minHeight: '260px',
    borderRadius: '10px',
  },
  Blocimgecris: {
    height: '20%',
    width: '60%',
    marginTop: '210px',
    marginLeft: '20px',
  },
  Slider: {},
}))

export default function LandingPage() {
  const classes = useStyles()

  //************************************************* */
  return (
    <div>
      <div className={classes.Corp2} id="2">
        <div id="how it works">
          <div className={classes.BlocTitre} style={{ marginTop: 10 }}>
            <Box className={classes.titre}>How it Works</Box>
          </div>
          <div className={classes.Deux}>
            <div className={classes.Bloc}>
              <div className={classes.ImageBoite}>
                <img
                  src="/Images/1.png"
                  className={classes.img}
                  alt="fireSpot"
                />
              </div>
              <div className={classes.EcrisBoite}>
                <div className={classes.Bl}>
                  <Box className={classes.titrea}>We</Box>
                  <Box
                    className={classes.titrea}
                    style={{ color: '#57A4AF', marginLeft: '8px' }}
                  >
                    Collect
                  </Box>
                  <Box className={classes.titrea} style={{ marginLeft: '8px' }}>
                    {'&'}
                  </Box>
                  <Box
                    className={classes.titrea}
                    style={{ color: '#57A4AF', marginLeft: '8px' }}
                  >
                    Share
                  </Box>
                </div>
                <Box className={classes.desc}>
                  Many Partners joined us to help us fill all the places that
                  deserve to be visited.{' '}
                </Box>
              </div>
            </div>
            <div className={classes.Bloc}>
              <div className={classes.ImageBoite}>
                <img
                  src="/Images/2.png"
                  className={classes.img}
                  alt="fireSpot"
                />
              </div>
              <div className={classes.EcrisBoite}>
                <div className={classes.Bl}>
                  <Box className={classes.titrea}>We</Box>
                  <Box className={classes.titrea} style={{ marginLeft: '8px' }}>
                    Create
                  </Box>
                  <Box
                    className={classes.titrea}
                    style={{ color: '#57B580', marginLeft: '8px' }}
                  >
                    Challanges
                  </Box>
                </div>
                <Box className={classes.desc}>
                  Throught the data we will build challenge to make tourist fun.
                </Box>
              </div>
            </div>
          </div>
          <div
            className={classes.Bloc}
            style={{ margin: 'auto', marginTop: '20px' }}
          >
            <div className={classes.ImageBoite}>
              <img src="/Images/3.png" className={classes.img} alt="fireSpot" />
            </div>
            <div className={classes.EcrisBoite}>
              <div className={classes.Bl}>
                <Box className={classes.titrea} style={{ color: '#F6473C' }}>
                  Tahadi
                </Box>
                <Box className={classes.titrea} style={{ marginLeft: '5px' }}>
                  App Coming Soon
                </Box>
              </div>
              <Box className={classes.desc}>
                Official Lauch of our Beta App make sure to subscribe to be one
                of the Testers.
              </Box>
            </div>
          </div>
        </div>
        <div id="Popular Cities">
          <div className={classes.BlocTitre} style={{ marginTop: '100px' }}>
            <Box className={classes.titre}>Popular Cities</Box>
          </div>
          <div className={classes.BlocImgCities}>
            <div
              className={classes.ImageCitites}
              style={{
                background:
                  "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #576684 100%), url('https://i.pinimg.com/originals/b7/1a/7c/b71a7ca396adb098071e0cb848455e80.jpg') no-repeat",
              }}
            >
              <div className={classes.Blocimgecris}>
                <Box className={classes.titre2}>City Name</Box>
                <Box className={classes.desc2}>+20 places</Box>
              </div>
            </div>
            <div
              className={classes.ImageCitites}
              style={{
                background:
                  "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #576684 100%), url('https://www.ctvnews.ca/polopoly_fs/1.4337686.1552664314!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg') no-repeat",
              }}
            >
              <div className={classes.Blocimgecris}>
                <Box className={classes.titre2}>City Name</Box>
                <Box className={classes.desc2}>+20 places</Box>
              </div>
            </div>
            <div
              className={classes.ImageCitites}
              style={{
                background:
                  "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #576684 100%), url('https://i.pinimg.com/736x/74/8e/73/748e73cedfb1974eaee3c8c88f9d6598--capital-city-north-africa.jpg') no-repeat",
              }}
            >
              <div className={classes.Blocimgecris}>
                <Box className={classes.titre2}>City Name</Box>
                <Box className={classes.desc2}>+20 places</Box>
              </div>
            </div>
          </div>
        </div>
        <div id="Popular Categories">
          <div className={classes.BlocTitre} style={{ marginTop: '100px' }}>
            <Box className={classes.titre}>Popular Categories</Box>
            <div className={classes.Slider}>
              <CategSlide />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  //******************************************** */
}
