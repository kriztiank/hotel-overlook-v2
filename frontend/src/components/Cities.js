import React from "react"
import City from "./City"
import { Link } from "gatsby"

// recieve data from cities page, pull out the graphql fields with destructuring, pass to City single
const Cities = ({ cities }) => {
  // console.log(cities);
  return (
    <section className="section section-center">
      <header className="grid-container-lineup">
        <Link to="/countries/danmark" className="grid white">Danmark</Link>
        <Link to="/countries/sverige" className="grid white">Sverige</Link>
        <Link to="/countries/norge" className="grid white">Norge</Link>
        <Link to="/countries/finland" className="grid white">Finland</Link>
        <Link to="/countries/island" className="grid white">Island</Link>
        <Link to="/countries/tyskland" className="grid white">Tyskland</Link>
        <Link to="/countries/polen" className="grid white">Polen</Link>
      </header>

      <div className="cards-center">
        {cities.map(cities => {
          // use object spread operator to get all properties
          return <City key={cities.id} {...cities} />
        })}
      </div>
    </section>
  )
}

export default Cities
