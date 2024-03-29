import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from './Header.module.css';

const Header = () => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Logo</h1>
                <nav>
                    <ul>
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
            </header>
        </Fragment>
    );
};

export default Header;