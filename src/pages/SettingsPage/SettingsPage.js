import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import Checkbox from 'components/Checkbox/Checkbox'
import { updateNationalitySettings } from 'actions/settings'
import './SettingsPage.scss'

function SettingsPage() {
    const nationalities = useSelector(state => state.nationalities)
    const dispatch = useDispatch()

    const nationalityChangeHandler = (name, label, checked) => {
        dispatch(updateNationalitySettings(name, label, checked))
    }
    return (
        <div className="settings-page container">
            <Header />
            <section className="settings row">
                <form>
                    <fieldset className="form-group">
                        <legend>Nationality Settings</legend>
                        <div id="checkboxGroup">
                            {Object.values(nationalities).map(
                                nationality => <Checkbox key={nationality.name}
                                                         name={nationality.name} 
                                                         label={nationality.label} 
                                                         checked={nationality.enabled} 
                                                         onChange={nationalityChangeHandler} 
                                                />
                            )}
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default SettingsPage