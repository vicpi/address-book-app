import React from 'react'
import PropTypes from 'prop-types'

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
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Checkbox