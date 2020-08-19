// FEATURED/FILTERED NEWS
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import News from "../components/News"
import Rooms from "../components/Rooms"
import SEO from "../components/SEO"

// with page query you can access graphql in the data object
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to news with alias
  const {
    allStrapiNews: { nodes: news },
  } = data
  const {
    allStrapiRooms: { nodes: rooms },
  } = data
  const {
    allAirtable: { nodes: projects },
  } = data

  return (
    // pass in and render the title props here.
    <Layout>
      <SEO title="Home" description="Hotel Overlook" />
      <Hero projects={projects}/>
      {/* FEATURED NEWS */}
      <News news={news} title="Se vores nyheder" />
      {/* FEATURED ROOMS */}
      <Rooms rooms={rooms} title="Se udvalgte værelser" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiNews(filter: { featured: { eq: true } }) {
      nodes {
        id
        slug
        title
        teaser
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiRooms(filter: { featured: { eq: true } }) {
      nodes {
        id
        slug
        room_title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

// ...GatsbyImageSharpFluid
