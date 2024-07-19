import React, {useState} from 'react';
import Read from '../../../assets/images/AppFeaturesImages/Read.svg';
import Button from "../../../ui/button/Button";
import classes from './AppComponent1.module.css';

const AppComponent1 =()=> {

    const [showLeftText, setShowLeftText]=useState(false);

    let showLeft =()=>{
        setShowLeftText(prev=>!prev)
    }



    return(
        <div className="container">
            <div className={classes.inside}>
                {!showLeftText ?
                    <div className={classes.left}>
                        <div>
                            <div className={classes.title}>Multi-Accounts</div>
                            <div className={classes.sibTitle}>Create business and personal accounts</div>
                            <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                purus sit amet luctus venenatis</div>
                        </div>
                        <div className={classes.readDiv} onClick={showLeft}>
                            <div className={classes.iconDiv}>
                                <img src={Read} alt={""} className={classes.readIcon}/>
                            </div>
                          Read More
                        </div>
                    </div>:
                    <div className={classes.leftText}>
                        <div>
                            <div className={classes.title}>Multi-Accounts</div>
                            <div className={classes.sibTitle}>Create business and personal accounts</div>
                            <div className={classes.textWide}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                purus sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam.</div>
                            <Button>Download App</Button>
                        </div>
                        <div className={classes.readDiv} onClick={showLeft}>
                            <div className={classes.iconDiv}>
                                <img src={Read} alt={""} className={classes.readIcon}/>
                            </div>
                            Read Less
                        </div>
                    </div>
                }
                <div className={classes.right}>
                    <div>
                        <div className={classes.title}>Customize from scratch</div>
                        <div className={classes.sibTitle}>Choose your own services and skills</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, purus sit amet luctus venenatis</div>
                    </div>
                    <div className={classes.readDiv}>
                        <div className={classes.iconDiv}>
                            <img src={Read} alt={""} className={classes.readIcon}/>
                        </div>
                        Read More
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppComponent1;
