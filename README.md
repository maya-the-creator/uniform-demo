# Optimize Contentful Gatsby.js Example Project
This is a [Gatsby](https://www.gatsbyjs.com/) project bootstrapped with [`Gatsby cli`](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-git).


## Getting Started
### Configure environment variables
1. Copy .env.example to .env
2. Set Contentful variable values to match your CMS [see example config](#example-gatsby-configjs)
3. Configure your uniform data source

### Install Gatsby CLI tool if you don't have
```shell
npm install -g @gatsby/cli
```

### Install packages
```shell
npm i
# or
yarn
```

### Run the development server
```shell
npm run develop
# or
yarn develop
```

* open <http://localhost:8000/> with your browser to see the website locally.
* open <http://localhost:8000/___graphql> to see your graphql explorer and run / test your graphql queries.
* open our [GraphQL page query example](http://localhost:8000/___graphql?query=query%20AllPages%20%7B%0A%20%20allContentfulPage%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20revision%0A%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20SinglePage(%24slug%3A%20String!)%20%7B%0A%20%20contentfulPage(slug%3A%20%7Beq%3A%20%24slug%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20components%20%7B%0A%20%20%20%20%20%20...whyAttend%0A%20%20%20%20%20%20...callToAction%0A%20%20%20%20%20%20...hero%0A%20%20%20%20%20%20...personalizedHero%0A%20%20%20%20%20%20...registrationForm%0A%20%20%20%20%20%20...talkList%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20GetAllTalks%20%7B%0A%20%20allContentfulTalk%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20...talkListItem%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20talkListItem%20on%20ContentfulTalk%20%7B%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20title%0A%20%20description%20%7B%0A%20%20%20%20raw%0A%20%20%7D%0A%20%20unfrmOptIntentTag%20%7B%0A%20%20%20%20intents%20%7B%0A%20%20%20%20%20%20dev%20%7B%0A%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20marketer%20%7B%0A%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20type%0A%20%20%20%20%7D%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A%0Afragment%20whyAttend%20on%20ContentfulWhyAttend%20%7B%0A%20%20id%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20image%20%7B%0A%20%20%20%20description%0A%20%20%20%20file%20%7B%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20details%20%7B%0A%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20size%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20contentType%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20title%0A%20%20description%20%7B%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A%0Afragment%20callToAction%20on%20ContentfulCallToAction%20%7B%0A%20%20id%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20buttonLink%0A%20%20buttonText%0A%20%20heading%0A%20%20subheading%0A%7D%0A%0Afragment%20hero%20on%20ContentfulHero%20%7B%0A%20%20id%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20image%20%7B%0A%20%20%20%20description%0A%20%20%20%20file%20%7B%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20details%20%7B%0A%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20size%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20contentType%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20title%0A%20%20buttonText%0A%20%20buttonLinkSlug%0A%20%20text%3A%20description%0A%20%20unfrmOptIntentTag%20%7B%0A%20%20%20%20intents%20%7B%0A%20%20%20%20%20%20registration%20%7B%0A%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20cfp_utm%20%7B%0A%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20dev%20%7B%0A%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20marketer%20%7B%0A%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20personalizedHero%20on%20ContentfulPersonalizedHero%20%7B%0A%20%20id%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20unfrmOptP13nList%20%7B%0A%20%20%20%20title%0A%20%20%20%20description%0A%20%20%20%20buttonText%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20file%20%7B%0A%20%20%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20details%20%7B%0A%20%20%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20size%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20contentType%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20revision%0A%20%20%20%20%20%20type%0A%20%20%20%20%7D%0A%20%20%20%20unfrmOptIntentTag%20%7B%0A%20%20%20%20%20%20intents%20%7B%0A%20%20%20%20%20%20%20%20registration%20%7B%0A%20%20%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20cfp_utm%20%7B%0A%20%20%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20dev%20%7B%0A%20%20%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20marketer%20%7B%0A%20%20%20%20%20%20%20%20%20%20str%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20registrationForm%20on%20ContentfulRegistrationForm%20%7B%0A%20%20id%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20heading%0A%20%20buttonText%0A%20%20registeredText%0A%7D%0A%0Afragment%20talkList%20on%20ContentfulTalksList%20%7B%0A%20%20sys%20%7B%0A%20%20%20%20contentType%20%7B%0A%20%20%20%20%20%20sys%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20linkType%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20revision%0A%20%20%20%20type%0A%20%20%7D%0A%20%20title%0A%20%20p13nTitle%0A%20%20count%0A%20%20registerButtonText%0A%7D%0A&codeExporterIsOpen=false&operationName=GetAllTalks&variables=%7B%0A%20%20%22slug%22%3A%20%22%2F%22%0A%7D&explorerIsOpen=true)

### Build for production and launch server
```shell
npm run build
# or
yarn build
```

### Example gatsby-config.js
```javascript
 const dotenv = require('dotenv');

 dotenv.config({
   path: `.env`
 });

module.exports = {
  siteMetadata: {
    title: 'uniform-optimize-gatsby-contentful-starter',    
    description: 'UniformConf, a Uniform Optimize demo site'
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.NODE_ENV === 'production' ? process.env.CONTENTFUL_CDA_ACCESS_TOKEN : process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
        host: process.env.NODE_ENV === 'production' ? process.env.CONTENTFUL_HOST : process.env.CONTENTFUL_HOST_PREVIEW,
        downloadLocal: process.env.NODE_ENV === 'production' ? false : true
      }
    }
  ],
}
```


### Example gatsby-node.js

Before setting you the gatsby-node.js configuration, you must create a template inside ```src/templates/```. In our example we create a ```ContentfulPage.tsx``` file in the templates directory which we map to in our ```gatsby-nodes.js``` file.

```javascript
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
    console.log(edge.node.components)
    createPage({
      path: `${edge.node.slug}`,
      component: contentfulPageTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
        sys: {
          ...edge.node.sys,
        },
        components: edge.node.components,
      },
    })
  })
}
```

## Learn More
To learn more about Gatsby.js, take a look at the following resources:
- [Gatsby Documentation](https://www.gatsbyjs.com/docs/) - learn about Gatsby.js features and API.
- [Gatsby Contribution](https://github.com/gatsbyjs/gatsby#-how-to-contribute) - Contribute to Gatsby
- [Gatsby Source Contentful](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/?=content)


## Known Issues
Gatsby will try and make requests to ```page-data``` and throw a console error which can impact lighthouse scores. See [Github issue](https://github.com/gatsbyjs/gatsby/issues/16097) for more details