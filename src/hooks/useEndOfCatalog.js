import { useSelector } from 'react-redux'

const useEndOfCatalog = () => {
    const maxCatalogLength = useSelector(state => state.maxCatalogLength)
    const allUsers = useSelector(state => state.allUsers)
    const isEndOfCatalog = () => {
        return allUsers.length >= maxCatalogLength
    } 

    return isEndOfCatalog
}

export default useEndOfCatalog