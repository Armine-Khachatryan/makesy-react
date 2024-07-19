import React from 'react';
import Modal from 'react-modal';
import BlogImage18 from '../../../assets/images/BlogImages/BlogImage18.png';
import Button from "../../../ui/button/Button";
import classes from './SuccessModal.module.css';


const SuccessModal=(props)=>{


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


    return(
        <Modal
            isOpen={props.successModalIsOpen}
            onRequestClose={props.closeSuccessModal}
            style={customStyles}
            ariaHideApp={false}
            class={"modalStyle"}>
            <div className={classes.inside}>
                <div><img src={BlogImage18} alt={""}/></div>
                <div className={classes.title}>You've successfully subscribed to our newsletter</div>
                <Button minWidth="200px" OnClick={props.closeSuccessModal}>Close</Button>
            </div>
        </Modal>
    )
}


export default SuccessModal;