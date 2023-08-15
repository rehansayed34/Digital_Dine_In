import React from 'react'


const modify = (name)=>{
        let names = name.replaceAll('%2C',',')
        return names.replaceAll('+',' ')
  }


class Order extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = { quantity:1,show:false};
    }
    render(){
      return (
        <div>
        <div id='cartdish'>
          <div className='cartdiv'>
           <h1 id='fooditemname'>{modify(this.props.dish.name)}</h1>
        <p>{modify(this.props.dish.description).slice(0,20)}...</p>
        <div className='buttonprice'>
        <p>Price: {this.props.dish.price*this.state.quantity}/- &nbsp;</p>
        </div>
          </div>
      </div>
      </div>

      )
    }

}

export default Order;