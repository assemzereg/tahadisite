import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { axiosUser } from '../axios'

const useStyles = makeStyles((theme) => ({
  forgetPasswordPage: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F6F6F6',
  },
  forgetPasswordComponent: {
    width: 500,
    minHeight: 350,
    background: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 50,
    [theme.breakpoints.down(510)]: {
      width: '100%',
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
  forgetPasswordInput: {
    backgroundColor: '#DCECEF',
    border: '1px solid #57A4AF ',
    borderRadius: 5,
    width: '-webkit-fill-available',
    padding: '10px 0px 10px 20px ',
    marginTop: 10,
    '&::placeholder': {
      color: '#75B5BD',
    },
    '&:focus': {
      outline: 'none !important',
    },
  },
  forgetPassReturn: {
    color: '#2399A9',
    fontSize: 15,
    cursor: 'pointer',
  },
  wrap: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  passText: {
    fontSize: 30,
    fontWeight: 500,
    marginRight: 10,
  },
  image: {
    width: 45,
  },
  passForIn: {
    padding: 50,
    width: '-webkit-fill-available',
    [theme.breakpoints.down(510)]: {
      padding: 10,
    },
  },
}))

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userID, setUserID] = useState('')
  const core = useStyles()
  const sendEmail = (e) => {
    e.preventDefault()
    if (!email) {
      alert('enter an email')
      return
    }
    setLoading(true)
    const data = { email: email }
    axiosUser
      .post('/passwordReset/sendCode', data)
      .then((res) => {
        console.log(res)
        setStep(1)
      })
      .catch((error) => {
        console.error('error', error)
        if (error.status === 404) {
          alert("this email doesn't exist")
        } else {
          if (error.status === 500) {
            alert('unexpected error')
          }
        }
      })
    setLoading(false)
  }
  const sendCode = (e) => {
    e.preventDefault()
    if (!code) {
      alert('enter a code')
      return
    }
    setLoading(true)
    const dataCode = { email: email, code: code }
    axiosUser
      .post('/passwordReset/verifyCode', dataCode)
      .then((res) => {
        console.log(res)
        setUserID(res.data.id_User)
        setStep(2)
      })
      .catch((error) => {
        console.error('error', error)
        if (error.status === 400) {
          alert('this code is not valid')
        } else {
          if (error.status === 500) {
            alert('unexpected error')
          }
        }
      })
    setLoading(false)
  }
  const resetPass = (e) => {
    e.preventDefault()
    if (!password || !confirmPassword) {
      alert('please enter the needed info')
      return
    }
    if (password !== confirmPassword) {
      alert('the password needs to be matched')
      return
    }
    const passwordData = { id_User: userID, password: password }
    setLoading(true)
    axiosUser
      .post('/passwordReset/reset', passwordData)
      .then((res) => {
        console.log(res)
        alert('successful operation :D')
      })
      .catch((error) => {
        console.error('error', error)
        alert('an error accured x_x')
      })
    setLoading(false)
  }
  if (loading) {
    return (
      <div className={core.loading}>
        <CircularProgress size={75} />
      </div>
    )
  }
  return (
    <div className={core.forgetPasswordPage}>
      <Navbar page="user" />
      <form
        className={core.forgetPasswordComponent}
        onSubmit={step === 0 ? sendEmail : step === 1 ? sendCode : resetPass}
      >
        <div className={core.wrap} style={{ width: 'fit-content' }}>
          <img src="/LogoNav.png" alt="" className={core.image} />
          <div className={core.passText}>Forget Password</div>
        </div>
        {step === 0 ? (
          <div className={core.passForIn}>
            <label style={{ fontSize: 24, fontWeight: 500 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={core.forgetPasswordInput}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: '#2AB7CA',
                marginTop: 25,
                padding: 10,
                width: '100%',
              }}
              type="submit"
            >
              Continue
            </Button>
          </div>
        ) : step === 1 ? (
          <div className={core.passForIn}>
            <label style={{ fontSize: 24, fontWeight: 500 }}>Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={core.forgetPasswordInput}
            />

            <div className={core.wrap}>
              <p onClick={() => setStep(0)} className={core.forgetPassReturn}>
                pastStep
              </p>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#2AB7CA',
                  padding: 10,
                }}
                type="submit"
              >
                Continue
              </Button>
            </div>
          </div>
        ) : (
          <div className={core.passForIn}>
            <label style={{ fontSize: 24, fontWeight: 500 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={core.forgetPasswordInput}
              style={{ marginBottom: 10 }}
            />
            <label style={{ fontSize: 24, fontWeight: 500 }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={core.forgetPasswordInput}
            />
            <Button
              variant="contained"
              style={{
                marginTop: 25,
                backgroundColor: '#2AB7CA',
                padding: 10,
                width: '100%',
              }}
              type="submit"
            >
              Reset Password
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default ForgetPassword
