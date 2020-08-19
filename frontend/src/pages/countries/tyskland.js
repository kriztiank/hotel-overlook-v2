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
      <SEO title="Germany" />
      <header className="hero-germany">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i Tyskland</h2>
        <p>
          Kultur, shopping og natteliv. Tyske byer har det hele! Topattraktioner
          i Berlin er Brandenburger Tor, Berliner Fernsehturm og Potsdamer
          Platz-distriktet. Vores to hoteller i Berlin ligger centralt og tæt på
          alle oplevelserne. Hamborg er Tysklands næststørste by, og den
          imødekommer især musicalfans. Metropolen Frankfurt byder på museer i
          stor stil samt hygge og afslapning langs Main-flodens bredder. På både
          hotellerne i Berlin, Hamborg og Frankfurt vil du nyde komfort,
          bekvemmelighed og moderne indretning.
        </p>
      </section>
      <Cities cities={cities} />
    </Layout>
  )
}

// Filter country equal to Tyskland
export const query = graphql`
  {
    allStrapiCities(filter: { country_name: { eq: "Tyskland" } }) {
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
