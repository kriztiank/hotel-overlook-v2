import React from "react"
import Title from "./Title"
import New from "./New"

// index > Rooms > Room
// pull out the graphql fields with destructuring
const News = ({ news, title }) => {
  return (
    <section className="section">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <div className="section-center cards-center">
        {news.map(news => {
          // use object spread operator to get all properties
          return <New key={news.id} {...news} />
        })}
      </div>
    </section>
  )
}

export default News
