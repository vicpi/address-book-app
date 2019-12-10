import { useSelector } from 'react-redux'
import { maxCatalogLengthSelector, allUsersSelector } from '../selectors'

/**
 * Custom hook that checks if the user reached the end of the catalog by scrolling down
 * 
 * @returns {bool} Returns true if maxCatalogLength was reached
 */
const useEndOfCatalog = () => {
    const maxCatalogLength = useSelector(maxCatalogLengthSelector)
    const allUsers = useSelector(allUsersSelector)
    const isEndOfCatalog = () => {
        return allUsers.length >= maxCatalogLength
    } 

    return isEndOfCatalog
}

export default useEndOfCatalog