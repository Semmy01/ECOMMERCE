import { createFileRoute , Link } from '@tanstack/react-router'
import { createUserWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../utilities/firebase-config/config'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from '@tanstack/react-router'


export const Route = createFileRoute('/signIn')({
  component:  createUser,
})

function createUser() {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [ isLoggedIn , setIsLoggedIn ] = useState(false)
  const [ user , setUser] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      setUser(user)
    })
  } , [])

  const signInUserWithEmail = async () => {
    if (email !== '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') {
      console.log('please enter a valid email address')
    } else {
      console.log('user email is valid')
    }
    try {
      await createUserWithEmailAndPassword(auth , email , password)
      navigate({to : '/cartPage'}) 
    } catch (err) {
      console.log(err)
    }
  }
  console.log(auth?.currentUser?.email)


 console.log(user)
  return (
    <>
      
      <section className='create-account-section'>
        <div className='sign-in-wrapper'>
          <div className='typewriter'>
            <h1 className='welcome'>Welcome To Likvoska Collections...</h1>
          </div>
          <input className='sign-in-inputs' type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
          <input className='sign-in-inputs' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={() => signInUserWithEmail()} className='create-account' >Create Account</button> <br />
          Already have an account <Link to={'/logIn'}>Login?</Link>
        </div>
      </section>
    </>
  )
}
