import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import './Modal.scss'

const createPortal = (reactElement, cssSelector) => {
    let portal = null
    if (typeof window !== 'undefined' && window.document) {
        const modalRoot = document.querySelector(cssSelector)
        if (modalRoot !== null) {
            portal = ReactDOM.createPortal(
                reactElement,
                modalRoot
            )
        }
    }

    return portal
}

export const Modal = (props) => {
    const modalClassName = classnames('modal', {
        'visible': props.visible
    })
    
    return <div className={modalClassName} tabIndex="-1" onClick={props.onClose} role="dialog" id="userModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{props.title}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={props.onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
}

const ModalWithPortal = (props) => {
    return createPortal(<Modal {...props} />, '#modal-root')
}

export default ModalWithPortal