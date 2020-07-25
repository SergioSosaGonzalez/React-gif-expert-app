import React, { useState } from "react";
import PropType from "prop-types";
const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (inputValue.trim().length > 2) {
        setCategories((cats) => [inputValue, ...cats]);
        setInputValue("");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        required
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropType.func.isRequired,
};

export default AddCategory;
