import React from "react";
import "./CategoryItem.styles.scss";

function CategoryItem({ title, imageUrl }) {
  return (
    <div className="category-container">
      <div
        className="category-bcg-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default CategoryItem;
