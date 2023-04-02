import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/config'
import styles from './styles/login.module.css'
import { sendDataToDataBase } from '../Config/FirebaseMethod'

export default function Login() {
  const navigate = useNavigate()
  const [isloading, setloading] = useState(false)
  const [userID, setuserID] = useState('')
  const [data, setdata] = useState({
    email: '',
    passwords: '',
  })
  // // console.log(data)

  const handelSubmin = () => {
    setloading(true)
    if (!data.email || !data.passwords) {
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
    signInWithEmailAndPassword(auth, data.email, data.passwords)
      .then(async (res) => {
        const user = res.user
        setuserID(user)
        setloading(false)
        toast.success('User Login', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        navigate('/home', user)
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
    <>
      <div className={styles.main}>
        <div className={styles.child}>
          <div>
            <h1 className={styles.text}>Login!</h1>
          </div>
          <div className={styles.input}>
            <input
              onChange={(event) =>
                setdata((pre) => ({ ...pre, email: event.target.value }))
              }
              className={styles.inputtext}
              placeholder="Enter Email"
            />
            <input
              onChange={(event) =>
                setdata((pre) => ({ ...pre, passwords: event.target.value }))
              }
              className={styles.inputtext}
              placeholder="Enter Password"
            />
          </div>
          <div>
            <button onClick={handelSubmin} className={styles.btn}>
              Sign in
            </button>
          </div>
          <Link to="Signup" className={styles.link}>
            <p>Signup here</p>
          </Link>
        </div>
      </div>
    </>
  )
}
