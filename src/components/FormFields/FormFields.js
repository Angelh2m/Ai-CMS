import React from 'react'
import "./FormFields.scss";
export default function FormFields({
    type,
    className,
    placeholder,
    name,
    value,
    textLabel,
    event
}) {
    return (
        <div>
            {textLabel && (<label>{textLabel}</label>)}
            {name && !textLabel && (<label>{name}</label>)}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={className}
                value={value}
                onChange={event}
            />
        </div>
    )
}
