import classes from './ContentOnlyBlock.module.css';

const ContentOnlyBlock = (props) => {
    return(
        <div className={classes['content-only-block']}>
            <div className={classes.container}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.content}>{props.children}</div>
            </div>
        </div>
    );
};

export default ContentOnlyBlock;