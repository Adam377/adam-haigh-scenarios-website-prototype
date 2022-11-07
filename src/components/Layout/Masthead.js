import { Fragment } from "react";

import classes from './Masthead.module.css';
import mastheadImage from '../../assets/class144Bury.jpg';

const Masthead = () => {
    return(
        <Fragment>
            <div className={classes.masthead}>
                <img src={mastheadImage} alt=""/>
            </div>
        </Fragment>
    );
};

export default Masthead;