import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const overlaysDiv = document.getElementById('overlays');

const Backdrop = props => {
    return <div onClick={props.onCloseCart} className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>  
    </div>
}

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.onClick}/>, overlaysDiv)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlaysDiv)}
        </Fragment>
    );
}

export default Modal;