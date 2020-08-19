import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Cities from "../../components/Cities"
import SEO from "../../components/SEO"

// with page query you can access graphql in the data object
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  const {
    allStrapiCities: { nodes: cities },
  } = data

  return (
    <Layout>
      <SEO title="Iceland" />
      <header className="hero-iceland">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i Island</h2>
        <p>Midt i det nordlige Atlanterhav finder du et moderne samfund bygget på traditioner og fortællinger helt tilbage fra vikingetiden. Den magiske natur byder på vulkaner, gejsere, gletsjere, fjorde og vandfald. Og i farvandet omkring øen finder du sæler, delfiner, spækhuggere og pukkelhvaler. Du finder også et rigt kulturliv med masser af festivaler, som foregår hele året rundt.</p>
      </section>
      <Cities cities={cities} />
    </Layout>
  )
}

// Filter country equal to Island
export const query = graphql`
  {
    allStrapiCities(filter: { country_name: { eq: "Island" } }) {
      nodes {
        id
        slug
        name
        description
        country_name
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
