import { Fragment } from 'react';
import classes from './ContentImageBlock.module.css';

const ContentImageBlock = (props) => {
    return (
        <Fragment>
            <div className={classes.title}>
                {props.children}
            </div>
            <div className={classes.content}>
                
            </div>
            <img className={classes.image}>
                
            </img>
        </Fragment>
    );
};

export default ContentImageBlock;