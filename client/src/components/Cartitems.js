import React from 'react'
import axios from 'axios'
const modify = (name)=>{
        let names = name.replaceAll('%2C',',')
        return names.replaceAll('+',' ')
  }


class Cartitems extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = { quantity:1,show:false};
    }
    handledelete= async()=>{
      const ans = await axios.get(`http://localhost:8080/api/getmenu/deletecartitems/${this.props.dish.name}`)
      console.log(ans.data.acknowledged)
      if(ans.data.acknowledged)
      {
      this.props.del();
      alert("Item removed")
      }
      else
      alert("Item couldn't be deleted")
    }

    handleChange = e => {
      this.props.price(this.state.quantity * this.props.dish.price ,e.target.value * this.props.dish.price);
      this.setState({
        quantity:e.target.value
      })
    }
    
    render(){
      return (
        <div>
        <div id='cartdish'>
      <h1 id='fooditemname'>{modify(this.props.dish.name)}</h1>
          <div className='cartdiv'>
        <p>{modify(this.props.dish.description).slice(0,25)}...</p>
        <div className = "flex-container" >
        <p>Price: {this.props.dish.price*this.state.quantity}/- &nbsp; </p><p>  </p>
        <p>Quantity :
        <select  value = {this.state.quantity} onChange={this.handleChange}>
          {[...Array(10).keys()].map((x,i)=>{
            return <option value = {i+1} key={i}>{i+1}</option>
          })}
        </select></p> &nbsp;
        <button type="button" className="btn btn-danger" id='btndle' onClick={this.handledelete}>Delete</button>
      </div>
          </div>
      </div>
      </div>

      )
    }

}

export default Cartitems;