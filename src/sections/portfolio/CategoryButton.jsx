import React from "react";

const categoryButton = ({ category, className, onChangeCategory }) => {
  return (
    <button className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </button>
  );
};

export default categoryButton;
