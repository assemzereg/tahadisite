import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import { SearchContext } from '../context/Context'
import HomeIcon from '@mui/icons-material/Home'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import LogoutIcon from '@mui/icons-material/Logout'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
const useStyles = makeStyles((theme) => ({
  nav: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  navIn: {
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImg: {
    width: 55,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  },
  SearchInput: {
    width: '35%',
  },
  navWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: 600,
  },
  userName: {
    [theme.breakpoints.down(560)]: {
      display: 'none',
    },
  },
  clubBackToHome: {
    [theme.breakpoints.down(560)]: {
      display: 'none',
    },
  },
  clubHomeIcon: {
    [theme.breakpoints.up(560)]: {
      display: 'none',
    },
  },
}))

const Navbar = ({ page }) => {
  const core = useStyles()
  const setSearch = useContext(SearchContext)
  const jwt = localStorage.getItem('accessToken')
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const user = {
    logedIn: jwt && jwt !== '' ? true : false,
    info: JSON.parse(localStorage.getItem('user')),
  }
  return (
    <div
      className={core.nav}
      style={page === 'user' ? { backgroundColor: 'white' } : {}}
    >
      <div className={core.navIn}>
        <div
          className={core.logo}
          onClick={() => {
            if (page === 'user') {
              if (user.logedIn) {
                window.location.href = '/places/All Categories'
              } else {
                window.location.href = '/'
              }
            }
          }}
        >
          <img className={core.logoImg} src="/LogoNav.png" alt="" />
          {page === 'club' ? 'Tahadi Dash' : ''}
        </div>
        {page === 'club' ? (
          ''
        ) : (
          <div className={core.SearchInput}>
            <SearchIcon
              style={{
                position: 'absolute',
                marginTop: 12,
                marginLeft: 11,
                fontSize: 20,
                color: '#5C5F62',
              }}
            />
            <input
              type="text"
              placeholder="Search"
              style={{
                borderRadius: 5,
                height: 42,
                borderWidth: 0,
                width: '100%',
                paddingLeft: 35,
                backgroundColor: '#DCECEF',
              }}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </div>
        )}
        {/* <div className={core.navWrap}> */}
        <div>
          <Button
            variant={
              user.logedIn
                ? page === 'club'
                  ? 'conatined'
                  : 'outlined'
                : page === 'club'
                ? 'contained'
                : 'outlined'
            }
            style={
              user.logedIn
                ? page === 'club'
                  ? {
                      backgroundColor: '#930F06',
                      minWidth: 'fit-content',
                      color: 'white',
                    }
                  : {
                      color: 'black',
                      borderColor: 'black',
                      fontSize: 12,
                      padding: '8px 5px',
                      minWidth: 'fit-content',
                    }
                : page === 'club'
                ? {
                    backgroundColor: '#124D54',
                    minWidth: 'fit-content',
                    color: 'white',
                  }
                : {
                    color: 'black',
                    borderColor: 'black',
                    fontSize: 12,
                    padding: '8px 5px',
                    minWidth: 'fit-content',
                  }
            }
            // onClick={
            //   user.logedIn
            //     ? page === 'club'
            //       ? () => {
            //           // axiosCont
            //           //   .get('/Deconnection')
            //           //   .then((res) => {
            //           //     window.location.href = '/contributor/login'
            //           //   })
            //           //   .catch((error) => {
            //           //     alert('an error ccured x_x')
            //           //   })
            //         }
            //       : () => {
            //           localStorage.removeItem('accessToken')
            //           localStorage.removeItem('user')
            //           localStorage.removeItem('type')
            //           window.location.href = '/login'
            //         }
            //     : page === 'club'
            //     ? () => {
            //         window.location.href = '/'
            //       }
            //     : () => {
            //         window.location.href = '/login'
            //       }
            // }
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={
              user.logedIn
                ? handleToggle
                : () => (window.location.href = '/login')
            }
          >
            {user.logedIn ? (
              page === 'club' ? (
                'logout'
              ) : (
                <>
                  <AccountCircleIcon
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                  <div className={core.userName}>{user.info.userName}</div>
                </>
              )
            ) : page === 'club' ? (
              <>
                <div className={core.clubBackToHome}>Back To Home </div>{' '}
                <div className={core.clubHomeIcon}>
                  <HomeIcon />
                </div>
              </>
            ) : (
              <>
                <AccountCircleIcon
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
                <div className={core.userName}>Account</div>
              </>
            )}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            style={{ zIndex: 10, width: '-webkit-fit-available' }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      style={{ padding: 0 }}
                    >
                      <MenuItem
                        onClick={() => {
                          localStorage.removeItem('accessToken')
                          localStorage.removeItem('user')
                          localStorage.removeItem('type')
                          window.location.href = '/login'
                        }}
                        style={{ fontSize: 13, padding: '10px 6px' }}
                      >
                        <LogoutIcon
                          fontSize="small"
                          style={{
                            marginRight: 5,
                            color: '#E3170A',
                          }}
                        />{' '}
                        <div className={core.userName}>Logout</div>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </div>
  )
}

export default Navbar
