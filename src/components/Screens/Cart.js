import { Fragment } from "react";

import classes from './Cart.module.css';

import MastheadSubpage from "../Layout/MastheadSubpage";

const Cart = () => {
    return(
        <Fragment>
            <MastheadSubpage title="Cart" />
            <div className={classes.content}>Uhh, there's no products here. You can't checkout with anything.</div>
        </Fragment>
    );
};

export default Cart;