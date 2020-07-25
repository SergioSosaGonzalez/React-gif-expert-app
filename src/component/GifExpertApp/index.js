import React, { useState } from "react";
import AddCategory from "../AddCategory";
import GifGrid from "../GifGrid";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>Gift Expert app</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
