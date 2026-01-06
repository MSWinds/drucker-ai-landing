import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cgu-red disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-cgu-red text-white hover:bg-cgu-red-light shadow-[0_0_20px_rgba(175,29,39,0.3)] hover:shadow-[0_0_30px_rgba(175,29,39,0.5)] border border-transparent",
        secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm",
        outline: "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
