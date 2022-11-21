import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import classes from './Masthead.module.css';
import mastheadImage from '../../assets/class144Bury.jpg';

const Masthead = () => {
    return(
        <Fragment>
            <Switch>
                <Route path="/" exact>
                    <div className={classes.masthead}>
                        <img src={mastheadImage} alt=""/>
                    </div>
                </Route>
            </Switch>
        </Fragment>
    );
};

export default Masthead;