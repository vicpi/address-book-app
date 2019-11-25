import { useDispatch, useSelector } from 'react-redux'
import { updateNationalitySettings } from 'actions/settings'

const useNationalities = () => {
    const nationalities = useSelector(state => state.nationalities)
    const dispatch = useDispatch()

    const nationalityChangeHandler = (name, label, checked) => {
        dispatch(updateNationalitySettings(name, label, checked))
    }

    return [nationalities, nationalityChangeHandler]
}

export default useNationalities