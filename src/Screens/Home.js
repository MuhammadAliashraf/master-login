import React, { useEffect, useState } from 'react'
import { auth } from '../Config/config'

function Home(props) {
  const [username, setusername] = useState()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      return setusername(user.displayName)
    })
  }, [])

  return (
    <div>
      <h1>{username ? `${username} Wellcome Home` : 'Login Please'}</h1>
    </div>
  )
}

export default Home
