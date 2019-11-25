import React from 'react'
import Header from 'components/Header/Header'
import Checkbox from 'components/Checkbox/Checkbox'
import useNationalities from 'hooks/useNationalities'
import './SettingsPage.scss'

function SettingsPage() {
    const [nationalities, nationalityChangeHandler] = useNationalities()
    return (
        <div className="settings-page container">
            <Header />
            <section className="settings row">
                <form>
                    <fieldset className="form-group">
                        <legend>Nationality Settings</legend>
                        <div>
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