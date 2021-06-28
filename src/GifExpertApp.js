import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One piece",
    "Disney",
    "Star wars",
  ]);

  return (
    <>
      <h1>GifApp</h1>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
