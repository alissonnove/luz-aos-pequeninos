
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  to,
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[44px]";
  
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 active:scale-95",
    secondary: "bg-yellow-400 text-blue-900 hover:bg-yellow-500 active:scale-95",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50 active:scale-95",
    ghost: "text-blue-900 hover:bg-blue-50 active:scale-95"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
