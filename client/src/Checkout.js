import React from 'react'
import {useDispatch} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from './actions/orderActions'
import axios from 'axios'

export default function Checkout ({subtotal}) {
    const dispatch = useDispatch()
    async function tokenHander(token)
    {
        if(token)
        alert("Order Placed")
        let items = await axios.get("http://localhost:8080/api/getmenu/getcartitems")
        console.log(items)
        await axios.post('http://localhost:8080/myorders', items.data)
        let a = await axios.get("http://localhost:8080/api/getmenu/deletecart")
        
        document.location.href = 'http://localhost:3000'

        dispatch(placeOrder (token , subtotal))
    }
    return (
    <div>

        <StripeCheckout
        amount={subtotal*100 }
        shippingAddress
        token={tokenHander}
        stripeKey ='pk_test_51M0ZfHSH9jKoc2HUfW6Xbo2XkCVP0D26ZfmUKRQhhPQfNnCAsHSt6ipPd8pTFlaSrgjyxsaB6ndZpD4qxfuCbaSy00hXDQHD7E'
        currency = 'INR'>       
        <button type="button" className="btn btn-outline-secondary">Pay Now</button>
        </StripeCheckout>

    </div>
    )
}