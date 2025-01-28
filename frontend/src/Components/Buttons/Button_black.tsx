import React from "react";

interface ButtonProps {
  children: React.ReactNode; 
  type?: "button" | "submit" | "reset"; 
  bgColor?: string; 
  textColor?: string; 
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
