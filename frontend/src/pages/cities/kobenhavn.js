import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import SEO from "../../components/SEO"

// with page query you can access graphql in the data object
export default ({ data }) => {
  // console.log(data.allStrapiCities.nodes[0].name)
  // destructuring the graphql data
  // rename nodes to cities with alias, cities hold the data
  const {
    allStrapiCities: { nodes: cities },
  } = data
  // console.log(cities[0].name)
  // console.log(cities[0].description)

  return (
    <Layout>
      <SEO title="Denmark" />
      <header className="hero-denmark">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i København</h2>
        <p>{cities[0].description}</p>
      </section>
      {/* <Artists artists={artists} /> */}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiCities {
      nodes {
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
