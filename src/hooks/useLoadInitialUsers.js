import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadInitialUsers } from 'actions'

const useLoadInitialUsers = () => {
    const allUsers = useSelector(state => state.allUsers)
    const dispatch = useDispatch()
    useEffect(() => {
        if (allUsers.length === 0) {
            dispatch(loadInitialUsers())
        }
    }, [])
}

export default useLoadInitialUsers