import React ,{useReducer} from "react";
import CartContext from "./cart-context";

const cartReducer = (state , action) => {
        if(action.type === 'ADD') {
            const updatedAmount = state.totalAmount + (action.item.price * action.item.amount)
            let updatedItems;
           
            const existingIndex = state.item.findIndex(item => {
                return item.id === action.item.id
            });
            
            const existingItem = state.item[existingIndex];
            if (existingItem) {
               const updatedItem = {
                        ...existingItem,
                        amount: existingItem.amount + action.item.amount
                }
                updatedItems = [...state.item];
                updatedItems[existingIndex] = updatedItem;
            }
            else {
                updatedItems = state.item.concat(action.item);
            }
            return {
                item: updatedItems,
                totalAmount: updatedAmount
            }
        }
        else if(action.type === 'REMOVE') {
            const updatedAmount = state.totalAmount - (action.item.price * action.item.amount)
            let updatedItems;
           
            const existingIndex = state.item.findIndex(item => {
                return item.id === action.item.id
            });
            
            const existingItem = state.item[existingIndex];
            if (existingItem) {
               const updatedItem = {
                        ...existingItem,
                        amount: existingItem.amount - action.item.amount
                }
                updatedItems = [...state.item];
                updatedItems[existingIndex] = updatedItem;
            }
            else {
                updatedItems = state.item.concat(action.item);
            }
            return {
                item: updatedItems,
                totalAmount: updatedAmount
            }
        }
    
        }


const CartProvider =  props => {

    const [cartState , dispatchCartState] = useReducer(cartReducer , {
        item:[] ,
        totalAmount : 0
    });

    const addToCartHandler = item => {
        dispatchCartState({type: 'ADD' , item: item});
    }
    const removeToCartHandler = item => {
        dispatchCartState({type: 'REMOVE' , item: item});
    }
    const cnxValue = {
        items: cartState.item,
        totalAmount : cartState.totalAmount ,
        addItem: addToCartHandler,
        removeItem: removeToCartHandler
    }
        return (
        <CartContext.Provider value={cnxValue}>
            {props.children}
        </CartContext.Provider>)
}
export default CartProvider;