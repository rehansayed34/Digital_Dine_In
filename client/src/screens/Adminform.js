import React from 'react'
import axios

from 'axios'
export default class Adminform extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {name:"",price:"",image:"",category:"",description:""}
    }
    handlechange=(e)=>{
        let newData = {...this.state}
        newData[e.target.name]= e.target.value
        this.setState(newData)

        // console.log(newData)
    }
    handlesubmit=async (e)=>{
        e.preventDefault()
            const body = {
            name:this.state.name,
            price:this.state.price,
            image:this.state.image,
            category:this.state.category,
            description:this.state.description,

        }
        console.log(body)
        this.setState({name:"",price:"",image:"",category:"",description:""})
        await axios.post('http://localhost:8080/admin', body, { 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }}) 
            
                       
    }
    render(){
        return(
            <div className='bodyform'>
                <div className="container">
        <div className="text">Add Item</div>
        <form onSubmit={this.handlesubmit}>
           <div className="form-row">
              <div className="input-data">
                 <input type="text" name = "name" onChange = {(e)=>this.handlechange(e)} value = {this.state.name} required/>
                 <div className="underline"></div>
                 <label htmlFor="">Dish Name</label>
              </div>
              <div className="input-data">
                 <input type="text" name = "price" onChange = {(e)=>this.handlechange(e)} value = {this.state.price} required/>
                 <div className="underline"></div>
                 <label htmlFor="">Price</label>
              </div>
           </div>
           <div className="form-row">
               <div className="input-data">
                  <input type="url" name="image" onChange = {(e)=>this.handlechange(e)} value = {this.state.image} required/>
                  <div className="underline"></div>
                  <label htmlFor="">Image link</label>
                </div>
                <div className="input-data">
                    <input type="text" name="category" onChange = {(e)=>this.handlechange(e)} value = {this.state.category} required/>
                        <div className="underline"></div>
                        <label htmlFor="">Category</label>
                </div>
            </div>
                <div className="form-row">
                   <div className="input-data textarea">
                      <textarea rows="8" cols="80" name = "description" onChange = {(e)=>this.handlechange(e)} value = {this.state.description} required></textarea>
                      <br />
                      <div className="underline"></div>
                      <label htmlFor="">Description</label>
                      <br />
                      <div className="form-row submit-btn">
                         <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" value="submit"/>
                         </div>
                      </div>
                   </div>
                </div>
            </form>
        </div>
            </div>
        )

    } 
}
