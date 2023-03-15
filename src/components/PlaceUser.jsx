import React from 'react'
import { makeStyles } from '@mui/styles'
import ImageCarousel from './ImageCarousel'
import StarIcon from '@mui/icons-material/Star'

const useStyles = makeStyles((theme) => ({
  Place: {
    width: 232,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginBottom: 50,
    cursor: 'pointer',
  },
  Images: {
    width: '100%',
    marginBottom: 10,
  },
  PlaceName: {
    fontSize: 20,
    fontWeight: 600,
    cursor: 'pointer',
  },
  placeWilaya: {
    color: '#ACB4C9',
    fontSize: 12,
    fontWeight: 500,
  },
  wrapRating: {
    fontSize: 17,
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  PlaceHref: {
    color: '#2399A9',
    fontSize: 12,
  },
  DetWrap: {
    marginTop: 5,
    marginBottom: 5,
    cursor: 'pointer',
    width: '100%',
  },
  PlaceHolderUserCard: {
    height: 20,
    margin: '15px 0px',
    backgroundColor: '#C5BDBD',
    width: 30,
  },
}))
const PlaceUser = ({ place }) => {
  const core = useStyles()
  const jwt = localStorage.getItem('accessToken')
  const logedIn = jwt && jwt !== '' ? true : false
  return (
    <div className={core.Place}>
      <div className={core.Images}>
        <ImageCarousel
          props={{ images: place.Images, placeId: place.ID_PlaceToGO }}
        />
      </div>
      <div
        className={core.DetWrap}
        onClick={() => (window.location.href = '/place/' + place.ID_PlaceToGO)}
      >
        <div className={core.PlaceName}>{place.PlaceName}</div>
        <div className={core.placeWilaya}>{place.Wilaya}</div>
        <div className={core.wrapRating}>
          {logedIn ? (
            place.Rating
          ) : (
            <div className={core.PlaceHolderUserCard} />
          )}{' '}
          <StarIcon style={{ marginLeft: 5, fill: '#E3170A' }} />
        </div>
      </div>
      {logedIn ? (
        <a href={place.Localisation} className={core.PlaceHref}>
          Open in Maps
        </a>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PlaceUser
