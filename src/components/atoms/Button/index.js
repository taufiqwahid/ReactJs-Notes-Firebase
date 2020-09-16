import React from "react";

const Button = ({ onClick, value, loading }) => {
  if (loading) {
    return <input type="submit" value="Proces..." disabled />;
  } else {
    return <input type="submit" value={value} onClick={onClick} />;
  }
};

export default Button;
