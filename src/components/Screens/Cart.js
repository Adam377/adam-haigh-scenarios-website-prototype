import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from './Cart.module.css';

import Button from '../UI/Button';
import ContentOnlyBlock from '../Layout/Blocks/ContentOnlyBlock';
import MastheadSubpage from "../Layout/MastheadSubpage";

const Cart = () => {
    return(
        <Fragment>
            <MastheadSubpage title="Cart" />
            <ContentOnlyBlock>Uhh, there's no products here. You can't checkout with anything.</ContentOnlyBlock>
            <div className={classes.button}>
                <Link to="/scenarios" style={{ textDecoration: 'none' }}>
                    <Button>Return to Store</Button>
                </Link>
            </div>
        </Fragment>
    );
};

export default Cart;