import React from 'react'


const Input = ({ label, type, value, placeholder, onChange }) => {
    return (
        <div>
            <input
                label={label}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />

        </div>
    );
};

export default Input
