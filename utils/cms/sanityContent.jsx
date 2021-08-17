import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from './sanityClient'
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

// Customize render of Sanity content blocks
const serializer = {
  types: {
    block: (props) => {
      const { children, node } = props
      if (node.style === 'blockquote')
        return (
          <blockquote className={styles.sanityBlockquote}>
            {children}
          </blockquote>
        )
      return (
        <span className={styles.sanityBlockCopy}>
          {children}
        </span>
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
    color: (props) => {
      const {children, mark} = props
      return (
        <span style={{color: mark.hex}}>{children}</span>
      )
    }
  },
}

// Function to serialize and render custom FE for content blocks
export const customBlock = (data) => {
  return <BlockContent blocks={data} serializers={serializer} className={styles.sanityBlock}/>
}
