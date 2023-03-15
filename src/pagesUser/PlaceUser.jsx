import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Navbar from '../components/Navbar'
import ShareIcon from '@mui/icons-material/Share'
import StarIcon from '@mui/icons-material/Star'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import Rating from '@mui/material/Rating'
import TagItem from '../components/TagItem'
import PlaceUserC from '../components/PlaceUser'
import Footer from '../components/Footer'
import { axiosPlace, axiosUser } from '../axios'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'

const useStyles = makeStyles((theme) => ({
  PagePlace: {
    backgroundColor: '#F6F6F6',
  },
  containInfoPlace: {
    width: '82%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down(415)]: {
      width: '90%',
    },
    [theme.breakpoints.down(400)]: {
      width: '91%',
    },
  },
  wrapInfButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(800)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  wrapInf: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(800)]: {
      marginBottom: 10,
    },
  },
  wrapHor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    color: '#ACB4C9',
  },
  PName: {
    fontSize: 25,
    fontWeight: 700,
    color: 'black',
  },
  PRating: {
    fontSize: 15,
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    marginRight: 5,
  },
  PWilaya: {
    fontSize: 15,
    fontWeight: 600,
    marginRight: 5,
    marginLeft: 5,
    color: 'black',
  },
  PCont: { fontSize: 15, fontWeight: 500, marginLeft: 5, color: '#ACB4C9' },
  PImages: {
    width: '100%',
    marginTop: 25,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    marginBottom: 40,
    [theme.breakpoints.down(1345)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down(915)]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  PImage: {
    width: '33%',
    minWidth: 350,
    height: 350,
    borderRadius: 5,
    marginBottom: 10,
    pointerEvents: 'none',
    userSelect: 'none',
    [theme.breakpoints.down(400)]: {
      minWidth: '100%',
    },
  },
  PHref: {
    color: '#2AB7CA',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 25,
    [theme.breakpoints.down(400)]: {
      fontSize: 16,
    },
  },
  break: {
    width: '100%',
    height: 1,
    backgroundColor: '#2399A9',
    marginBottom: 25,
  },
  PDescription: {
    fontSize: 20,
    fontWeight: 400,
    color: '#09262A',
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeelt: {
    width: '46%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  Input: {
    borderWidth: 0,
    marginBottom: 5,
    color: '#2AB7CA',
    borderRadius: '5px',
    padding: '10px',
    width: '-webkit-fill-available',
  },
  PlacesBasedOnYou: {
    width: '100%',
    marginTop: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    marginBottom: 30,
    [theme.breakpoints.down(1345)]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down(915)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down(610)]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  helpBox: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    width: 275,
    [theme.breakpoints.down(800)]: {
      marginTop: 10,
    },
  },
  PPlaceHolder: {
    height: 20,
    margin: '15px 0px',
    width: 300,
    backgroundColor: '#C5BDBD',
  },
  loading: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  ThanksCont: {
    width: '100%',
  },
  ThanksContIn: {
    padding: '50px 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(500)]: {
      padding: '50px 40px',
    },
  },
  ThanksImage: {
    width: 200,
    [theme.breakpoints.down(500)]: {
      width: 165,
    },
  },
  ThansksHeader: {
    fontSize: 27,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 20,
    [theme.breakpoints.down(500)]: {
      fontSize: 20,
    },
  },
  ThanksText: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 10,
    [theme.breakpoints.down(500)]: {
      fontSize: 13,
    },
  },
  ThanksReviewMore: {
    fontSize: 23,
    fontWeight: 500,
    color: '#03C959',
    cursor: 'pointer',
    marginTop: 36,
    [theme.breakpoints.down(500)]: {
      fontSize: 18,
    },
  },
}))

const RatingThanks = ({ props }) => {
  return (
    <div className={props.core.ThanksCont}>
      <div className={props.core.ThanksContIn}>
        <img src="/LogoNav.png" alt="logo" className={props.core.ThanksImage} />
        <div className={props.core.ThansksHeader}>
          Thank you for your Contirbution
        </div>
        <div className={props.core.ThanksText}>
          With this reviews we will help leading the tourist and making our game
          experience etter{' '}
        </div>
        <div
          className={props.core.ThanksReviewMore}
          onClick={() => (window.location.href = '/places/All Categories')}
        >
          Review More
        </div>
      </div>
    </div>
  )
}

const PlaceUser = () => {
  const core = useStyles()

  const params = useParams()
  const [more, setMore] = useState(true)
  const [Rate, setRate] = useState(1)
  const [loading, setloading] = useState(true)
  const [isCopied, setIsCopied] = useState(false)
  const [SimilarPlaces, setSimilarPlaces] = useState([])
  const textAreaRef = useRef(null)
  const user = JSON.parse(localStorage.getItem('user'))
  const [show, setShow] = React.useState(false)

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(window.location.href)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  const [Place, setPlace] = useState([])
  const jwt = localStorage.getItem('accessToken')
  const logedIn = jwt && jwt !== '' ? true : false
  const rate = () => {
    // rating post
    axiosUser
      .post(
        '/ratePlace/' + user.id_user,
        { ID_PlaceToGO: params.placeId, rating: Rate },
        { headers: { Authorization: `Bearer ${jwt}` } },
      )
      .then((res) => {
        setShow(true)
      })
      .catch((error) => {
        if (error.response) {
          // localStorage.removeItem('accessToken')
          // localStorage.removeItem('user')
          // localStorage.removeItem('type')
          // window.location.href = '/login'
          console.log(error.response)
        } else {
          alert('an error accured')
        }
      })
  }
  useEffect(() => {
    axiosPlace
      .post('GetPlace', { ID_PlaceToGO: params.placeId })
      .then((res) => {
        setPlace(res.data.place)
        setSimilarPlaces(res.data.places)
        setloading(false)
      })
      .catch((error) => {
        console.error('error', error)
        alert('an error accured x_x')
        window.location.href = '/places/All Categories'
      })
  }, [])
  if (loading) {
    return (
      <div className={core.loading}>
        <CircularProgress size={75} />
      </div>
    )
  }
  return (
    <div className={core.PagePlace}>
      <Navbar page="user" />
      <Dialog
        open={show}
        onClose={() => setShow(false)}
        scroll="body"
        sx={{ padding: 3 }}
        maxWidth="md"
      >
        <RatingThanks props={{ core: core }} />
      </Dialog>
      <div className={core.containInfoPlace}>
        <div className={core.wrapInfButton}>
          <div className={core.wrapInf}>
            <div className={core.PName}>{Place.PlaceName}</div>
            <div className={core.wrapHor}>
              <div className={core.PRating}>
                <>
                  {logedIn ? (
                    <>{Place.Rating}</>
                  ) : (
                    <div className={core.PPlaceHolder} style={{ width: 30 }} />
                  )}
                </>{' '}
                <StarIcon
                  style={{ fontSize: 18, marginLeft: 2, fill: '#E3170A' }}
                />
              </div>
              &#8226;
              <div className={core.PWilaya}>{Place.Wilaya}</div>
              {/* &#8226;
              <div className={core.PCont}>{Place.Contributor}</div> */}
            </div>
          </div>
          <Button
            variant="outlined"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: 17,
              fontWeight: 600,
              backgroundColor: 'white',
              borderColor: 'black',
              color: 'black',
              padding: '6px 8px',
            }}
            onClick={handleCopyClick}
          >
            {isCopied ? (
              'Copied!'
            ) : (
              <>
                <ShareIcon style={{ marginRight: 5, color: '#5C5F62' }} /> Share
              </>
            )}
          </Button>
          <form hidden>
            <textarea ref={textAreaRef} value={window.location.href} readOnly />
          </form>
        </div>
        <div className={core.PImages}>
          {Place.Images.map((image, index) => (
            <img
              src={'https://drive.google.com/uc?export=view&id=' + image}
              key={index}
              alt="location"
              className={core.PImage}
              style={
                index > 0 && !logedIn
                  ? { filter: 'blur(10px)', opacity: 0.8 }
                  : {}
              }
            />
          ))}
        </div>
        {/* Map Link */}
        <div className={core.wrapInf}>
          <div className={core.PName}>Open in Maps</div>
          {logedIn ? (
            <a href={Place.Localisation} className={core.PHref}>
              {Place.Localisation}
            </a>
          ) : (
            <div className={core.PPlaceHolder} />
          )}
        </div>
        <div className={core.break} />
        {/* Description */}
        <div className={core.wrapInf} style={{ marginBottom: 20 }}>
          <div className={core.PName}>Description</div>
          <p>
            {Place.Description.length <= 350
              ? Place.Description
              : more
              ? Place.Description.substring(0, 350) + '...'
              : Place.Description}
          </p>
          {Place.Description.length <= 350 ? (
            <></>
          ) : more ? (
            <div
              className={core.wrapHor}
              style={{ cursor: 'pointer', alignItems: 'flex-end' }}
            >
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: '#1A737F',
                  textDecorationLine: 'underline',
                }}
                onClick={() => setMore(false)}
              >
                Show more
              </div>
              <KeyboardArrowDownIcon
                style={{
                  marginLeft: 3,
                  fontSize: 22,
                  fontWeight: 400,
                  color: '#1A737F',
                }}
              />
            </div>
          ) : (
            <div
              className={core.wrapHor}
              style={{ cursor: 'pointer', alignItems: 'flex-end' }}
            >
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: '#1A737F',
                  textDecorationLine: 'underline',
                }}
                onClick={() => setMore(true)}
              >
                Show less
              </div>
              <KeyboardArrowUpIcon
                style={{
                  marginLeft: 3,
                  fontSize: 22,
                  fontWeight: 400,
                  color: '#1A737F',
                }}
              />
            </div>
          )}
        </div>
        <div className={core.break} />
        {/* Additonal Information */}
        <div className={core.wrapInfButton} style={{ marginBottom: 20 }}>
          <div className={core.wrapInf}>
            <div className={core.PName} style={{ marginBottom: 10 }}>
              Additional Informations For You
            </div>
            {logedIn ? (
              <>
                <div className={core.time}>
                  <div className={core.timeelt}>
                    <label
                      style={{ fontSize: 16, fontWeight: 500, marginBottom: 5 }}
                    >
                      Opening Time
                    </label>
                    <input
                      type="time"
                      placeholder="Insert your email here"
                      className={core.Input}
                      value={
                        Place.OpenningTime !== 'null' &&
                        Place.OpenningTime !== null
                          ? Place.OpenningTime
                          : '--:--'
                      }
                      readOnly
                    />
                  </div>

                  <div className={core.timeelt}>
                    <label
                      style={{ fontSize: 16, fontWeight: 500, marginBottom: 5 }}
                    >
                      Closing Time
                    </label>
                    <input
                      type="time"
                      placeholder="Insert your email here"
                      className={core.Input}
                      value={
                        Place.ClosingTime !== 'null' &&
                        Place.ClosingTime !== null
                          ? Place.ClosingTime
                          : '--:--'
                      }
                      readOnly
                    />
                  </div>
                </div>
                <label
                  style={{ fontSize: 16, fontWeight: 500, marginBottom: 5 }}
                >
                  Expenses
                </label>
                <input
                  type="text"
                  placeholder="00000.00 DZD"
                  className={core.Input}
                  value={
                    Place.Expenses !== 'null' && Place.Expenses !== null
                      ? Place.Expenses + '.00 DZD'
                      : 'not available'
                  }
                  readOnly
                />
              </>
            ) : (
              <></>
            )}
          </div>
          {logedIn ? (
            <></>
          ) : (
            <Button
              variant="outlined"
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: ' #42828A',
                marginBottom: 5,
                backgroundColor: 'white',
                borderColor: 'transparent',
              }}
              onClick={() => {
                window.location.href = '/login'
              }}
            >
              <TipsAndUpdatesIcon
                style={{ color: '#04F06A', fontSize: 13, marginRight: 5 }}
              />{' '}
              Connect To See More
            </Button>
          )}
        </div>
        <div className={core.break} />
        {/* Rating */}
        <div className={core.wrapInfButton} style={{ marginBottom: 20 }}>
          <div className={core.wrapInf}>
            <div className={core.PName}>You Already visited it !</div>
            <p style={{ color: '#576684', fontSize: 12, fontWeight: 400 }}>
              Tell us what do you think
            </p>
            <Rating
              value={Rate}
              onChange={(event, newValue) => {
                setRate(newValue)
              }}
              style={{
                color: '#E3170A',
                marginBottom: 10,
              }}
              size="large"
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ fill: 'grey' }} fontSize="inherit" />
              }
            />
            {logedIn ? (
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: '#2AB7CA',
                  textDecorationLine: 'underline',
                  cursor: 'pointer',
                }}
                onClick={() => rate()}
              >
                Submit
              </div>
            ) : (
              <div className={core.PPlaceHolder} style={{ width: 70 }} />
            )}
          </div>
          <div className={core.helpBox}>
            <div
              className={core.time}
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: ' #42828A',
                marginBottom: 5,
              }}
            >
              <TipsAndUpdatesIcon
                style={{ color: '#04F06A', fontSize: 13, marginRight: 5 }}
              />{' '}
              Help us! To Deliver The Best
            </div>
            <div style={{ fontSize: 12, fontWeight: 400, color: ' #102023' }}>
              Give an Objective Rating so we can recommand the best for other
              users like you.
            </div>
          </div>
        </div>
        <div className={core.break} />
        {/* Category */}
        <div className={core.wrapInf} style={{ marginBottom: 20 }}>
          <div className={core.PName} style={{ marginBottom: 10 }}>
            Category
          </div>
          <TagItem props={{ item: Place.Categorie }} />
        </div>
        <div className={core.break} />
        {/* Based On Your Search */}
        <div
          className={core.wrapInf}
          style={{ marginBottom: 20, width: '100%' }}
        >
          <div className={core.PName}>Based On Your Search</div>
          <div className={core.PlacesBasedOnYou}>
            {SimilarPlaces.length === 0 ? (
              <> </>
            ) : (
              <>
                {SimilarPlaces.map((p, index) => {
                  return (
                    <div key={index}>
                      <PlaceUserC place={p} />
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer page="user" />
    </div>
  )
}

export default PlaceUser
