import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...news in components/News.js = allStrapiNews
const New = ({ id, slug, title, teaser, image }) => {
  return (
    <Link to={`/news/${slug}`} key={id} className="cards">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="cards-img" />
        <div className="cards-card">
          <h3> {title} </h3>
          <p>{teaser}</p>
        </div>
      </article>
    </Link>
  )
}

export default New

// EXPORT AND RENDER IN news.js PAGE
