import React from 'react'
import Link from "next/link"

const Categories = ({ category }) => {

  if (!category) {
    return <p>loading</p>
  }
 
  return (
    <div className="categories columns" style={{ backgroundColor: "#333", borderRadius: "1px" }}>
      <h3 className="p__opensans title">Categories</h3>
      <hr />
      {category && category.map((category) =>

        <>
          {!category ? "Something went wrong..." :
            <span  key={category._id} >
              <Link href={"/categories/[slug]"} as={`/categories/${category.slug.current}`}>
              <a> {category.title}</a>
            </Link>
            </span>

          }

        </>
      )}
    </div>
  )
}

export default Categories
