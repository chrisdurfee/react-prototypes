import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary bg-background ${className}`}
      {...props}
    />
  );
};

export default Input;
