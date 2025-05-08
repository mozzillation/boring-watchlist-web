'use client'

import { signInWithGoogle } from '@/lib/auth-actions'
import React from 'react'

const SignInWithGoogleButton = () => {
  return (
    <button
      type="submit"
      formAction={() => signInWithGoogle(window.location.origin)}
      className=""
    >
      Login with Google
    </button>
  )
}

export default SignInWithGoogleButton
