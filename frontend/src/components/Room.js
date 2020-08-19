import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

// index > Rooms > Room > rooms
const Room = ({ id, slug, room_title, description, image }) => {
  return (
    <Link to={`/rooms/${slug}`} key={id} className="cards">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="cards-img" />
        <div className="cards-card">
          <h3> {room_title} </h3>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default Room
