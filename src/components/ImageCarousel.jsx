import React from 'react'
import { makeStyles } from '@mui/styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

const useStyles = makeStyles((theme) => ({
  CarouselElt: {
    width: '100%',
    borderRadius: 10,
    height: 180,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
}))

const ImageCarousel = ({ props }) => {
  const core = useStyles()
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 12,
    height: 12,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: '#FFFFFFB2',
  }
  return (
    <div className={core.CarouselElt}>
      <Carousel
        showArrows
        showIndicators
        useKeyboardArrows
        swipeable={true}
        showStatus={false}
        onClickItem={() => {
          window.location.href = '/place/' + props.placeId
        }}
        showThumbs={false}
        dynamicHeight
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                left: 0,
                borderwidth: 0,
                backgroundColor: 'transparent',
                top: '45%',
              }}
            >
              <ArrowCircleLeftIcon style={{ fontSize: 20, opacity: 0.75 }} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                right: 20,
                top: '45%',
              }}
            >
              <ArrowCircleRightIcon style={{ fontSize: 20, opacity: 0.75 }} />
            </button>
          )
        }
      >
        {props.images.map((image, index) => {
          return (
            <img
              onClick={() => {}}
              // src={'http://197.140.16.237:5050/' + image.split('\\').join('/')}
              // src={image}
              src={'https://drive.google.com/uc?export=view&id=' + image}
              alt="location"
              key={index}
              className={core.image}
            />
          )
        })}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
