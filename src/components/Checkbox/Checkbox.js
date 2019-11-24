import React from 'react'

const Checkbox = (props) => {
    const onChange = (e) => {
        props.onChange && props.onChange(e.target.checked)
    }
    
    return <div className="form-check">
        <input type="checkbox"
               className="form-check-input"
               id="exampleCheck1" 
               checked={props.value}
               onChange={onChange}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">{props.label}</label>
    </div>
}

export default Checkbox