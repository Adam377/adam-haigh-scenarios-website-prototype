import { Fragment } from "react";

import classes from './Masthead.module.css';
import mastheadImage from '../../assets/class144Bury.jpg';
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Masthead = (props) => {
    return(
        <Fragment>
            <div className={classes.masthead}>
                <img className={classes.image} src={mastheadImage} alt=""/>
                <div className={classes['masthead-overlay']}/>
                <div className={classes['content-container']}>
                    <div className={classes.title}>{props.title}</div>
                    <p className={classes['inner-content']}>{props.children}</p>
                    <div className={classes['masthead-buttons']}>
                        <Link to="/scenarios" style={{textDecoration:'none'}}><Button>View Scenarios</Button></Link>
                        <Link to="/wip-content" style={{textDecoration:'none'}}><Button>Work In Progress</Button></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Masthead;