import React from "react";
import Link from "next/link";

const Categories = ({ category, posts }) => {
  return (
    <div className="categories columns">
      <div className="dropdown ">
        <h3 className="p__opensans  title">Категории</h3>
        <hr />
        {category &&
          category.map((category, index) => (
            <span className="" key={category.title}>
              {!category ? (
                "Something went wrong..."
              ) : (
                <Link
                  href={"/categories/asd[slug]"}
                  as={`/categories/${category.slug.current}`}
                >
                  {category.title} &#40;
                  {posts?.filter((x) => x.category === category.title).length}
                  &#41;
                </Link>
              )}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Categories;
