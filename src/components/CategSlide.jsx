import React from 'react'
import { makeStyles } from '@mui/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const useStyles = makeStyles((theme) => ({
  CategSlideCont: {
    width: '100%',
  },
  CategCont: {
    width: '180px !important',
    height: 15,
    padding: 10,
    cursor: 'pointer',
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 2,
    border: '1px solid #808080',
  },
  cat: {
    fontSize: 16,
    fontWeight: 700,
    color: '#000000',
    '&:hover': {
      color: 'red',
    },
  },
}))

const CategSlide = () => {
  const core = useStyles()
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.25,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 735,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const Categories = [
    'Airport',
    'Amusement Park',
    'Art Gallery',
    'Bank',
    'Beach',
    'Bowling Alley',
    'Cafe',
    'Campground',
    'Cemetry',
    'Church',
    'City Hall',
    'Courthouse',
    'Culture',
    'Garden',
    'Embassy',
    'Store',
    'Temple',
    'Historical Site',
    'Hospital',
    'Library',
    'Mosque',
    'Movie Theater',
    'Musuem',
    'Park',
    'Port',
    'Post Office',
    'Restaurant',
    'School',
    'Shopping Mall',
    'Stadium',
    'Station',
    'Store',
    'Street',
    'University',
    'Zoo',
  ]
  return (
    <div className={core.CategSlideCont}>
      <Slider {...settings}>
        {Categories.map((categ, index) => (
          <div className={core.CategCont} key={index}>
            <div
              onClick={() => (window.location.href = '/places/' + categ)}
              className={core.cat}
            >
              {categ}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategSlide
