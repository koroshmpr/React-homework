import React ,{useContext} from "react";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../context/cart-context";

const HeaderCardButton = props => {
    const cartContext = useContext(CartContext);
    return (
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <i className="fas fa-shopping-cart"></i>
                 </span>
                <span>
                    Your Shppping Cart
                </span >
                <span className={classes.badge}>{cartContext.items.length}</span> 

            </button>

    )
}
export default HeaderCardButton;