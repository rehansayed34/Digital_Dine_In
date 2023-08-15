import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'
import Menuadmin from '../components/Menuadmin'

export default class Admin extends React.Component{
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
    let body = await axios.get("http://localhost:8080/api/getmenu/getallitems")
    return body
  }
  del= async()=>{
    let items1 = await this.fun1();
    this.setState({newitems:items1.data,items:items1.data})
  }
  render(){
    return (
          <div className="adminbox">
              <div className='rowadmin' id = "row1admin">
                {this.state.newitems!=[]?this.state.newitems.map(dish=>
                  {
                      return (<div className='col-md-12' key={dish._id}>
                          <Menuadmin dish = {dish} del={this.del} />
                          </div>)
                  }
                  ):""}
                  
              </div>
              <div className="fixedmenu">
              <h1>My Menu</h1>
              <Link to="/adminform">
              <button type="button" className="btn btn-outline-light" id="btadmin">Add item</button>
              </Link>
              </div>
          </div>
        )
    
  }
}



