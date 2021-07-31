import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories=[] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>GifApp</h1>
      <CategoryAdd setCategories={setCategories} />
      <hr/>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
