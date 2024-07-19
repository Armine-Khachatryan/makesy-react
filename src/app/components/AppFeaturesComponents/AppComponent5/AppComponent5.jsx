import React from 'react';
import Read from '../../../assets/images/AppFeaturesImages/Read.svg';
import classes from '../AppComponent1/AppComponent1.module.css';
import styles from './AppComponent5.module.css';


const AppComponent5 =()=> {
    return(
        <div className="container">
            <div className={styles.inside}>
                <div className={styles.left}>
                    <div>
                        <div className={classes.title}>Track Orders</div>
                        <div className={classes.sibTitle}>Follow the progress of your order</div>
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
                        <div className={classes.title}>Makesy on web and ipad</div>
                        <div className={classes.sibTitle}>Manage your orders from anywhere</div>
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

export default AppComponent5;