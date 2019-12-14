import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
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

/**
 * Modal component with arbitrary children.
 * This component is internally used by ModalWithPortal component.
 * This component should not be used as a standalone component.
 * Please use ModalWithPortal component instead.
 * 
 * @param {Object} props
 * @returns {React.Element}
 */
export const Modal = React.memo(({visible, title, children, onClose}) => {
    const modalClassName = classnames('modal', {
        'visible': visible
    })
    
    const closeHandler = useCallback((e) => {
        if (e.target.id === 'userModal') {
            onClose(e)
        }
    })
    
    return <div className={modalClassName} tabIndex="-1" onClick={closeHandler} role="dialog" id="userModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                {
                    title
                    ? <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    : null
                }
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
})

Modal.propTypes = {
    // indicates whether the modal should be visible
    visible: PropTypes.bool,

    // modal title
    title: PropTypes.string,

    // children can be arbitrary JSX, 
    // they will be rendered inside the Modal body
    children: PropTypes.array.isRequired,

    // onClose handler is invoked whenever user clicks 
    // on "Close" button at the bottom of the modal,
    // on a small "x" icon at the top right,
    // or on the area outside of the modal
    onClose: PropTypes.func.isRequired
}

/**
 * Component for rendering Modal in a portal.
 * This is a wrapper around Modal component.
 * It passes all its props to the underlying Modal component.
 * This component should be used for creating modals.
 * 
 * @param {Object} props
 * @returns {React.Portal}
 */
const ModalWithPortal = (props) => {
    return createPortal(<Modal {...props} />, '#modal-root')
}

ModalWithPortal.propTypes = {
    // indicates whether the modal should be visible
    visible: PropTypes.bool,

    // modal title
    title: PropTypes.string,

    // children can be arbitrary JSX, 
    // they will be rendered inside the Modal body
    children: PropTypes.array.isRequired,

    // onClose handler is invoked whenever user clicks 
    // on "Close" button at the bottom of the modal,
    // on a small "x" icon at the top right,
    // or on the area outside of the modal
    onClose: PropTypes.func.isRequired
}

export default ModalWithPortal