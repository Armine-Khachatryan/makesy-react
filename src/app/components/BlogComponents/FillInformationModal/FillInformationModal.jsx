import React from 'react';
import Modal from 'react-modal';
import Close from '../../../assets/images/BlogImages/Close.svg';
import { useForm } from 'react-hook-form';
import classes from './FillInformationModal.module.css';
import styles from "./../VideoModal/VideoModal.module.css";


const FillInformationModal = (props) => {
    const { register, handleSubmit, reset, formState: { errors }, getValues  } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            confirmEmail: '',
            phoneNumber: '',
        },
        mode: "onSubmit",
    });

    const saveData = (data) => {
        closeAndReset();
        props.openSuccessModal()
        console.log(data, "data")
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
    const closeAndReset = () => {
        props.closeFillInformationModal();
        reset()
    };

    return (
        <Modal
            isOpen={props.fillInformationIsOpen}
            onRequestClose={closeAndReset}
            style={customStyles}
            ariaHideApp={false}
            class={"modalStyle"}>
            <div className={styles.inside}>
                <div className={classes.top}>
                    <div className={classes.title}>Fill in your information</div>
                    <div onClick={closeAndReset}>
                        <img className={styles.close} src={Close} alt={""} />
                    </div>
                </div>
                <form onSubmit={handleSubmit(saveData)}>
                    <div className={classes.inputDiv}>
                        <label htmlFor="fullName" className={classes.label}>Full Name</label>
                        <input
                            className={`${classes.inputStyle} ${errors.fullName && classes.invalid}`}
                            {...register("fullName", {
                                required: 'Full name is required'
                            })}
                            placeholder="ex: Ahmad Taha"
                        />
                        {errors.fullName && <span className={classes.error}>{errors.fullName.message}</span>}
                    </div>
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
                    <div className={classes.inputDiv}>
                        <label htmlFor="confirmEmail" className={classes.label}>Confirm Email</label>
                        <input
                            className={`${classes.inputStyle} ${errors.confirmEmail && classes.invalid}`}
                            {...register("confirmEmail", {
                                required: 'Confirm email is required',
                                validate: (value) =>
                                    value === getValues("email") || "The email addresses do not match"
                            })}
                            placeholder="makesy@gmail.com"
                        />
                        {errors.confirmEmail && <span className={classes.error}>{errors.confirmEmail.message}</span>}
                    </div>
                    <div className={classes.inputDiv}>
                        <label htmlFor="phoneNumber" className={classes.label}>Phone Number</label>
                        <input
                            type="number"
                            className={`${classes.inputStyle} ${errors.phoneNumber && classes.invalid}`}
                            {...register("phoneNumber", {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\+?\d+$/,
                                    message: 'Invalid phone number'
                                }
                            })}
                            placeholder="+966XXXXXX"
                        />
                        {errors.phoneNumber && <span className={classes.error}>{errors.phoneNumber.message}</span>}
                    </div>
                    <button className="submitBtn" type="submit">Subscribe</button>
                </form>
            </div>
        </Modal>
    )
}

export default FillInformationModal;
