import { useStaticQuery, graphql } from "gatsby"

// Gets all talks from graphql
// ...talkListItem fragment can be found in the TalkListItem.tsx file
export const useAllTalks = () => {
  return useStaticQuery(graphql`query {
      allContentfulTalk {
          edges {
              node {
                  ...talkListItem
              }
          }
      }
  }`)
}