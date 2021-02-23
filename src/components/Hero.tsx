import { Link, graphql } from "gatsby"
import React from "react"
import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react"
import { Splitter } from "./Splitter"

export const Hero: React.FC<any> = ({
  title,
  buttonText,
  image,
  unfrmOptIntentTag,
  buttonLinkSlug,
  description,
}) => {
  useBehaviorTracking(unfrmOptIntentTag)
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">Uniform demo</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">{title}</h1>
            <p className="leading-normal text-2xl mb-8">{description}</p>

            <Link to={`${buttonLinkSlug}`}>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {image && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={image?.file?.details?.image?.height ?? 500}
                width={image?.file?.details?.image?.width ?? 500}
                src={image?.file?.url}
                alt={image?.description ?? buttonText}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  )
}

export const query = graphql`
  fragment hero on ContentfulHero {
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
    title
    buttonText
    buttonLinkSlug
    text: description
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
`
