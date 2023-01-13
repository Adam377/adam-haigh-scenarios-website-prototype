import { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from '../UI/Button';
import ContentOnlyBlock from "../Layout/Blocks/ContentOnlyBlock";
import MastheadSubpage from "../Layout/MastheadSubpage";

import classes from './WIPContent.module.css';

const WIPContent = (props) => {
    return(
        <Fragment>
            <MastheadSubpage title="Work In Progress" />
            <ContentOnlyBlock>Products that are <i>Work In Progress</i> will appear here. I wonder what's in the pipeline...</ContentOnlyBlock>
            <ContentOnlyBlock>Be sure to view <a href="https://alanthomsonsim.com/downloads/0k83-1054-garston-flt-to-crewe-bh/" target="blank">my latest scenario</a> on Alan Thomson Sim!</ContentOnlyBlock>
            <div className={classes.button}><Link to="/scenarios" style={{textDecoration:'none'}}><Button>Scenarios</Button></Link></div>
        </Fragment>
    );
};

export default WIPContent;