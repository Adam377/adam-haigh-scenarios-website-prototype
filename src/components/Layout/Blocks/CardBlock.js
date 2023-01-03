import { Fragment } from 'react';
import classes from './CardBlock.module.css';

const GridBlock = (props) => {
    return(
        <div className={classes['card-block']}>
            <div className={classes.container}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes['cards-container']}>
                    {props.routes.map((route, index) => {
                        return(
                            <Fragment key={index}>
                                <div className={classes.card}>
                                    <img className={classes.image} src={route.image}/>
                                    <div className={classes['card-title']}>{route.name}</div>
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GridBlock;