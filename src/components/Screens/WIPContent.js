import { Fragment } from "react";
import ContentOnlyBlock from "../Layout/Blocks/ContentOnlyBlock";
import MastheadSubpage from "../Layout/MastheadSubpage";

import classes from './WIPContent.module.css';

const WIPContent = (props) => {
    return(
        <Fragment>
            <MastheadSubpage title="Work In Progress" />
            <ContentOnlyBlock>Products that are <i>Work In Progress</i> will appear here. I wonder what's in the pipeline...</ContentOnlyBlock>
        </Fragment>
    );
};

export default WIPContent;