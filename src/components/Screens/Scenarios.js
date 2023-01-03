import { Fragment } from 'react';
import CardBlock from '../Layout/Blocks/CardBlock';

import classes from './Scenarios.module.css';

import wcmlOverShapScreenshot from '../../assets/wcml-over-shap-screenshot.jpg';
import wcmlMissingLinkScreenshot from '../../assets/wcml-missing-link-screenshot.jpg';
import jtMMLScreenshot from '../../assets/jt-mml-screenshot.jpg';

const Scenarios = () => {
    const routes = [
        {
            name: "WCML over Shap",
            image: wcmlOverShapScreenshot,
        },
        {
            name: "WCML Midlands and Northwest",
            image: wcmlMissingLinkScreenshot,
        },
        {
            name: "JT Midland Mainline",
            image: jtMMLScreenshot,
        }
    ];

    return(
        <Fragment>
            <CardBlock title="Card Block Title" routes={routes}/>
        </Fragment>
    );
};

export default Scenarios;