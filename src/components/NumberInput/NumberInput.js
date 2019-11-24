import React from 'react'

const NumberInput = (props) => {
    const changeHandler = (e) => {
        const value = e.target.value
        props.onChange && props.onChange(value)
    }
    return <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.label}</label>
        <input type="number" 
               className="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"
               placeholder={props.placeholder} 
               value={props.value}
               onChange={changeHandler}
        />
        {props.description
            ? <small id="emailHelp" className="form-text text-muted">{props.description}</small>
            : null
        }
        
    </div>
}

export default NumberInput