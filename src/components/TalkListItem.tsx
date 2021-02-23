import { graphql } from "gatsby"
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const TalkListItem: React.FC<any> = ({
  title,
  description,
  unfrmOptIntentTag,
}) => {
  let intents = []
  if (unfrmOptIntentTag) {        
    // Gatsby graphql returns all intents even if value is null
    // filtering each of these intents that are null to give the correct
    // intent tags on each of the talks
    intents = Object.keys(unfrmOptIntentTag?.intents).filter((intent) => {
      if(unfrmOptIntentTag.intents[intent] !== null) {
        return intent
      }
    });
  }
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2">
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
          <div className="mt-3 mb-3 flex items-center justify-start">
            {intents.map((intentId, key) => (
              <IntentLabel key={key} intentId={intentId} />
            ))}
          </div>
        </div>
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full font-bold text-xl text-gray-800 px-6">
            {title}
          </div>
        </a>
        <div className="text-gray-800 px-6 pb-6 text-sm">
          {renderRichText(description)}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment talkListItem on ContentfulTalk {
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
    description {
      raw
    }
    unfrmOptIntentTag {
      intents {
        dev {
          str
        }
        marketer {
          str
        }
      }
      sys {
        type
      }
    }
  }
`

export interface IntentLabelProps {
  intentId: string | undefined
}

const IntentLabel: React.FC<IntentLabelProps> = ({ intentId }) => {
  if (!intentId) {
    return null
  }
  
  if (
    intentId == "72ba66d0-0478-4d62-9ef4-5461c89b1ffc" ||
    intentId === "dev"
  ) {
    return (
      <span className="ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Developers
      </span>
    )
  }

  if (
    intentId == "0d77df8f-a903-4163-befb-008bd061d454" ||
    intentId === "marketer"
  ) {
    return (
      <span className="ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
        Marketers
      </span>
    )
  }

  return (
    <span className="ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
      Unknown
    </span>
  )
}
