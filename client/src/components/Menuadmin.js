import React from 'react'
import {Modal} from 'react-bootstrap'
import axios from 'axios'


const modify = (name)=>{
        let names = name.replaceAll('%2C',',')
        return names.replaceAll('+',' ')
  }


class Menuadmin extends React.Component{
    constructor(props)
    {
        super(props);
        // this.state = { quantity:1};
    }
    handledelete= async()=>{
      const ans = await axios.get(`http://localhost:8080/api/getmenu/deletemenuitems/${this.props.dish.name}`)
      console.log(ans.data.acknowledged)
      if(ans.data.acknowledged)
      {
      this.props.del();
      alert("Item removed")
      }
      else
      alert("Item couldn't be deleted")
    }
    render(){
      return (
        <div>
        <div id='cartdish'>
          <div className='cartdiv'>
           <h1 id='fooditemname'>{modify(this.props.dish.name)}</h1>
        <p>{modify(this.props.dish.description).slice(0,20)}...</p>
        <div className='buttonprice'>
        <p>Price: {this.props.dish.price}/- &nbsp;</p>
        <button type="button" className="btn btn-danger" onClick={this.handledelete}>Delete</button>
        </div>
          </div>
      </div>
      </div>

      )
    }

}

export default Menuadmin;