import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import './SettingsPage.scss'
import Checkbox from 'components/Checkbox/Checkbox'
import NumberInput from 'components/NumberInput/NumberInput'
import { updateNationalitySettings } from 'actions/settings'

function SettingsPage() {
    const nationalities = useSelector(state => state.nationalities)
    const batchSize = useSelector(state => state.batchSize)
    const maxCatalogLength = useSelector(state => state.maxCatalogLength)
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
                        <legend>Nationalities</legend>
                        <div id="checkboxGroup">
                            {Object.values(nationalities).map(
                                nationality => <Checkbox key={nationality.name}
                                                         name={nationality.name} 
                                                         label={nationality.label} 
                                                         value={nationality.enabled} 
                                                         onChange={nationalityChangeHandler} 
                                                />
                            )}
                        </div>
                    </fieldset>
                    <NumberInput label="Batch Size" 
                                 placeholder="Please enter number"
                                 value={batchSize}
                                 onChange={() => {}}
                    />
                    <NumberInput label="Max length of catalog" 
                                 placeholder="Please enter number"
                                 value={maxCatalogLength}
                                 onChange={() => {}}
                    />
                    <button type="submit" className="btn btn-primary">Save settings</button>
                </form>
            </section>
        </div>
    )
}

export default SettingsPage