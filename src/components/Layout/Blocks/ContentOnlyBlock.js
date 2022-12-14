import classes from './ContentOnlyBlock.module.css';

const ContentOnlyBlock = (props) => {
    return(
        <div className={classes['content-only-block']}>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </div>
    );
};

export default ContentOnlyBlock;