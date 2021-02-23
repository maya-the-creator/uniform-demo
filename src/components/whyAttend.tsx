import React from "react"
import { graphql } from "gatsby"

export const WhyAttend: React.FC<any> = ({ title, description, image }) => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto lg:flex lg:flex-wrap pt-4 pb-12">
        <div className="lg:w-1/2">
          <img
            src={image?.file?.url}
            height={image?.file?.details?.image?.height ?? 400}
            width={image?.file?.details?.image?.width ?? 400}
            alt={image?.description ?? title}
            loading="lazy"
            className="p-10 lg:my-auto"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="p-10 lg:my-auto">
            <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
              {title}
            </h2>
            <hr />
            <p className="text-gray-800 p-10 whitespace-pre-line">
              {description.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment whyAttend on ContentfulWhyAttend {
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
    description {
      description
    }
  }
`
