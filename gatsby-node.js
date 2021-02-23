const path = require("path")

exports.onPostBuild = ({ reporter }) => {
  reporter.info("Your Gatsby site has been built!")
}

// creatre contentful pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const contentfulPageTemplate = path.resolve(
    "./src/templates/ContentfulPage.tsx"
  )

  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            id            
            slug
            title
            sys {
              contentType {
                sys {
                  id
                  linkType
                  type
                }
              }
              revision
              type
            }
          }
        }
      }
    }
  `)

  result.data.allContentfulPage.edges.forEach(edge => {    
    createPage({
      path: `${edge.node.slug}`,
      component: contentfulPageTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
        sys: {
          ...edge.node.sys,
        },
        components: edge.node.components, // array of components
      },
    })
  })
}
