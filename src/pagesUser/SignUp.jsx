import React from 'react'
import { makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button'
import { axiosUser } from '../axios'
import profilePic from '../images/default_profile.png'
import CircularProgress from '@mui/material/CircularProgress'

const useStyles = makeStyles((theme) => ({
  LoginP: {
    height: '100vh',
    backgroundColor: '#F6F6F6',
    [theme.breakpoints.down(970)]: {
      height: '100vh',
    },
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
    },
  },
  LoginElt: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(970)]: {
      width: '100%',
      marginBottom: 20,
    },
  },
  LoginImage: {
    // width: '45%',
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
const SignUp = () => {
  const core = useStyles()
  const [userName, setUserName] = React.useState('')
  const [Email, setEmail] = React.useState('')
  const [Password, setPassword] = React.useState('')
  const [Loading, setLoading] = React.useState(false)

  const signup = async (e) => {
    e.preventDefault()
    if (!Email || !Password || !userName) {
      alert('Please Enter Your Regestering Infos')
      return
    }

    setLoading(true)
    const formData = new FormData()
    formData.append('UserName', userName)
    formData.append('email', Email)
    formData.append('mdp', Password)
    formData.append('Preference', [])
    formData.append('img', profilePic)
    axiosUser
      .post('CreeCompte', formData)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem(
          'user',
          JSON.stringify({
            userName: res.data.user.userName,
            email: res.data.user.email,
            id_user: res.data.user.id_User,
          }),
        )
        localStorage.setItem('type', 'user')
        setLoading(false)
        window.location.href = '/places'
      })
      .catch((error) => {
        setLoading(false)
        console.error('there is an error', error)
        alert('an error accured x_x')
      })
  }

  return (
    <>
      {Loading ? (
        <div className={core.loading}>
          <CircularProgress size={75} />
        </div>
      ) : (
        <>
          <div className={core.LoginP}>
            <Navbar page="user" />
            <div className={core.LoginBody}>
              <div className={core.LoginElt}>
                <img src="/signup.png" alt="" className={core.LoginImage} />
              </div>
              <div className={core.LoginElt}>
                <div style={{ alignSelf: 'flex-start', width: '100%' }}>
                  <div className={core.LoginText}>Register</div>
                  <div className={core.LoginD}>
                    Create an Account for free or You already{'   '}
                    <a className={core.LoginHref} href="/login">
                      have an Account !
                    </a>
                  </div>
                  <form className={core.LogInInputs} onSubmit={signup}>
                    <input
                      type="text"
                      placeholder="Username"
                      className={core.LoginInput}
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value)
                      }}
                    />
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
        </>
      )}
    </>
  )
}

export default SignUp
