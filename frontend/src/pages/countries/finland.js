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
      <SEO title="Finland" />
      <header className="hero-finland">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i Finland</h2>
        <p>
          Finland bliver i øjeblikket anset som en af de mest interessante
          rejsedestinationer. Det rå og uberørte landskab er unikt, og lyden af
          stilhed er landets bedst bevarede hemmelighed. Landets vidundere i
          naturen inkluderer nordlyset, midnatssolen og selvfølgelig det næsten
          uendelige antal søer. De fire årstider byder på mange forskellige
          aktiviteter. I Finland tilbyder vi hoteller på 30 destinationer.
        </p>
      </section>
      <Cities cities={cities} />
    </Layout>
  )
}

// Filter country equal to Finland
export const query = graphql`
  {
    allStrapiCities(filter: { country_name: { eq: "Finland" } }) {
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
