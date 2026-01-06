import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <div
            className={`
        glass-panel rounded-2xl p-8 relative overflow-hidden group
        ${hoverEffect ? 'hover:bg-white/[0.05] transition-colors duration-500' : ''}
        ${className}
      `}
            {...props}
        >
            {/* Subtle shine effect on hover */}
            {hoverEffect && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            )}
            {children}
        </div>
    );
};

export default Card;
