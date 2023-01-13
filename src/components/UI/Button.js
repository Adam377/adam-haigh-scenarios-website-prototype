import { Fragment } from "react";

import classes from './Button.module.css';

const Button = (props) => {
    return(
        <Fragment>
            <div className={classes.button}>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Button;