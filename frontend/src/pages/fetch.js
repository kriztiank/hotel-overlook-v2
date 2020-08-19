import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

// The GraphQL data is passed into the component via props.data
const fetchPage = props => {
  return (
    <Layout>
      {props.data.allCountries.edges.map(({ node }) => {
        return (
          <div key={node.id} style={{ marginTop: 60 }}>
            <p>{node.name}</p>
            <p>{node.description}</p>
            <p><img src={node.image} alt={node.name} /></p>
          </div>
        )
      })}
    </Layout>
  )
}

// use the GraphiQL query here
export const query = graphql`
  {
    allCountries {
      edges {
        node {
          id
          name
          description
          image
        }
      }
    }
  }
`

export default fetchPage
