import React from "react"
import Title from "./Title"
import Room from "./Room"

// index > Rooms > Room > rooms
// pull out the graphql fields with destructuring
const Rooms = ({ rooms, title }) => {
  return (
    <section className="section">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <div className="section-center cards-center">
        {rooms.map(rooms => {
          // use object spread operator to get all properties
          return <Room key={rooms.id} {...rooms} />
        })}
      </div>
    </section>
  )
}

export default Rooms
