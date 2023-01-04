import { Fragment } from 'react';
import CardBlock from '../Layout/Blocks/CardBlock';

import classes from './Scenarios.module.css';

import MastheadSubpage from '../Layout/MastheadSubpage';

import rivieraLineScreenshot from '../../assets/riviera-line-screenshot.jpg';
import swexScreenshot from '../../assets/swex-screenshot.jpg';
import jtMMLScreenshot from '../../assets/jt-mml-screenshot.jpg';
import wcmlMissingLinkScreenshot from '../../assets/wcml-missing-link-screenshot.jpg';
import wcmlOverShapScreenshot from '../../assets/wcml-over-shap-screenshot.jpg';
import wcmlSouthScreenshot from '../../assets/wcml-south-screenshot.jpg';

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
        },
        {
            name: "WCML South",
            image: wcmlSouthScreenshot,
        },
        {
            name: "Riviera Line",
            image: rivieraLineScreenshot,
        },
        {
            name: "Southwestern Expressways - Reading",
            image: swexScreenshot,
        }
    ];

    return(
        <Fragment>
            <MastheadSubpage title="Scenarios"/>
            <CardBlock title="Card Block Title" routes={routes}/>
        </Fragment>
    );
};

export default Scenarios;