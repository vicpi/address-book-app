import React from 'react'
import Modal from 'components/Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from 'actions'
import './UserDetailsModal.scss'

const UserDetailsModal = () => {
    const user = useSelector(state => state.selectedUser)
    const dispatch = useDispatch()
    const closeHandler = () => {
        dispatch(selectUser(null))
    }
    if (!user) {
        return null
    }
    return <Modal title="User Details" visible={true} onClose={closeHandler}>
        <div className="row">
            <div className="col">Firstname</div>
            <div className="col">{user.name.first}</div>
        </div>
        <div className="row">
            <div className="col">Lastname</div>
            <div className="col">{user.name.last}</div>
        </div>
        <div className="row">
            <div className="col">Username</div>
            <div className="col">{user.login.username}</div>
        </div>
        <div className="row">
            <div className="col">Email</div>
            <div className="col">{user.email}</div>
        </div>
        <div className="row">
            <div className="col">Street</div>
            <div className="col">{user.location.street.name}</div>
        </div>
        <div className="row">
            <div className="col">City</div>
            <div className="col">{user.location.city}</div>
        </div>
        <div className="row">
            <div className="col">State</div>
            <div className="col">{user.location.state}</div>
        </div>
        <div className="row">
            <div className="col">Country</div>
            <div className="col">{user.location.country}</div>
        </div>
        <div className="row">
            <div className="col">Postcode</div>
            <div className="col">{user.location.postcode}</div>
        </div>
        <div className="row">
            <div className="col">Phone</div>
            <div className="col">{user.phone}</div>
        </div>
        <div className="row">
            <div className="col">Cell</div>
            <div className="col">{user.cell}</div>
        </div>
    </Modal>
}

export default UserDetailsModal