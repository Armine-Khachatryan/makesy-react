import React from 'react';
import classes from './MadeToMeasure8.module.css';
import Button from "../../../ui/button/Button";


const MadeToMeasure8 =({title})=> {
    return(
        <div className={"container"}>
            <div className={classes.whole}>
                <div className={classes.title}>{title}</div>
                <Button>Download App</Button>
            </div>
        </div>
    )
}

export default MadeToMeasure8;