import { createFileRoute } from '@tanstack/react-router'
import { auth , googleProvider } from '../utilities/firebase-config/config'
import { signInWithEmailAndPassword , signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

function logIn() {

  const [email , setEmail] = useState('')
  const [ password , setPassword] = useState('')
  const navigate = useNavigate()

  const signInUser = () => {
    try {
      signInWithEmailAndPassword(auth , email , password)
      navigate({to : '/cartPage'})
    } catch (err) {
      console.error(err)
    }
  }

  const signInUserWithGoogle = () => {
    try {
      signInWithPopup(auth , googleProvider)
      navigate({to : '/cartPage'})
    } catch(err) {
      console.log(err)
    }
  }

  return (
  <section className='login-section'>
    <div className='login-wrapper'>
      <input className='login-inputs' type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
      <input className='login-inputs' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => signInUser()} className='log-in-account'>Log In</button>
      <button onClick={() => signInUserWithGoogle()} className='log-in-account'>Sign In With Google <i className="bi bi-google" ></i> </button>
    </div>
  </section>
  )
}

export const Route = createFileRoute('/logIn')({
  component: logIn,
})
