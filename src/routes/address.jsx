import { createFileRoute } from '@tanstack/react-router'
import React, { useEffect, useState } from 'react'
import { db , auth } from '../utilities/firebase-config/config'
import { collection , addDoc  } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

export const Route = createFileRoute('/address')({
  component: contactDetails,
})

function contactDetails() {

  const [user , setUser] = useState('')
  const [ email , setEmail] = useState('')
  const [ country , setCountry] = useState('')
  const [ firstname , setFirstname] = useState('')
  const [ lastname , setLastname] = useState('')
  const [ streetAdress , setstreetAdress] = useState('')
  const [ city , setCity] = useState('')
  const [ state , setState] = useState('') 
  const [ zipCode , setZipCode ] = useState(0)
  const [ phoneNo , setPhoneNo ] = useState(0)
  const [ saveInfo , setSaveInfo ] = useState(false)
  const [ notifications , setNotifications ]  = useState(false)

  onAuthStateChanged(auth , (user) => {
    setUser(user.uid)
  })

  const usersContactCollection = collection(db , 'users-contact-info')
   
  
  const getCountry = (value) => {
    setCountry(value)
  }


  const checkDisable = email.trim() === '' ;


  const disableContinue = firstname.trim() === '' || lastname.trim() === '' || streetAdress.trim() === '' || city.trim() === '' || zipCode === 0 || phoneNo === 7

  const handleSubmit = async () => {
    try{
      await addDoc(usersContactCollection , {
        userId : user,
        email : email,
        firstname : firstname,
        lastname : lastname,
        country : country,
        address : streetAdress,
        city : city,
        state : state,
        zipcode : zipCode,
        phoneNumber : phoneNo
      } , console.log('hello submited go check database'))
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <>
      <form >
      <section className='contact-section'>
        <div className='contact-information-wrapper'>
          <div className='contact-section-name'>
            1. Contact Information
          </div>
          <div className='contact-input-wrapper'>
            <div className='label-wrapper'>
            <label className='email-label' htmlFor="email">Email Address</label> 
            </div>
            <input className='email-input' type="email" name='email' id='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
          </div>
            <button className='button-wrapper' disabled={checkDisable}>Continue</button>
        </div>
      </section>

      <section className='contact-section'>
        <div className='contact-information-wrapper'>
          <div className='contact-section-name'>
            2. Shipping Address
          </div>
          <div className='user-name-wrapper'>

            <div >
              <div className='label-wrapper'>
                <label htmlFor="firstname">First Name</label> 
              </div>
              <input className='name-inputs' type="text" placeholder='Fist Name' name='firstname' id='firstnname' onChange={(e) => setFirstname(e.target.value)}/>
            </div>

            <div>
              <div className='label-wrapper'>
                <label htmlFor="lastname">Last Name</label> 
              </div>
              <input className='name-inputs' type="text" placeholder='Last Name' name='lastname' id='lastname' onChange={(e) => setLastname(e.target.value)}/>
            </div>
          </div>

        <div >
        <div className="label-wrapper">
          <label htmlFor="country">Country</label>
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Country' value={country}/>
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Country List</button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="dropdown-item"><button onClick={(e) => getCountry(e.target.innerText)} className='dropdown-btns'>United State Of America</button></li>
              <li className="dropdown-item"><button onClick={(e) => getCountry(e.target.innerText)} className='dropdown-btns'>United Kingdom</button></li>
              <li className="dropdown-item"><button onClick={(e) => getCountry(e.target.innerText)} className='dropdown-btns'>Nigeria</button></li>
              
            </ul>
        </div>
      </div>

        <div className='label-wrapper'>
          <label htmlFor="street-address">Street Address</label>
        </div>
        <input className='inputs' type="text" name='street-address' id='street-address' placeholder='Street Address' onChange={(e) => setstreetAdress(e.target.value)}/>
        <button className='add-street'>+ Add Line</button>

        <div className='label-wrapper'>
          <label htmlFor="street-address">City </label>
        </div>
        <input className='inputs' type="text" name='street-address' id='street-address' placeholder='City' onChange={(e) => setCity(e.target.value)}/>

        <div className='state-zipcode-wrapper'>
          <div>
          <div className='label-wrapper'>
            <label htmlFor="street-address">State</label>
          </div>
          <select className='select-input ' name="state" id="state" onChange={(e) => setState(e.target.value)}>
            <option className='state-options' value="Lagos">Lagos</option>
            <option className='state-options' value="Sokoto" >Sokoto</option>
            <option className='state-options' value="Ibadan">Ibadan</option>
          </select>
          </div>

          <div>

          <div className='label-wrapper'>
            <label htmlFor="firstname">Zip Code</label> 
           </div>
            <input className='name-inputs' type="number" placeholder='Zip Code' name='firstname' id='firstnname' required onChange={(e) => setZipCode(e.target.value)}/>
          </div>
        </div>

        <div>
        <div className='label-wrapper'>
          <label htmlFor="street-address">Phone Number</label>
        </div>
        <input minLength={7} className='inputs' type="number" name='street-address' id='street-address' placeholder='Phone Number' onChange={(e) => setPhoneNo(e.target.value)}/>
        </div>

        <label className='checkbox-wrapper'>
          <input  type="checkbox" name="save-info" id="save-info" onChange={(e) => setSaveInfo(e.target.checked)}/> Save informations for a future fast checkout
          <span className='checkmark'></span>
        </label>


        <label className='checkbox-wrapper-sms'>
          <input  type="checkbox" name="SMS" id="SMS"  onChange={(e) => setNotifications(e.target.checked)}/> Receive SMS notifications
          <span className='checkmark'></span>
        </label>
        <button className='button-wrapper' disabled={disableContinue}>Continue</button>
        </div>
      </section>

     <div className='submit-contact-details-wrapper'>
     <button onClick={(e) => {e.preventDefault() ; handleSubmit()}} disabled={disableContinue ? true : false} className='submit-contact-details'>Submit</button>
     </div>
      </form>

    </>
  )
}
