import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadInitialUsers } from 'actions'

/**
 * Custom hook that dispatches loadInitialUsers action if no users are loaded
 */
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