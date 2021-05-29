import React from 'react';
import './Button.scss';

const Button = ({link, children}) => {
   
    return (
        <>
            <a   href={link} className="button">
                {children}
            </a>
        </>
    )
}

export default Button
