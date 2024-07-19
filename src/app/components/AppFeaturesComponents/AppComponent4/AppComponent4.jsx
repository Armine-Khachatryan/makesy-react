import React from 'react';
import Read from '../../../assets/images/AppFeaturesImages/Read.svg';
import styles from '../AppComponent2/AppComponent2.module.css';
import classes from '../AppComponent1/AppComponent1.module.css';
import style from './AppComponent4.module.css';


const AppComponent4 =()=> {


    return(
        <div className="container">
            <div className={styles.whole}>
                <div className={style.inside}>
                    <div className={styles.titlesDiv}>
                        <div className={classes.title}>Fitting Profiles</div>
                        <div className={styles.flex}>
                            <div className={styles.single}>
                                <div className={classes.sibTitle}>Create measurements for your clients or bulk orders</div>
                                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                                    aliquam, purus sit amet luctus venenatis</div>
                            </div>
                            <div className={styles.single}>
                                <div className={classes.sibTitle}>Create measurements for your clients or bulk orders</div>
                                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                                    aliquam, purus sit amet luctus venenatis</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.readDiv}>
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

export default AppComponent4;