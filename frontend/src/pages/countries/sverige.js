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
      <SEO title="Sweden" />
      <header className="hero-sweden">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i Sverige</h2>
        <p>
          Udforsk Sveriges fantastiske natur, besøg historiske steder overalt i
          landet eller nyd den verdensberømte skærgård. Det svenske landskab
          veksler meget, afhængigt af hvilken del af Sverige du besøger -
          bjerge, endeløse skove, utallige søer og floder mod nord og
          blomstrende marker mod syd. I Sverige kan du både opleve sne om
          vinteren og masser af sol om sommeren. Glem ikke et besøg i Den Gamle
          By og det splinternye "Abba The Museum" i Stockholm. Bo på et af
          Overlooks 83 hoteller i Sverige.
        </p>
      </section>
      <Cities cities={cities} />
    </Layout>
  )
}

// Filter country equal to Sverige
export const query = graphql`
  {
    allStrapiCities(filter: { country_name: { eq: "Sverige" } }) {
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
