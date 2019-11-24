import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import './SettingsPage.scss'
import Checkbox from 'components/Checkbox/Checkbox'
import NumberInput from 'components/NumberInput/NumberInput'

function SettingsPage() {
    let nationalities = useSelector(state => state.nationalities)
    let batchSize = useSelector(state => state.batchSize)
    let maxCatalogLength = useSelector(state => state.maxCatalogLength)

    return (
        <div className="settings-page container">
            <Header />
            <section className="settings row">
                <form>
                    <div className="form-group">
                        <label htmlFor="checkboxGroup">Nationalities</label>
                        <div id="checkboxGroup">
                            {Object.values(nationalities).map(
                                nationality => <Checkbox key={nationality.label}
                                                         label={nationality.label.toUpperCase()} 
                                                         value={nationality.enabled} 
                                                         onChange={(e) => {}} 
                                                />
                            )}
                        </div>
                    </div>
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