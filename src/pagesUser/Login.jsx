import React from 'react'
import { makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button'
import { axiosUser } from '../axios'
import CircularProgress from '@mui/material/CircularProgress'

const useStyles = makeStyles((theme) => ({
  LoginP: {
    height: '100vh',
    backgroundColor: '#F6F6F6',
    // [theme.breakpoints.down(970)]: {
    //   height: '100vh',
    // },
  },
  LoginBody: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 50,
    [theme.breakpoints.down(970)]: {
      flexDirection: 'column',
      height: '-webkit-fill-available',
      borderRadius: 10,
      width: '100%',
      backgroundImage: 'url(/login.png)',
      marginTop: 0,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  LoginElt: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(970)]: {
      display: 'none',
    },
  },
  LoginElt2: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(970)]: {
      width: '82%',
      marginBottom: 20,
      marginTop: '33%',
      backgroundColor: 'white',
      padding: '5%',
      borderRadius: 10,
    },
  },
  LoginImage: {
    width: 370,
    borderRadius: 10,
    height: 500,
    [theme.breakpoints.down(970)]: {
      display: 'none',
    },
  },
  LoginText: {
    fontSize: 60,
    fontWeight: 700,
  },
  LoginD: {
    fontSize: 15,
    fontWeight: 500,
  },
  LoginHref: {
    color: '#2399A9',
    fontSize: 15,
  },
  LogInInputs: {
    marginTop: 10,
    width: '100%',
  },
  LoginInput: {
    backgroundColor: '#DCECEF',
    border: '1px solid #57A4AF ',
    borderRadius: 5,
    width: '-webkit-fill-available',
    padding: '10px 0px 10px 20px ',
    marginTop: 25,
    '&::placeholder': {
      color: '#75B5BD',
    },
    '&:focus': {
      outline: 'none !important',
    },
  },
  loading: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
}))
const Login = () => {
  const core = useStyles()
  const [Email, setEmail] = React.useState('')
  const [Password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const LoginF = async (e) => {
    e.preventDefault()
    if (!Email || !Password) {
      alert('Please Enter Your Login Infos')
      return
    }
    const loginData = {
      email: Email,
      mdp: Password,
    }
    setLoading(true)
    axiosUser
      .post('/Connection', loginData)
      .then((res) => {
        if (res.status === 202) {
          setLoading(false)
          alert('wrong password!!')
        } else {
          if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.accessToken)
            localStorage.setItem(
              'user',
              JSON.stringify({
                userName: res.data.user.UserName,
                email: res.data.user.email,
                id_user: res.data.user.id_User,
              }),
            )
            localStorage.setItem('type', 'user')
            setLoading(false)
            window.location.href = '/places/All Categories'
          } else {
            if (res.status === 201) {
              setLoading(false)
              alert('account not found check your credentials!!')
            }
          }
        }
      })
      .catch((error) => {
        setLoading(false)
        console.error('error', error)
        alert('an Error accured x_x')
      })
  }
  if (loading) {
    return (
      <div className={core.loading}>
        <CircularProgress size={75} />
      </div>
    )
  }
  return (
    <div className={core.LoginP}>
      <Navbar page="user" />
      <div className={core.LoginBody}>
        <div className={core.LoginElt}>
          <img src="/login.png" alt="" className={core.LoginImage} />
        </div>
        <div className={core.LoginElt2}>
          <div style={{ alignSelf: 'flex-start', width: '100%' }}>
            <div className={core.LoginText}>Log In</div>
            <div className={core.LoginD}>
              Continue with your account, if you don’t have{' '}
              <a className={core.LoginHref} href="/signup">
                create account
              </a>
            </div>
            <form className={core.LogInInputs} onSubmit={LoginF}>
              <input
                type="email"
                placeholder="Email Address"
                className={core.LoginInput}
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className={core.LoginInput}
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <a href="/forgetPassword" className={core.LoginHref}>
                Forget Password?
              </a>
              <Button
                variant="contained"
                style={{
                  width: '100%',
                  backgroundColor: '#2AB7CA',
                  marginTop: 25,
                  padding: 10,
                }}
                type="submit"
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
