import React , {useContext} from "react";
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from "../../context/cart-context";

const Cart = props => {
    const cartContxt = useContext(CartContext);

    const addMoreItem = () => {
        console.log(cartContxt.items.key);
    }

    const cartItems = (
        <ul className={classes['list-main']}>
            {cartContxt.items.map(item =>
                 <li className={classes['cart-items']} key={item.id}>
                    <h4>{item.name} </h4>
                    <span>{item.price}</span>
                    <h5>X <span className={classes.amount}>{item.amount}</span></h5>
                    <span className={classes.add}>
                        <button ><i className="fa-solid fa-minus"></i></button>
                        <button onClick={addMoreItem}><i className="fa-solid fa-plus"></i></button>
                    </span>
                    <span>$ {(item.price * item.amount).toFixed(2)}</span>
                </li>
                 
                )}
        </ul>
    )
    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <hr/>
               <div  className = {classes.total}>
                    <span>Total Price</span>
                   
                    <span>$ {cartContxt.totalAmount.toFixed(2)}</span>
               </div>
               <div className={classes.actions}>
                   <button onClick={props.onHideCart} className={classes['btn--alt']}>close</button>
                   <button className={classes.button}>Order</button>
               </div>
        </Modal>
    )
}

export default Cart;