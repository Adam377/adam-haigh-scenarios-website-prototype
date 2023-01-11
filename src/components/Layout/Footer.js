import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from './Footer.module.css';

const Footer = () => {
    return(
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.container}>
                    <h1>Logo</h1>
                    <h1>Socials</h1>
                    <nav>
                        <ul className={classes['footer-navigation']}>
                            <li>
                                <NavLink activeClassName={classes.active} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/scenarios">Scenarios</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/wip-content">WIP</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/cart">Cart</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;