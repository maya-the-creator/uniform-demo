import { graphql } from "gatsby"
import React from "react"
import { contentfulOptimizeListReader } from "@uniformdev/optimize-tracker-contentful"
import { Personalize } from "@uniformdev/optimize-tracker-react"
import { Splitter } from "./Splitter"

const PersonalizedHeroLoading = () => {
  return (
    <>
      <div className="pt-24">
        <div
          className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
          style={{ height: "548px" }}
        >
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full"></p>
            <h1 className="my-4 text-5xl font-bold leading-tight"></h1>
            <p className="leading-normal text-2xl mb-8"></p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center"></div>
        </div>
      </div>
      <Splitter />
    </>
  )
}

export const PersonalizedHero: React.FC<any> = ({ unfrmOptP13nList }) => {
  const variations = contentfulOptimizeListReader(unfrmOptP13nList)
  return (
    <Personalize
      name="Personalized Hero"      
      variations={variations}
      trackingEventName="heroPersonalized"
      loadingMode={PersonalizedHeroLoading}
    />
  )
}

export const query = graphql`
  fragment personalizedHero on ContentfulPersonalizedHero {
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
    unfrmOptP13nList {
      title
      description
      buttonText
      image {
        description
        file {
          fileName
          url
          details {
            image {
              height
              width
            }
            size
          }
          contentType
        }
      }
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
      unfrmOptIntentTag {
        intents {
          registration {
            str
          }
          cfp_utm {
            str
          }
          dev {
            str
          }
          marketer {
            str
          }
        }
      }
    }
  }
`
