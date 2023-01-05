import { Fragment } from "react";

import classes from './ImageBlock.module.css'

const ImageBlock = (props) => {
    return(
        <Fragment>
            <div className={classes['image-block']}>
                <img className={classes.image} src={props.image}/>
                <div className={classes['image-overlay']}/>
                <div className={classes['content-container']}>
                    <div className={classes.title}>
                        {props.title}
                    </div>
                    <div className={classes['inner-content']}>
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ImageBlock;