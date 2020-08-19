// ALL ROOMS
import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
// import Rooms from "../../components/Rooms"
// ...GatsbyImageSharpFluid

// index > Rooms > Room > rooms
const RoomsPage = ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to rooms with alias
  // const {
  //   allStrapiRooms: { nodes: rooms },
  // } = data
  return (
    <Layout>
      <h1>STANDARD ROOM</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiRooms {
      nodes {
        hotel_name
        room_title
        description
        num_persons
        area
        num_rooms
        day_price_normal
        day_price_flex
        image_title
        room_facilities {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default RoomsPage
