import { Fragment } from "react";

import classes from './WIPContent.module.css';

const WIPContent = (props) => {
    return(
        <Fragment>
            <div className={classes.content}>WIP Content!</div>
        </Fragment>
    );
};

export default WIPContent;