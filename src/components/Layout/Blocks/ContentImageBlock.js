import { Fragment } from 'react';
import classes from './ContentImageBlock.module.css';

const ContentImageBlock = (props) => {
    return (
        <Fragment>
            <div className={classes['content-image-block']}>
                <div className={classes.container}>
                    <img className={classes.image} src={props.image} />
                    <div className={classes.content}>
                        <div className={classes.title}>
                            {props.title}
                        </div>
                        <div className={classes['inner-content']}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ContentImageBlock;