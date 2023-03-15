import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import PlaceUser from '../components/PlaceUser'
import Footer from '../components/Footer'
import { axiosPlace } from '../axios'
import Skeleton from '@mui/material/Skeleton'
import { SearchContext } from '../context/Context'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const useStyles = makeStyles((theme) => ({
  PagePlaces: {
    backgroundColor: '#F6F6F6',
    minHeight: '100vh',
  },
  PlaceCont: {
    width: '90%',
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'grid',
    minHeight: '73.5vh',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    [theme.breakpoints.down(1090)]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down(820)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down(565)]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  PlaceNotFound: {
    fontSize: 42,
    width: 'fit-content',
    height: 'fit-content',
    alignSelf: 'center',
    [theme.breakpoints.down(560)]: {
      fontSize: 35,
    },
  },
  FilterCont: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(860)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  placesTitle: {
    fontSize: 40,
    fontWeight: 700,
    [theme.breakpoints.down(860)]: {
      marginBottom: 10,
    },
    [theme.breakpoints.down(560)]: {
      fontSize: 35,
    },
  },
  WrapPlaceFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down(560)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
  },
  WrapSort: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down(560)]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  sortButton: {
    [theme.breakpoints.down(560)]: {
      width: '49%',
    },
  },
  categButton: {
    [theme.breakpoints.down(560)]: {
      width: '100%',
      marginTop: 10,
    },
  },
  NoPlacesCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '8.5%',
    width: 400,
    [theme.breakpoints.down(560)]: {
      width: '100%',
    },
  },
  notFoundImage: {
    width: 385,
    [theme.breakpoints.down(560)]: {
      width: '80%',
    },
  },
  textnotfound: {
    textAlign: 'center',
    [theme.breakpoints.down(560)]: {
      fontSize: 15,
    },
  },
  FooterplacesNotFound: {
    [theme.breakpoints.down(800)]: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
  },
}))

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

const PlaceDesUsers = () => {
  const core = useStyles()
  const places = [{}, {}, {}, {}, {}, {}, {}, {}]
  const [Places, setPlaces] = useState([])
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [Search, setSearch] = useState('')
  const [RateSort, setRateSort] = useState('none')
  const [ExpenseSort, setExpenseSort] = useState('none')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const styleSort = {
    borderRadius: 10,
    border: '1px solid #808080',
    fontSize: 16,
    fontWeight: 700,
    color: '#000000',
    marginLeft: 5,
    textTransform: 'initial',
    width: '-webkit-fill-available',
  }
  const styleSortSelected = {
    borderRadius: 10,
    border: '1px solid #1A737F',
    fontSize: 16,
    fontWeight: 700,
    color: '#1A737F',
    marginLeft: 5,
    textTransform: 'initial',
    width: '-webkit-fill-available',
  }
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
  var ShPlaces = Places.filter((p) => {
    if (params.categ === 'All Categories') {
      return p.PlaceName.toLowerCase().includes(Search.toLowerCase())
    } else {
      return (
        p.PlaceName.toLowerCase().includes(Search.toLowerCase()) &&
        p.Categorie.toLowerCase().includes(params.categ.toLowerCase())
      )
    }
  })
  if (RateSort !== 'none') {
    if (RateSort === 'up') {
      ShPlaces.sort((a, b) => {
        return a.Rating - b.Rating
      })
    } else {
      ShPlaces.sort((a, b) => {
        return b.Rating - a.Rating
      })
    }
  } else {
    ShPlaces = Places.filter((p) => {
      if (params.categ === 'All Categories') {
        return p.PlaceName.toLowerCase().includes(Search.toLowerCase())
      } else {
        return (
          p.PlaceName.toLowerCase().includes(Search.toLowerCase()) &&
          p.Categorie.toLowerCase().includes(params.categ.toLowerCase())
        )
      }
    })
  }
  if (ExpenseSort !== 'none') {
    if (ExpenseSort === 'up') {
      ShPlaces.sort((a, b) => {
        if (a.Expenses === null) {
          return 1
        }
        if (b.Expenses == null) {
          return -1
        }
        return a.Expenses - b.Expenses
      })
    } else {
      ShPlaces.sort((a, b) => {
        if (a.Expenses === null) {
          return 1
        }
        if (b.Expenses == null) {
          return -1
        }
        return b.Expenses - a.Expenses
      })
    }
  } else {
    Places.filter((p) => {
      if (params.categ === 'All Categories') {
        return p.PlaceName.toLowerCase().includes(Search.toLowerCase())
      } else {
        return (
          p.PlaceName.toLowerCase().includes(Search.toLowerCase()) &&
          p.Categorie.toLowerCase().includes(params.categ.toLowerCase())
        )
      }
    })
  }

  useEffect(() => {
    axiosPlace
      .get('/GetAllPlacesValides')
      .then((res) => {
        setPlaces(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('there is an error', error)
        alert('an error accured x_x')
        window.location.reload()
      })
  }, [])
  if (loading) {
    return (
      <div className={core.PagePlaces}>
        <SearchContext.Provider value={setSearch}>
          <Navbar page="user" />
        </SearchContext.Provider>
        <div style={{ width: '100%', marginTop: 15 }}>
          <Slider {...settings}>
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
            <Skeleton variant="rectangular" width={170} height={25} />
          </Slider>
        </div>
        {/* <div style={{ width: '100%', marginTop: 15 }}>
          <CategSlide />
        </div> */}

        <div className={core.PlaceCont}>
          {places.map((p, index) => {
            return (
              <div key={index} style={{ marginBottom: 20 }}>
                <Skeleton variant="rectangular" width={232} height={180} />
                <Skeleton variant="text" width={100} />
                <Skeleton variant="text" width={45} />
                <Skeleton variant="text" width={50} />
                <Skeleton variant="text" width={150} />
              </div>
            )
          })}
        </div>
        <Footer page="user" />
      </div>
    )
  }
  const Categories = [
    'All Categories',
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
    <div className={core.PagePlaces}>
      <SearchContext.Provider value={setSearch}>
        <Navbar page="user" />
      </SearchContext.Provider>
      <div className={core.FilterCont}>
        <div className={core.placesTitle}>Places for you</div>
        <div className={core.WrapPlaceFilter}>
          <div className={core.WrapSort}>
            <div className={core.sortButton}>
              <Button
                startIcon={
                  RateSort === 'up' ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )
                }
                style={RateSort === 'none' ? styleSort : styleSortSelected}
                onClick={() => {
                  if (RateSort === 'none') {
                    setRateSort('down')
                  } else {
                    if (RateSort === 'down') {
                      setRateSort('up')
                    } else {
                      setRateSort('none')
                    }
                  }
                }}
              >
                Sort By Rate
              </Button>
            </div>
            <div className={core.sortButton}>
              <Button
                startIcon={
                  ExpenseSort === 'up' ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )
                }
                style={ExpenseSort === 'none' ? styleSort : styleSortSelected}
                onClick={() => {
                  if (ExpenseSort === 'none') {
                    setExpenseSort('down')
                  } else {
                    if (ExpenseSort === 'down') {
                      setExpenseSort('up')
                    } else {
                      setExpenseSort('none')
                    }
                  }
                }}
              >
                Sort By Price
              </Button>
            </div>
          </div>
          <div className={core.categButton}>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="outlined"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              style={
                params.categ === 'All Categories'
                  ? styleSort
                  : styleSortSelected
              }
            >
              {params.categ === 'All Categories' ? 'Category' : params.categ}
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              style={{
                maxHeight: 48 * 4.5,
              }}
            >
              {Categories.map((categ, index) => (
                <MenuItem
                  key={index}
                  onClick={() => (window.location.href = '/places/' + categ)}
                  disableRipple
                  style={params.categ === categ ? { color: 'blue' } : {}}
                >
                  {categ}
                </MenuItem>
              ))}
            </StyledMenu>
          </div>
        </div>
      </div>
      {ShPlaces.length === 0 ? (
        <div className={core.NoPlacesCont}>
          <img src="/empty.png" alt="notFound" className={core.notFoundImage} />
          <div className={core.PlaceNotFound}>No Places Found !</div>
          <div className={core.textnotfound}>
            We couldn’t find what you searched for ! in case you want to
            contirbute something, please contact us so we can deliver it to
            others.
          </div>
        </div>
      ) : (
        <div className={core.PlaceCont}>
          {ShPlaces.map((place, index) => {
            return (
              <div key={index}>
                <PlaceUser place={place} />
              </div>
            )
          })}
        </div>
      )}
      <div className={Places.length === 0 ? core.FooterplacesNotFound : {}}>
        <Footer page="user" />
      </div>
    </div>
  )
}

export default PlaceDesUsers
