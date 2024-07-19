import React from 'react';
import Read from '../../../assets/images/AppFeaturesImages/Read.svg';
import classes from '../AppComponent1/AppComponent1.module.css';
import styles from './AppComponent3.module.css';


const AppComponent3 =()=> {
    return(
        <div className="container">
            <div className={styles.inside}>
                <div className={styles.left}>
                    <div>
                        <div className={classes.title}>Instant Communication</div>
                        <div className={classes.sibTitle}>Chat with your tailor directly anytime</div>
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
                <div className={styles.right}>
                    <div>
                        <div className={classes.title}>Video calls</div>
                        <div className={classes.sibTitle}>Schedule calls, invite your team, share live </div>
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

export default AppComponent3;