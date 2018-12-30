import React from 'react'
import "./FormFields.scss";
export default function FormFields({
    type,
    className,
    placeholder,
    name,
    value,
    textLabel,
    event,
    disLabel
}) {
    return (
        <div>
            {textLabel && disLabel && (<label>{textLabel}</label>)}
            {name && !textLabel && disLabel && (<label>{name}</label>)}
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
