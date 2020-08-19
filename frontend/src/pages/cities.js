import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Cities from "../components/Cities"
// import Dummy from "../components/Dummy"
import SEO from "../components/SEO"

// artists > Artists > Artist
// cities > Cities > City
// with page query you can access graphql in the data object
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to cities with alias, cities holds the data, pass to Cities
  const {
    allStrapiCities: { nodes: cities },
  } = data

  return (
    <Layout>
      <SEO title="Alle lande" />
      {/* <Dummy /> */}
      <Cities cities={cities} title="Hoteller og destinationer" />
    </Layout>
  )
}

// sort the line-up in alphabetical order, ascending (A to Z)
export const query = graphql`
  {
    allStrapiCities(sort: { fields: name }) {
      nodes {
        id
        slug
        name
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
  }
`

// ...GatsbyImageSharpFluid
