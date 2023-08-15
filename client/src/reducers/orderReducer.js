export const placeOrderReducer =(state= {} , action) =>{

    switch(action.type)
    {
        case 'PLACE ORDER REQUEST' : return{
            loading:true
        }
        case 'PLACE_ORDER_SUCCESS' : return{
            loading:false, 
            error:action.payload
        }
        default: return state
    }
}