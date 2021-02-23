import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { TalkListItem } from "./TalkListItem"
import { useAllTalks } from '../hooks/get-talks'
import { PersonalizableListItem } from "@uniformdev/optimize-tracker-common"
import { Personalize } from "@uniformdev/optimize-tracker-react"
import { contentfulOptimizeListReader } from "@uniformdev/optimize-tracker-contentful"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

export const TalkList: React.FC<any> = ({ registerButtonText, count, title, p13nTitle }) => {    
  const { allContentfulTalk: { edges: talks }} = useAllTalks();
  const personalizableTalks = contentfulOptimizeListReader(talks.map((talk) => talk.node));  
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        {talks && (
          <Personalize
            name="Personalized Talk List"
            variations={personalizableTalks}
            component={TalkListItem}
            count={count}
            buttonText={registerButtonText}
            trackingEventName="talkListPersonalized"
          >
            {({ personalized, components }) => (
              <>
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                  {personalized ? p13nTitle : title}
                </h2>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                </div>
                {components}
              </>
            )}
          </Personalize>
        )}
      </div>
    </section>
  )
}

export const query = graphql`
  fragment talkList on ContentfulTalksList {
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
    title
    p13nTitle
    count
    registerButtonText
  }
`
