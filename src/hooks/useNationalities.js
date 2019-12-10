import { useDispatch, useSelector } from 'react-redux'
import { updateNationalitySettings } from 'actions/settings'
import { nationalitiesSelector } from '../selectors'

/**
 * Custom hook for getting and setting user nationalities
 * 
 * @returns {Array} Array of 2 items. 1st item contains the list of nationalities,
 * and 2nd item contains a function which can be used in order to update the list of nationalities.
 */
const useNationalities = () => {
    const nationalities = useSelector(nationalitiesSelector)
    const dispatch = useDispatch()

    const nationalityChangeHandler = (name, label, checked) => {
        dispatch(updateNationalitySettings(name, label, checked))
    }

    return [nationalities, nationalityChangeHandler]
}

export default useNationalities