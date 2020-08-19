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
      <SEO title="Norway" />
      <header className="hero-norway">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i Norge</h2>
        <p>
          Fra Kristiansand mod syd til Nordkap mod nord byder Norge på et
          enestående udvalg af destinationer. Du kan opleve midnatssolen og
          nordlyset, smukke fjorde og imponerende natur samt pulserende byliv,
          gourmetrestauranter og festivaler! Bo på et af vores cirka 90 hoteller
          i Norge, og nyd vores prisvindende morgenmad.
        </p>
      </section>
      <Cities cities={cities} />
    </Layout>
  )
}

// Filter country equal to Norge
export const query = graphql`
  {
    allStrapiCities(filter: { country_name: { eq: "Norge" } }) {
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
