import { Fragment } from "react";

import classes from './Masthead.module.css';
import mastheadImage from '../../assets/class144Bury.jpg';

const Masthead = (props) => {
    return(
        <Fragment>
            <div className={classes.masthead}>
                <img className={classes.image} src={mastheadImage} alt=""/>
                <div className={classes['masthead-overlay']}/>
                <div className={classes['content-container']}>
                    <div className={classes.title}>{props.title}</div>
                    <p className={classes['inner-content']}>{props.children}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Masthead;