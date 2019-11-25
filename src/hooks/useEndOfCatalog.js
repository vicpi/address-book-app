import { useSelector } from 'react-redux'
import { allUsersSelector, maxCatalogLengthSelector } from 'selectors'

const useEndOfCatalog = () => {
    const maxCatalogLength = useSelector(maxCatalogLengthSelector)
    const allUsers = useSelector(allUsersSelector)
    const isEndOfCatalog = () => {
        return allUsers.length >= maxCatalogLength
    } 

    return isEndOfCatalog
}

export default useEndOfCatalog