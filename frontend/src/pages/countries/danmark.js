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
      <SEO title="Denmark" />
      <header className="hero-denmark">
        <h1>Hoteller og destinationer</h1>
      </header>
      <section className="section-center">
        <h2>Vores hoteller i Danmark</h2>
        <p>
          Tag på ferie i Danmark og oplev det brede udvalg af attraktioner – fra
          verdensberømt design og arkitektur, restauranter i verdensklasse og
          fascinerende nationalhistorie til den rige og varierede natur og
          populære oplevelser i Danmark for hele familien. Alting er inden for
          rækkevidde, og afstandene er overkommelige. Hvis du planlægger din
          næste ferie i Danmark, så husk, at Overlook har 26 hoteller over hele
          landet at vælge imellem. Står du overfor at skulle arrangere et møde
          eller en konference, har Scandic med sine 26 hoteller i Danmark helt
          sikkert faciliteterne, der passer til dine krav og behov.
        </p>
      </section>
      <Cities cities={cities} />
    </Layout>
  )
}

// Filter country equal to Danmark
export const query = graphql`
  {
    allStrapiCities(filter: { country_name: { eq: "Danmark" } }) {
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
