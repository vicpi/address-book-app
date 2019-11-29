import React from 'react'
import PropTypes from 'prop-types'

/**
 * Checkbox component.
 * Controlled component. You should provide checked value
 * and onChange handler from the parent component.
 * 
 * @param {Object} props
 * @returns {React.Element}
 */
const Checkbox = ({ name, label, checked, onChange }) => {
    const changeHandler = (e) => {
        onChange && onChange(name, label, e.target.checked)
    }
    
    return <div className="form-check">
        <input type="checkbox"
               className="form-check-input"
               id={name} 
               checked={checked}
               onChange={changeHandler}
        />
        <label className="form-check-label"
               htmlFor={name}
        >
            {label}
        </label>
    </div>
}

Checkbox.propTypes = {
    // name is used for providing an id to the underlying input
    name: PropTypes.string.isRequired,

    // defines if the checkbox is checked
    checked: PropTypes.bool.isRequired,

    // label for the checkbox
    label: PropTypes.string.isRequired,

    // onChange handler is invoked when user clicks on the checkbox
    // and changes its value
    onChange: PropTypes.func.isRequired,
}

export default Checkbox