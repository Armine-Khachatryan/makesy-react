import React from 'react';
import Button from "../../../ui/button/Button";
import classes from './HomeComponent1.module.css';


const HomeComponent1 = () => {
    return(
        <div className={classes.whole}>
            <div className="container">
                <div className={classes.leftPart}>
                    <h1>Garment Making<br/>has never been easier</h1>
                    <div className={classes.homeText}>Custom make your own garment pieces from 1000s of styles available in our library now.</div>
                    <Button>Download App</Button>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent1;