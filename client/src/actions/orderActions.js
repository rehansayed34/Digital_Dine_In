import axios from "axios";
export const placeOrder =(token,subtotal)=> async(dispatch,getState)=>{
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    try {

        const response = await axios.post('/api/orders/placeorder' , {token , subtotal ,currentUser })
        dispatch({type:'PLACE_ORDER_SUCCESS'})
        console.log(response);
        
    } catch (error) {
        dispatch({type:'PLACE_ORDER_FAILED'})
        console.log(error);
       
    }

}