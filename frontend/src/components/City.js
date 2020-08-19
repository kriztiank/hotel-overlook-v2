import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...cities in components/Cities.js = allStrapiCities
const City = ({ id, slug, name, description, image }) => {
  return (
    <Link to={`/cities/${slug}`} key={id} className="cards">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="cards-img" />
        <div className="cards-card">
          <h3> {name} </h3>
          <p> {description}</p>
        </div>
      </article>
    </Link>
  )
}

export default City

// EXPORT AND RENDER IN cities.js PAGE
