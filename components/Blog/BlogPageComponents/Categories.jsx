import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'

const Categories = ({ category }) => {
  const router = useRouter()



  if (!category) {
    return <p>loading</p>
  }
  const handleClick = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className="categories columns" style={{ backgroundColor: "#333", borderRadius: "1px" }}>
      <h3 className="p__opensans title">Categories</h3>
      <hr />
      {category && category.map((category, index) =>

        <>
          {!category ? "Something went wrong..." :
            <Link href={"/categories/[slug]"} as={`/categories/${category.slug.current}`}
              key={index} >
              <a onClick={() => router.push(`/categories/${category.slug.current}`)}> {category.title}</a>
            </Link>

          }

        </>
      )}
    </div>
  )
}

export default Categories
