import React from 'react'
import {Modal} from 'react-bootstrap'
import axios from 'axios'

const modify = (name)=>{
        let names = name.replaceAll('%2C',',')
        return names.replaceAll('+',' ')
  }

class Foodbox extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = { quantity:1,show:false};
    }
    handlecart= async()=>{
      let name = this.props.dish.name
      let user = await axios.get(`http://localhost:8080/api/check/${name}`)
      console.log(user)
		  if(user.data.length!=0)
      alert("Item already in cart");
      else{
      let body = this.props.dish
      alert("Item added to cart");
      await axios.post('http://localhost:8080/cart', body, { 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }})
      }  
      }
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    render(){
      return (
        <div id='dish'>
      <h1 id='fooditemname'>{modify(this.props.dish.name)}</h1>
      <img src = {decodeURIComponent(this.props.dish.image)} height={180} width={220} onClick = {this.handleShow}/>
      <p>{modify(this.props.dish.description).slice(0,20)}...</p>
      <div className = "flex-container" >
        <p>Price: {this.props.dish.price*this.state.quantity}/-</p>
      </div>
        <button type="button" className="btn btn-danger" onClick={this.handlecart}>Add item</button>
        <Modal show={this.state.show} className="popup">
      <Modal.Header>
        <Modal.Title className='titlemodal'>{modify(this.props.dish.name)}</Modal.Title>
      </Modal.Header>

      <Modal.Body className = "contentmodal">
        <p><img src = {decodeURIComponent(this.props.dish.image)} height={280}/></p>
        <p>{modify(this.props.dish.description)}</p>
      </Modal.Body>

      <Modal.Footer>
      <button type="button" className="btn btn-secondary" onClick = {this.handleClose}>Close</button>
        
      </Modal.Footer>
    </Modal>
    </div>

      )
    }

}

export default Foodbox;