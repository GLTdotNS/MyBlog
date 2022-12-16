import React from "react";
import Link from "next/link";

const Categories = ({ category }) => {
  if (!category) {
    return <p>loading</p>;
  }

  return (
    <div
      className="categories  columns"
      style={{ backgroundColor: "#333", borderRadius: "10px" }}
    >
      <div className="dropdown ">
        <h3 className="p__opensans  title">Categories</h3>
        <hr />
        {category &&
          category.map((category, index) => (
            <span className="" key={category.title}>
              {!category ? (
                "Something went wrong..."
              ) : (
                <Link
                  href={"/categories/[slug]"}
                  as={`/categories/${category.slug.current}`}
                >
                  {category.title}
                </Link>
              )}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Categories;
