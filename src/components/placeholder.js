import React from 'react'

import PropTypes from 'prop-types'

import './placeholder.css'

const Placeholder = (props) => {
  return (
    <div className="placeholder-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="placeholder-image"
      />
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="placeholder-image1"
      />
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="placeholder-image2"
      />
    </div>
  )
}

Placeholder.defaultProps = {
  imageAlt2: 'image',
  imageSrc2: '/favicon_512.png',
  imageSrc1: '/favicon_192.png',
  imageAlt: 'image',
  imageAlt1: 'image',
  imageSrc: '/rffa_logo_website.png',
}

Placeholder.propTypes = {
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Placeholder
