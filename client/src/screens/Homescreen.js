import axios from 'axios';
import React from 'react'
import Foodbox from '../components/Foodbox'

export default class Homescreen extends React.Component{
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
    console.log(this.state.newitems)
  }
  fun1 = async ()=>{
    let body = await axios.get("http://localhost:8080/api/getmenu/getallitems")
    // console.log(body)
    return body
  }
  render(){
    return (
          <div>
            <div>
                  <div className="sidebar">
                      <a href="#" onClick={()=>{
                          
                          let items_1 = this.state.items.filter((value)=>{
                          return value.category==="start";
      
                        })
                        this.setState({newitems:items_1})
                      }}>Starters</a>
                      <a href="#" onClick={()=>{
                        let items_1 = this.state.items.filter((value)=>{
                          return value.category==="main";
      
                        })
                        this.setState({newitems:items_1})
                      }}>Main course</a>
                      <a href="#" onClick={()=>{
                        let items_1 = this.state.items.filter((value)=>{
                          return value.category==="des";
      
                        })
                        this.setState({newitems:items_1})
                      }}>Desserts</a>
                      <a href="#" onClick={()=>{
                        this.setState({newitems:this.state.items})
                      }}>All</a>
                  </div>
              </div>
              <div className='row' id = "row1">
                {this.state.newitems!=[]?this.state.newitems.map(dish=>
                  {
                      return (<div className='col-md-4' key={dish._id}>
                          <Foodbox dish = {dish} />
      
                          </div>)
                  }
                  ):""}
                  
              </div>
              </div>
        )
    
  }
}

