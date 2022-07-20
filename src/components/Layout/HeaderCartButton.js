import React,{useContext, useEffect, useState} from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx  = useContext(CartContext);

    const {items} = cartCtx

    useEffect(() => {

        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        //cleanup function
        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    
//Can't do cartCtx.items.length because what if and item has been added 4 times
//it'll update the items array once but update the ctx.amount to 4 so we need to utilize ctx.amount 
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

    return (
        <button className={btnClasses} onClick = {props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;