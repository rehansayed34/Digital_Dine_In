import axios from 'axios';
import React from 'react'
import Order from '../components/Order'

export default class OrdersPage extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {newitems:[],items:[]}
     
  }
  async componentDidMount()
  {
    let items1 = await this.fun1();
    console.log(items1)
    this.setState({newitems:items1.data,items:items1.data})
  }
  fun1 = async ()=>{
    let body = await axios.get("http://localhost:8080/api/getmenu/getorders")
    return body
  }
  render(){
    return (
          <div className="adminbox">
              <div className='rowadmin' id = "row1admin">
                {this.state.newitems!=[]?this.state.newitems.map(dish=>
                  {
                      return (<div className='col-md-12' key={dish._id}>
                          <Order dish = {dish} />
                          </div>)
                  }
                  ):""}
                  
              </div>
          </div>
        )
    
  }
}



