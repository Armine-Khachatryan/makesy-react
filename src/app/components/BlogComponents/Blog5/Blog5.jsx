import React, {useState} from 'react';
import BlogImage12 from '../../../assets/images/BlogImages/BlogImage12.png';
import BlogImage13 from '../../../assets/images/BlogImages/BlogImage13.png'
import Send from '../../../assets/images/BlogImages/Send.svg';
import classes from './Blog5.module.css';
import Button from "../../../ui/button/Button";
import FillInformationModal from "../FillInformationModal/FillInformationModal";
import SuccessModal from "../SuccessModal/SuccessModal";



const Blog5 =()=>{

    const [fillInformationIsOpen, setFillInformation]=useState(false);
    const [successModalIsOpen, setSuccessModal]=useState(false);

    const openFillInformationModal=()=>{
        setFillInformation(true)
    }

    const closeFillInformationModal=()=>{
        setFillInformation(false)
    }


    const openSuccessModal=()=>{
        setSuccessModal(true)
    }

    const closeSuccessModal=()=>{
        setSuccessModal(false)
    }

    return(
        <>
            <div className={"container"}>
                <div className={classes.whole}>
                    <div className={classes.left}>
                        <h2>Want to stay updated with new resources? </h2>
                        <div className={classes.text}>Subscribe to our newsletter with one step.</div>
                        <Button OnClick={openFillInformationModal}>Subscribe</Button>
                    </div>
                    <div><img className={classes.icon} src={BlogImage13} alt={""}/></div>
                    <div className={classes.right}>
                        <div className={classes.subscription}>
                            <div className={classes.subscribeDiv}>
                                <input className={classes.subscribe} placeholder={"Subscribe"}/>
                            </div>
                            <div className={classes.iconDiv}>
                                <img className={classes.iconStyle} src={Send} alt={""} />
                            </div>

                        </div>
                        <div className={classes.rightDiv}>
                            <img className={classes.imageStyle} src={BlogImage12} alt={""}/>
                        </div>
                    </div>
                </div>
            </div>
            <FillInformationModal fillInformationIsOpen={fillInformationIsOpen}
                                  closeFillInformationModal={closeFillInformationModal} openSuccessModal={openSuccessModal}/>
            <SuccessModal successModalIsOpen={successModalIsOpen} closeSuccessModal={closeSuccessModal}/>
        </>
    )

}

export default Blog5;