import axios from 'axios';
import React from 'react'
import {BrowserRouter,Routes, Route,Navigate,Link} from 'react-router-dom'
import Checkout from '../Checkout';
import Cartitems from '../components/Cartitems';


export default class Cart extends React.Component{
  // price = 0;
  constructor(props)
  {
    super(props)
    this.state = {newitems:[],items:[],totalprice:0}
  }

  async componentDidMount()
  {
    let items1 = await this.fun1();
    let price = 0
    for (let i in items1?.data) {
      price += parseInt(items1?.data[i].price)
    }
    // console.log(items1?.data?.);
    this.setState({newitems:items1.data,items:items1.data,
      totalprice: price
    })

  }
  fun1 = async ()=>{
    let body = await axios.get("http://localhost:8080/api/getmenu/getcartitems")
    return body
  }
  setprice=(prevPrice, currPrice)=>{
      this.setState({
        totalprice: this.state.totalprice - parseInt(prevPrice) + parseInt(currPrice)
      })
  }
  del= async()=>{
    let items1 = await this.fun1();
    let price = 0
    for (let i in items1?.data) {
      price += parseInt(items1?.data[i].price)
    }
    this.setState({newitems:items1.data,items:items1.data,totalprice:price})
  }
  render(){
    return (
          <div className="adminbox">
              <div className='rowadmin' id = "row1admin">
                {this.state.newitems!=[]?this.state.newitems.map(dish=>
                  {
                      // this.price += dish.price 
                      return (<div className='col-md-12' key={dish._id}>
                          <Cartitems dish = {dish} price = {this.setprice} del={this.del} />
                          </div>)
                  }
                  ):""}
                  
              </div>
              <div className="fixedmenu">
              <h1>Cart</h1>
              <p>Total:- {this.state.totalprice}/-</p>
              <Checkout subtotal={this.state.totalprice} />
              </div>
          </div>
        )
    
  }
}



