import React from 'react';
import "./BaseContainer.scss";

export default function BaseContainer({ className, children }) {
    return <div className={className ? `container ${className}` : 'container'}>{children}</div>
}
