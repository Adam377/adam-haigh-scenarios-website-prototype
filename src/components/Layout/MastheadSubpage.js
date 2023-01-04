import { Fragment } from 'react';
import classes from './MastheadSubpage.module.css';

const MastheadSubpage = (props) => {
    return(
        <Fragment>
            <div className={classes['masthead-subpage']}>{props.title}</div>
        </Fragment>
    );
};

export default MastheadSubpage;