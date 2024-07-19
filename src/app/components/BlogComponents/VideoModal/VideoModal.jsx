import React from 'react';
import Close from '../../../assets/images/BlogImages/Close.svg';
import Modal from 'react-modal';
import { useForm, Controller } from 'react-hook-form';
import classes from './../BlogReportComponent/BlogReportComponent.module.css';
import styles from './VideoModal.module.css';
import Line from "../../../assets/images/BlogImages/Line.svg";

const VideoModal=(props)=>{

    const { register, handleSubmit, reset, formState: { errors }  } = useForm({
        defaultValues: {
            email: '',
        },
        mode: "onSubmit",
    });

    const onSubmit = data => {
        console.log(data)
        props.closeModal();
        props.onPlayVideo();
        reset();
    };


    const customStyles = {
        content: {
            padding: '44px 32px',
            maxWidth: '636px',
            width: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FFF',
            borderRadius: '16px',
        },
        overlay: {
            // backgroundColor: 'transparent',
            zIndex: "1000"
        }
    };


    let closeAndReset =()=>{
        props.closeModal();
        reset()
    }



    return(
        <Modal
            isOpen={props.openVideoModal}
            onRequestClose={closeAndReset}
            style={customStyles}
            ariaHideApp={false}
            class={"modalStyle"}>
            <div className={styles.inside}>
                <div className={styles.top}>
                    <div className={classes.titleDiv}>
                        <div className={classes.title}>Enter your email to play the video for </div>
                        <div className={classes.blueDiv}>
                            <div className={classes.free}>FREE</div>
                            <img src={Line} alt={""}/>
                        </div>
                    </div>
                    <div onClick={closeAndReset}><img className={styles.close} src={Close} alt={""}/></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.inputDiv}>
                        <label htmlFor="email" className={classes.label}>Email</label>
                        <input
                            className={`${classes.inputStyle} ${errors.email && classes.invalid}`}
                            {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder="makesy@gmail.com"
                        />
                        {errors.email && <span className={classes.error}>{errors.email.message}</span>}
                    </div>
                    <button className={"submitBtn"} type="submit">Watch Now</button>
                </form>
            </div>
        </Modal>
    )

}

export default VideoModal;
