import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styles from './styles/signup.module.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../Config/config'
import { Spinner } from 'react-bootstrap'
import { async } from '@firebase/util'

function Signup() {
  const navigate = useNavigate()
  const [isloading, setloading] = useState(false)
  const [data, setdata] = useState({
    username: '',
    email: '',
    passwords: '',
  })
  // console.log(data)

  const handelSubmin = () => {
    setloading(true)
    if (!data.username || !data.email || !data.passwords) {
      toast.error('All Fills Are Required!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      setloading(false)
      return
    }
    createUserWithEmailAndPassword(auth, data.email, data.passwords)
      .then(async (res) => {
        const user = res.user
        await updateProfile(user, {
          displayName: data.username,
        })
        setloading(false)
        navigate('/home')
      })
      .catch((e) => {
        setloading(false)
        toast.error(e.message, {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        console.log(e)
      })
  }
  return (
    <div className={styles.main}>
      <div className={styles.child}>
        <div>
          <h1 className={styles.text}>Welcome!</h1>
        </div>
        <div className={styles.input}>
          <input
            onChange={(event) =>
              setdata((pre) => ({ ...pre, username: event.target.value }))
            }
            className={styles.inputtext}
            placeholder="Enter Username"
          />
          <input
            onChange={(event) =>
              setdata((pre) => ({ ...pre, email: event.target.value }))
            }
            className={styles.inputtext}
            placeholder="Enter Email"
          />
          <input
            type="password"
            onChange={(event) =>
              setdata((pre) => ({ ...pre, passwords: event.target.value }))
            }
            className={styles.inputtext}
            placeholder="Enter Password"
          />
        </div>
        <div>
          {isloading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <button onClick={handelSubmin} className={styles.btn}>
              Sign Up
            </button>
          )}
        </div>
        <Link to="/" className={styles.link}>
          <p>Login here</p>
        </Link>
      </div>
    </div>
  )
}

export default Signup
