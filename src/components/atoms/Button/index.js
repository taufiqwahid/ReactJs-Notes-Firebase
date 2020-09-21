import React from "react";

const Button = ({ onClick, value, loading, className }) => {
  if (loading) {
    return (
      <input type="submit" value="Proces..." className={className} disabled />
    );
  } else {
    return (
      <input
        type="submit"
        className={className}
        value={value}
        onClick={onClick}
      />
    );
  }
};

export default Button;
