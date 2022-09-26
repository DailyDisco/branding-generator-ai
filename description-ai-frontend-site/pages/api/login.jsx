import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/client'

const login = () => {
    const {data: session} = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br/>
        <img src={session.user.image} style={{borderRadius: '50px'}} alt="user image" />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
}

export default login