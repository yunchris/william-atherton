import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../../lib/sanity'
import styles from '../../styles/sanity.module.css'

export const getCMSData = async (query, params) => {
  return sanityClient.fetch(query, params)
}

// Get a pre-configured url-builder from sanity client
const builder = imageUrlBuilder(sanityClient)

// Simple function that gives the builder an image and returns the builder
// to specify additional parameters:
export const urlFor = (source) => {
  return builder.image(source)
}

// Customize font sizes and styles for serializer here
const textStyles = {
  h1: '32px',
  h2: '28px',
  h3: '22px',
  h4: '20px',
  normal: '18px',
}

// Customize render of Sanity content blocks
const serializer = {
  types: {
    image: (props) => {
      const { node } = props
      return <img src={urlFor(node).fit('scale').url()} mb="1rem" />
    },
    block: (props) => {
      const { children, node } = props
      if (node.style === 'blockquote')
        return (
          <blockquote className={styles.sanityBlockquote}>
            {children}
          </blockquote>
        )
      return (
        <div>
          {children}
        </div>
      )
    },
  },
  list: (props) => {
    const { children } = props
    return (
      <div className={styles.sanityList}>
        {children}
      </div>
    )
  },
  listItem: (props) => {
    const { children } = props
    return (
      <ul>
        <li>{children}</li>
      </ul>
    )
  },
  marks: {
    link: (props) => {
      const { children, mark } = props
      return mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      )
    },
    internalLink: (props) => {
      const { children, mark } = props
      return <a href={`/${mark.slug.current}`}>{children}</a>
    },
  },
}

// Function to serialize and render custom FE for content blocks
export const customBlock = (data) => {
  return <BlockContent blocks={data} serializers={serializer} />
}
