import React from 'react'
import './Terms.css';

function Term() {
  return (
    <div>
    <div id='terms'>
    <h1 id='cn'><b >Terms and Conditions</b></h1>
    <h3 className='ac'>Acceptance of Terms</h3>
    <h6 className='de'>By subscribing to PetPawBox, you agree to comply with and be bound by these terms and conditions.</h6>
    <h3 className='ac'>Subscription Plans</h3>
    <h6 className='de'>PetPawBox offers various subscription plans, including monthly and annual options. By subscribing, you agree to the terms of your selected plan.</h6>
    <h3 className='ac'> Payment</h3>
    <h6 className='de'>Payment for your subscription will be processed at the time of purchase.</h6>
    <h6 className='de'>Recurring payments will be automatically charged to the payment method you provide.</h6>
    <h6 className='de'>Prices are subject to change, and any changes will be communicated in advance.</h6>
    <h3 className='ac'> Contact Information</h3>
    <h6 className='de'>For questions or concerns regarding these terms and conditions, please contact our customer support.</h6>
    <h3 className='ac'>Account Security</h3>
    <h6 className='de'>You are responsible for maintaining the security of your PetPawBox account login information.</h6>
    <h6 className='de'>Notify us immediately if you suspect unauthorized access to your account.</h6>
    </div>
    </div>
  )
}

export default Term